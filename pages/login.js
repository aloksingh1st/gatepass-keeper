import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/keeper');
        }
    }, [router]);

    const loginHandler = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            console.log('Login successful:', data);
            router.push('/keeper');
        } else {
            alert('failed');
            console.error('Login failed');
        }

    };
    return (
        <>
            <div className="block justify-center m-auto items-center md:w-[25%]">
                <Image
                    className="m-auto"
                    src={"/graphics/logo2.png"}
                    height={240}
                    width={238}
                    alt="Logo"
                />

                <h2 className="text-2xl px-5 mb-4 mt-[-2rem]">Login to your Account</h2>

                <form action="" className="m-auto px-5" onSubmit={loginHandler}>
                    <input
                        type="text"
                        placeholder="Email"
                        className="px-10 w-[336px] h-[47px] my-2 rounded-[10px]"
                        name=""
                        id=""
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ background: "rgba(217, 217, 217, 0.28)" }}
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        className="px-10 w-[336px] h-[47px] my-2 rounded-[10px]"
                        name=""
                        id=""
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ background: "rgba(217, 217, 217, 0.28)" }}
                    />

                    <Link
                        href="/"
                        className=" mr-4 h-[15px] text-[#390050] my-2 color-[#390050] flex justify-end text-[14px] mb-4"
                    >
                        Forgot Password?
                    </Link>

                    <input
                        type="submit"
                        className="w-[336px] h-[58px] 
bg-[#390050] rounded-[10px] text-white"
                        value="Sign in"
                    />
                </form>

                <hr
                    className="w-[232px] h-[1px] items-center m-auto my-5"
                    style={{ background: " rgba(97, 88, 88, 0.78)" }}
                />

                <div className="px-5">
                    <h2 className="text-lg m-auto text-center mb-4">Or sign in with</h2>
                </div>
                <p className="m-auto text-center mt-4">
                    Don&apos;t have an account?{" "}
                    <Link href={"/register"} className="text-[#390050]">
                        Sign up
                    </Link>
                </p>
            </div>
        </>
    )
}

export default login