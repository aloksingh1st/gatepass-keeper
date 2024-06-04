"use client";

import React from 'react'
import Image from 'next/image'

import { useEffect } from "react"
import { useRouter } from 'next/navigation';


const Starter = () => {
    const router = useRouter();

    useEffect(() => {
        const timerId = setTimeout(() => {
            router.push('/login', { shallow: true })
        }, 1000);
        return () => clearTimeout(timerId);
    }, [router])

    return (
        <>
            <div className="sd h-screen bg-[#390050] justify-center items-center flex">
                <Image
                    src={"/graphics/logo1.png"}
                    height={338}
                    width={337}
                    alt='Logo' />
            </div>
        </>
    )
}

export default Starter;