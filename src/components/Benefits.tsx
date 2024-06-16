import { benefits } from '../constants'
import Heading from './Heading'
import Section from './Section'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'

const Benefits = () => {
    return (
        <Section id="features">
            <div className="z-2 container relative">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Chat Smarter, Not Harder with Brainwave"
                />

                <div className="mb-10 flex flex-wrap gap-10">
                    {benefits.map(item => (
                        <div
                            className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`
                            }}
                            key={item.id}
                        >
                            <div className="z-2 pointer-events-none relative flex min-h-[22rem] flex-col p-[2.4rem]">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 text-n-3 mb-6">
                                    {item.text}
                                </p>
                                <div className="mt-auto flex items-center">
                                    <img
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className="font-code text-n-1 ml-auto text-xs font-bold uppercase tracking-wider">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <GradientLight />}

                            <div
                                className="bg-n-8 absolute inset-0.5"
                                style={{ clipPath: 'url(#benefits)' }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Benefits
