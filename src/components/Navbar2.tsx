import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
import { UrlObject } from "url"
import { NAV_LINKS } from "../constants"

const Navbar = () => {
  return (
    <nav className=" bg-violet-400 flexBetween  padding-container relative z-30 ">
        <div className="h-10vh flex justify-between lg:py-5 px-20 py-8 border-b  items-center flex-l">
            <Link className="text-4xl font-bold text-white" href={"home"}>CMU Assist</Link>
            <ul className="text-2xl font-bold text-white hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link: { href: string | UrlObject; key: Key | null | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => (
                    <Link href={link.href} key={link.key} className="my-3 py-5 boder-b boder-white hover:text-black flexCenter cursor-pointer pb-0.5 transition-all hover:font-bold border-b-2 border-white hover:border-black ">
                        {link.label}
                    </Link>
                ))}
            </ul>

        <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="flex-end inline-block cursor-pointer lg:hidden"
        />
        </div>

        
    </nav>
  )
}

export default Navbar