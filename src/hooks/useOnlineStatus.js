import { useEffect, useState } from "react";

function useOnlineStatus(){
    const [onlineStatus,setOnlineStatus]=useState(navigator.onLine);

    function updateOnlineStatus(){
        setOnlineStatus(navigator.onLine);
    }
    
    useEffect(()=> {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    },[])

    return onlineStatus;
}

export default useOnlineStatus;