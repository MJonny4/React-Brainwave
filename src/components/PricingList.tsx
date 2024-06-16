import { check } from '../assets'
import { pricing } from '../constants'
import Button from './Button'

const PricingList = () => {
    return (
        <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map(item => (
                <div
                    key={item.id}
                    className="bg-n-8 border-n-6 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 h-full w-[19rem] rounded-[2rem] border px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto"
                >
                    <h4 className="h4 mb-4">{item.title}</h4>

                    <p className="body-2 text-n-1/50 mb-3 min-h-[4rem]">
                        {item.description}
                    </p>

                    <div className="mb-6 flex h-[5.5rem] items-center">
                        {item.price && (
                            <>
                                <div className="h3">$</div>
                                <div className="text-[5.5rem] font-bold leading-none">
                                    {item.price}
                                </div>
                            </>
                        )}
                    </div>

                    <Button
                        className="mb-6 w-full"
                        href={
                            item.price ? '/pricing' : 'mailto:ion@ximuntion.dev'
                        }
                        white={!!item.price}
                    >
                        {item.price ? 'Get started' : 'Contact us'}
                    </Button>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li
                                key={index}
                                className="border-n-6 flex items-start border-t py-5"
                            >
                                <img
                                    src={check}
                                    width={24}
                                    height={24}
                                    alt="Check"
                                />
                                <p className="body-2 ml-4">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default PricingList
