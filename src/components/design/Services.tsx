import { brainwaveWhiteSymbol, gradient, play } from '../../assets'
import ChatBubbleWing from '../../assets/svg/ChatBubbleWing'

export const Gradient = () => {
    return (
        <div className="pointer-events-none absolute -left-[10rem] top-0 h-[56.625rem] w-[56.625rem] opacity-50 mix-blend-color-dodge">
            <img
                className="absolute left-1/2 top-1/2 h-[88.5625rem] w-[79.5625rem] max-w-[79.5625rem] -translate-x-1/2 -translate-y-1/2"
                src={gradient}
                width={1417}
                height={1417}
                alt="Gradient"
            />
        </div>
    )
}

export const PhotoChatMessage = () => {
    return (
        <div className="font-code absolute right-8 top-8 max-w-[17.5rem] rounded-t-xl rounded-bl-xl bg-black px-8 py-6 text-base lg:right-[8.75rem] lg:top-16 lg:max-w-[17.5rem]">
            Hey Brainwave, enhance this photo
            <ChatBubbleWing className="absolute bottom-0 left-full" />
        </div>
    )
}

export const VideoChatMessage = () => {
    return (
        <div className="bg-n-6 font-code absolute left-[3.125rem] top-8 w-full max-w-[14rem] rounded-t-xl rounded-br-xl pb-7 pl-5 pr-2.5 pt-2.5 text-base md:max-w-[17.5rem]">
            Video generated!
            <div className="bg-color-1 absolute -bottom-[1.125rem] left-5 flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.75rem]">
                <img
                    src={brainwaveWhiteSymbol}
                    width={26}
                    height={26}
                    alt="Brainwave"
                />
            </div>
            <p className="tagline text-n-3 absolute bottom-1 right-2.5 text-[0.625rem] uppercase">
                just now
            </p>
            <ChatBubbleWing
                className="absolute bottom-0 right-full -scale-x-100"
                pathClassName="fill-n-6"
            />
        </div>
    )
}

export const VideoBar = () => {
    return (
        <div className="absolute bottom-0 left-0 flex w-full items-center p-6">
            <img
                src={play}
                width={24}
                height={24}
                alt="Play"
                className="mr-3 object-contain"
            />

            <div className="flex-1 bg-[#D9D9D9]">
                <div className="bg-color-1 h-0.5 w-1/2"></div>
            </div>
        </div>
    )
}
