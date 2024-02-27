"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import {FaTimes} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const [click, Setclick] = useState(false);
    const handleClick = () => Setclick(!click);
    const content = <>
        <div className="lg:hidden z-50 block absolute top-20 w-full left-0 right-0 bg-violet-400 backdrop-blur-lg bg-opacity-30 transition">
        <ul className="text-center text-xl p-10">
                        <Link href={"home"}>
                            <li className="my-4 py-4 boder-b boder-pink-200 hover:text-pink-950 transition-all duration-150 hover bg:pink-200 hover:roundedhover:text-pink-400 border-b-2 border-white hover:border-pink-500 cursor-pointer">ค้นหา</li>
                            </Link>
                        <Link href={"reviwe"}>
                            <li className="my-4 py-4 boder-b boder-pink-200 hover:text-pink-950 transition-all duration-150 hover bg:pink-200 hover:roundedhover:text-pink-400 border-b-2 border-white hover:border-pink-500 cursor-pointer">รีวิว</li>
                            </Link>
                        <Link href={"table"}>
                            <li className="my-4 py-4 boder-b boder-pink-200 hover:text-pink-950 transition-all duration-150 hover bg:pink-200 hover:roundedhover:text-pink-400 border-b-2 border-white hover:border-pink-500 cursor-pointer">ตารางเรียน</li>
                            </Link>
                        <Link href={"schedule"}>
                            <li className="my-4 py-4 boder-b boder-pink-200 hover:text-pink-950 transition-all duration-150 hover bg:pink-200 hover:roundedhover:text-pink-400 border-b-2 border-white hover:border-pink-500 cursor-pointer">กำหนดการ</li>
                            </Link>
                        <Link href={"curriculum"}>
                            <li className="my-4 py-4 boder-b boder-pink-200 hover:text-pink-950 transition-all duration-150 hover bg:pink-200 hover:roundedhover:text-pink-400 border-b-2 border-white hover:border-pink-500 cursor-pointer">หลักสูตร</li>
                            </Link>
                    </ul>
        </div>
    </>
    return (
        <nav className=" bg-violet-400 z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20 py-8 border-b">
                <div className="flex items-center flex-l">
                    <h1 className="text-4xl font-bold text-white">CMU Assist</h1>
                </div>
                <div className="lg:flex md-flex flex-1 justify-center items font-normal hidden">
                    <ul className="flex gap-8 mr-16 text-2xl text-white">
                        <Link href={"home"}>
                            <li className="hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer">ค้นหา</li>
                            </Link>
                        <Link href={"reviwe"}>
                            <li className="hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer">รีวิว</li>
                            </Link>
                        <Link href={"table"}>
                            <li className="hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer">ตารางเรียน</li>
                            </Link>
                        <Link href={"schedule"}>
                            <li className="hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer">กำหนดการ</li>
                            </Link>
                        <Link href={"curriculum"}>
                            <li className="hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer">หลักสูตร</li>
                            </Link>
                    </ul>     
                </div>
            <div>
            {click && content}
            </div>
            <button className="block sm:hidden transition-none" onClick={handleClick}>
                {click? <FaTimes classNametext-black/>: <CiMenuFries classNametext-black/>}
            </button>
            </div>

        </nav>
    )
}

export default Navbar