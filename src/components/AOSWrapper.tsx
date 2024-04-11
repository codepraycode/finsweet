'use client'

import Aos from "aos";
import { useEffect } from "react";

const AOSWrapper = ({children}: any) => {
    useEffect(()=>{
        Aos.init();
    }, [])


    return (
        <>
            {children}
        </>
    )
}


export default AOSWrapper;
