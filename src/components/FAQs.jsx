import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
    return (
        <>
            <h1 className='title'>FAQs</h1>
            <div>
                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        What is Swiggy Customer Care Number?
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='text-sm text-zinc-950 opacity-60 font-proximaLight'>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in</div>
                        <div className='text-sm text-zinc-950 opacity-60 font-proximaLight mt-4'>
                            Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.
                        </div>
                        <span className='border-solid border-2 border-orange-400 text-orange-400 font-proxima p-2 mt-16 cursor-pointer'>
                            SEND AN EMAIL
                        </span>
                        <div className='text-xs text-zinc-950 opacity-60 font-proximaLight my-2'>
                            We will revert within 24-48 hrs
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'

                    >
                        I want to explore career opportunities with Swiggy
                    </AccordionSummary>
                    <AccordionDetails>
                    <div className='text-sm text-orange-400 font-proximaBold mb-4'>Join our team</div>
                        <span className='border-solid border-2 border-orange-400 text-orange-400 font-proxima p-2 cursor-pointer'>
                            SEND AN EMAIL
                        </span>
                        <div className='text-xs text-zinc-950 opacity-60 font-proximaLight my-2'>
                        We will revert within 24-48 hrs
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'

                    >
                        I want to provide feedback
                    </AccordionSummary>
                    <AccordionDetails>
                    <span className='border-solid border-2 border-orange-400 text-orange-400 font-proxima p-2 cursor-pointer'>
                            SEND AN EMAIL
                        </span>
                        <div className='text-xs text-zinc-950 opacity-60 font-proximaLight my-2'>
                        We will revert within 24-48 hrs
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        Can I edit my order?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                    Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        I want to cancel my order
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                    We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        Will Swiggy be accountable for quality/quantity?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                    Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        Is there a minimum order value?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                    We have no minimum order value and you can order for any amount. 
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        Do you charge for delivery?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                    Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. 
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        How long do you take to deliver?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                    Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default FAQs