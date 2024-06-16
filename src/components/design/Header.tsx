import { background } from '../../assets'

export const Rings = () => {
    return (
        <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[51.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border">
            <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[36.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
            <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[23.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
        </div>
    )
}

export const SideLines = () => {
    return (
        <>
            <div className="w-0.25 bg-n-6 absolute left-5 top-0 h-full"></div>
            <div className="w-0.25 bg-n-6 absolute right-5 top-0 h-full"></div>
        </>
    )
}

export const BackgroundCircles = () => {
    return (
        <>
            <div className="absolute left-16 top-[4.4rem] h-3 w-3 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32]"></div>
            <div className="absolute right-16 top-[12.6rem] h-3 w-3 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32]"></div>
            <div className="absolute left-12 top-[26.8rem] h-6 w-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32]"></div>
        </>
    )
}

export const HamburgerMenu = () => {
    return (
        <div className="pointer-events-none absolute inset-0 lg:hidden">
            <div className="absolute inset-0 opacity-[.03]">
                <img
                    className="h-full w-full object-cover"
                    src={background}
                    width={688}
                    height={953}
                    alt="Background"
                />
            </div>

            <Rings />

            <SideLines />

            <BackgroundCircles />
        </div>
    )
}
