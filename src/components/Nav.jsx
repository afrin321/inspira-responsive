import React, { useContext } from 'react'
import Logo from './../assets/logo_new.png'
import Menu from './../assets/burger_menu.png'
import VisibilityContext from '../context/menuVisibleContext'


function Nav() {
    const { isVisible, setIsVisible, menuFlip } = useContext(VisibilityContext)
    return (
        <nav className={`top bg-nav ${menuFlip ? 'h-[12vh]' : 'h-[16vh]'} h-fit w-full fixed top-0 left-0 z-60 min-[1920px]:px-[7.5%] max-[1366px]:px-[14%] flex justify-between items-center align-middle `}>
            <img src={Logo} className={`${menuFlip ? 'h-[8vh]' : 'h-[12vh]'} object-scale-down`} />
            <ul className={`flex list-none justify-between h-[6vh]  align-middle items-center p-0 m-0`}>
                <li className={`flex gap-1 items-center text-[#ffffff] text-[3vh] leading-[40px] font-bold`}>
                    <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
                </li>
                <li className={`p-0 m-0 ${isVisible ? 'border-black rounded-lg bg-black opacity-50 p-3' : 'p-3' } `}><img src={Menu} className='cursor-pointer h-[3vh]' onClick={() => setIsVisible(isVisible => !isVisible)} /></li>
            </ul>
            {/* <img src={Logo} className={`${menuFlip ? 'h-[40px] w-auto' : 'h-[30px] w-auto absolute top-[43px]'} object-scale-down`} />
            <ul className={`flex list-none justify-between w-[216px] h-[40px] absolute ${menuFlip ? 'top-[37px]' : 'top-[77px]'} right-[250px] align-middle items-center p-0 m-0`}>
                <li className={`flex gap-1 items-center text-[#ffffff] text-[30px] leading-[40px] font-bold`}>
                    <span className='hover:underline'>EN</span>/<span className='hover:underline'>SP</span>
                </li>
                <li className={`p-0 m-0 ${isVisible ? 'border-black rounded-lg bg-black opacity-50 p-3' : 'p-3' } `}><img src={Menu} className='cursor-pointer' onClick={() => setIsVisible(isVisible => !isVisible)} /></li>
            </ul> */}
            
        </nav>
    )
}

export default Nav