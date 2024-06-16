import { useEffect, useState } from 'react'
import { MouseParallax } from 'react-just-parallax'

import PlusSvg from '../../assets/svg/PlusSvg'

export const Gradient = () => {
    return (
        <>
            <div className="z-1 bg-n-11 relative mx-2.5 h-6 rounded-b-[1.25rem] shadow-xl lg:mx-8 lg:h-6" />
            <div className="z-1 bg-n-11/70 relative mx-6 h-6 rounded-b-[1.25rem] shadow-xl lg:mx-20 lg:h-6" />
        </>
    )
}

export const BottomLine = () => {
    return (
        <>
            <div className="h-0.25 bg-n-6 pointer-events-none absolute left-10 right-10 top-[55.25rem] hidden xl:block" />

            <PlusSvg className="z-2 pointer-events-none absolute left-[2.1875rem] top-[54.9375rem] hidden xl:block" />

            <PlusSvg className="z-2 pointer-events-none absolute right-[2.1875rem] top-[54.9375rem] hidden xl:block" />
        </>
    )
}

const Rings = () => {
    return (
        <>
            <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[65.875rem] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
            <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[51.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
            <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[36.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
            <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[23.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
        </>
    )
}

export const BackgroundCircles = ({ parallaxRef }: any) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="border-n-2/5 absolute -top-[42.375rem] left-1/2 aspect-square w-[78rem] -translate-x-1/2 rounded-full border md:-top-[38.5rem] xl:-top-[32rem]">
            <Rings />

            {/* Moving background colored circle balls */}
            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                <div className="w-0.25 absolute bottom-1/2 left-1/2 h-1/2 origin-bottom rotate-[46deg]">
                    <div
                        className={`-ml-1 -mt-36 h-2 w-2 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out ${
                            mounted
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    />
                </div>

                <div className="w-0.25 absolute bottom-1/2 left-1/2 h-1/2 origin-bottom -rotate-[56deg]">
                    <div
                        className={`-ml-1 -mt-32 h-4 w-4 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32] transition-transform duration-500 ease-out ${
                            mounted
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    />
                </div>

                <div className="w-0.25 absolute bottom-1/2 left-1/2 h-1/2 origin-bottom rotate-[54deg]">
                    <div
                        className={`transit -ml-1 mt-[12.9rem] hidden h-4 w-4 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out xl:block ${
                            mounted
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    />
                </div>

                <div className="w-0.25 absolute bottom-1/2 left-1/2 h-1/2 origin-bottom -rotate-[65deg]">
                    <div
                        className={`-ml-1.5 mt-52 h-3 w-3 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] transition-transform duration-500 ease-out ${
                            mounted
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    />
                </div>

                <div className="w-0.25 absolute bottom-1/2 left-1/2 h-1/2 origin-bottom -rotate-[85deg]">
                    <div
                        className={`-ml-3 -mt-3 h-6 w-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out ${
                            mounted
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    />
                </div>

                <div className="w-0.25 absolute bottom-1/2 left-1/2 h-1/2 origin-bottom rotate-[70deg]">
                    <div
                        className={`-ml-3 -mt-3 h-6 w-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] transition-transform duration-500 ease-out ${
                            mounted
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    />
                </div>
            </MouseParallax>
        </div>
    )
}
