import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

import { brainwave } from '../assets'
import { navigation } from '../constants'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from './design/Header'
import { useState } from 'react'

const Header = () => {
    const pathname = useLocation()
    const [openNavigation, setOpenNavigation] = useState(false)

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false)
            enablePageScroll()
        } else {
            setOpenNavigation(true)
            disablePageScroll()
        }
    }

    const handleClick = () => {
        if (!openNavigation) return

        enablePageScroll()
        setOpenNavigation(false)
    }

    return (
        <div
            className={`border-n-6 lg:bg-n-8/90 fixed left-0 top-0 z-50 w-full border-b lg:backdrop-blur-sm ${
                openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
            }`}
        >
            <div className="lg:px-7.5 flex items-center px-5 max-lg:py-4 xl:px-10">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img
                        src={brainwave}
                        width={190}
                        height={40}
                        alt="Brainwave"
                    />
                </a>

                <nav
                    className={`${
                        openNavigation ? 'flex' : 'hidden'
                    } bg-n-8 fixed bottom-0 left-0 right-0 top-[5rem] lg:static lg:mx-auto lg:flex lg:bg-transparent`}
                >
                    <div className="z-2 relative m-auto flex flex-col items-center justify-center lg:flex-row">
                        {navigation.map(item => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`font-code text-n-1 hover:text-color-1 relative block text-2xl uppercase transition-colors ${
                                    item.onlyMobile ? 'lg:hidden' : ''
                                } lg:-mr-0.25 px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${
                                    item.url === pathname.hash
                                        ? 'z-2 lg:text-n-1'
                                        : 'lg:text-n-1/50'
                                } lg:hover:text-n-1 lg:leading-5 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <a
                    href="#signup"
                    className="button text-n-1/50 hover:text-n-1 mr-8 hidden transition-colors lg:block"
                >
                    New account
                </a>
                <Button className="hidden lg:flex" href="#login">
                    Sign in
                </Button>

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    )
}

export default Header
