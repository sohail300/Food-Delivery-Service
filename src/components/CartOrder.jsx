import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import PercentIcon from '@mui/icons-material/Percent';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartRestaurantState, cartDishesState, chargesState } from '../store/atoms';
import { RestaurantDishesImageLink } from '../utils/config';
import Input from '@mui/material/Input';

const CartOrder = () => {
    const setCartRestaurant = useSetRecoilState(cartRestaurantState);
    const setCartDishes = useSetRecoilState(cartDishesState);
    const cartRestaurant = useRecoilValue(cartRestaurantState);
    const cartDishes = useRecoilValue(cartDishesState);
    const charges = useRecoilValue(chargesState);
    const setCharges = useSetRecoilState(chargesState);

    const [itemTotal, setItemTotal] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [tip, setTip] = useState(0);
    const [gst, setGst] = useState(0);
    const [total, setTotal] = useState(0);

    async function calculateTotalPrice() {
        let obj = {
            itemTotal: 0,
            deliveryCharge: 0,
            tip: tip,
            gst: 0,
            total: 0
        };

        let tempSum = 0;
        cartDishes.forEach(temp => tempSum = temp.price + tempSum)
        obj.itemTotal = tempSum;

        if ((cartRestaurant.deliveryCharge / 100) < 45) {
            obj.deliveryCharge = 0;
        } else {
            obj.deliveryCharge = cartRestaurant.deliveryCharge;
        }

        obj.gst = 0.09 * obj.itemTotal;
        obj.total = obj.itemTotal / 100 + obj.deliveryCharge / 100 + obj.tip + obj.gst / 100;
        
        setCharges(obj);
    }

    useEffect(() => {
        calculateTotalPrice();
    }, [])


    return (
        <div className='flex flex-col w-2/5 bg-white ml-6'>
            <div className='mx-8 my-4 flex flex-row'>
                <div>
                    <img src={RestaurantDishesImageLink + cartRestaurant.imageId} alt="" className='h-12 w-12 object-fill mr-4' />
                </div>
                <div>
                    <div className='text-base font-extrabold text-zinc-950 opacity-95 font-GrotesqueBold'>{cartRestaurant.name}</div>
                    <div className='text-sm text-zinc-950 opacity-60 font-proxima'>{cartRestaurant.address}</div>
                </div>
            </div>

            {
                cartDishes.map((item) => {
                    return (
                        <div key={item.id} className='mx-8 my-2 flex flex-row justify-between bg-zinc-100 px-2 py-4 rounded-md'>
                            <span>{item.name}</span>
                            <div className='w-2/4 flex flex-row justify-between'>
                                <span className='border-2 border-solid border-zinc-200 px-2'><span className='text-zinc-950 font-bold'>-</span><span className='px-4 text-green-500 font-bold'>{item.quantity}</span><span className='text-green-500 font-bold'>+</span></span>
                                <span>₹{item.price / 100}</span>
                            </div>
                        </div>
                    )
                })
            }

            <div className='mx-8 my-4 p-2 flex flex-row border-solid border-2 border-zinc-200'>
                <div><Checkbox /></div>
                <div>
                    <div className='text-sm font-extrabold text-zinc-950 opacity-95 font-GrotesqueBold'>
                        Opt in for No-contact Delivery
                    </div>
                    <div className='text-sm text-zinc-950 opacity-60 font-proxima'>
                        Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                    </div>
                </div>
            </div>
            <div className='mx-8 my-4 border-dashed border-2 border-zinc-200'>
                <PercentIcon className='m-4' />
                <Input size='small' placeholder='Apply Coupon' />
                <span className='text-sm text-zinc-950 opacity-95 font-proxima'>
                </span>
            </div>
            <div className='mx-8 my-4'>
                <div className='font-proxima text-sm'>Bill Details</div>
                <div className='flex flex-row justify-between text-sm text-zinc-950 opacity-70 my-2 py-4 border-b-2'>
                    <span className=''>Item Total</span>
                    <span>₹{charges?.itemTotal / 100}</span>
                </div>
                <div className='flex flex-row justify-between text-sm text-zinc-950 opacity-70 my-2 py-4 border-b-2'>
                    <span className=''>Delivery Partner Fee</span>
                    <span>{charges?.deliveryCharge==0?'FREE':'₹'+charges?.deliveryCharge / 100}</span>
                </div>
                {/* <div className='flex flex-row justify-between text-sm text-zinc-950 opacity-70 my-2'>
                    <span className=''>Delivery Tip</span>
                    <Input type='text' placeholder='Add tip' size='small' className='w-16' value={tip} onChange={(e) => setTip(e.target.value)} />
                </div> */}
                <div className='flex flex-row justify-between text-sm text-zinc-950 opacity-70 my-2'>
                    <span className=''>Platform fee</span>
                    <span><span className='line-through mr-2'>₹5</span>₹3</span>
                </div>
                <div className='flex flex-row justify-between text-sm text-zinc-950 opacity-70 my-2'>
                    <span className=''>GST and Restaurant Charges</span>
                    <span>₹{charges?.gst / 100}</span>
                </div>
                <div className='flex flex-row justify-between text-sm text-zinc-950 my-4 py-4 border-t-2 border-zinc-950 font-bold'>
                    <span className=''>TO PAY</span>
                    <span>₹{charges?.total}</span>
                </div>
            </div>
        </div>
    )
}

export default CartOrder