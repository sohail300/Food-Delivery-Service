import playStore from '../assets/images/play_store.png'
import appStore from '../assets/images/app_store.png'

const DownloadApp = () => {
    return (
        <div className='bg-stone-200 w-screen pl-56 pr-56 pt-8 pb-8'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl font-extrabold w-100 pr-24 text-zinc-950 opacity-75'>
                        For better experience, download
                    </h2>
                    <h2 className='text-3xl font-extrabold w-100 pr-24 text-zinc-950 opacity-75'>
                        the Swiggy app now
                    </h2>
                </div>

                <div className='flex flex-row justify-between'>
                    <img src={playStore} alt="play-store" className='w-48 h-16 mr-8 cursor-pointer' />
                    <img src={appStore} alt="app-store" className='w-48 h-16 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default DownloadApp