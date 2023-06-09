'use client'

import React from "react"
import Container from "../Components"
import Logo from "./Logo"
import Search from "./Search"
import Usermenu from "./Usermenu"
import {User} from '@prisma/client'
import {SafeUser} from "../../types/index"
import Categories from "./categories"
interface navbarProps{
    currentUser?: SafeUser | null 
    
}
const Navbar:React.FC<navbarProps> = ({currentUser}) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="
                    flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <Usermenu currentUser={currentUser} />
                    </div>
                    <Categories />
                </Container>
            </div>
        </div>
    )
}
export default Navbar