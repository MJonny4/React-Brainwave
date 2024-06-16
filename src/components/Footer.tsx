import { socials } from '../constants'
import Section from './Section'

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
                <p className="caption text-n-4 lg:block">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>

                <ul className="flex flex-wrap gap-5">
                    {socials.map(item => (
                        <a
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            className="bg-n-7 hover:bg-n-6 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                        >
                            <img
                                src={item.iconUrl}
                                width={16}
                                height={16}
                                alt={item.title}
                            />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default Footer
