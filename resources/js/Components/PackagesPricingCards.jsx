import { usePage } from '@inertiajs/react';

export default function CreditPricingCards({ packages, features }) {
    const { csrf_token } = usePage().props;

    return (
        <section className=''>
            <div className='py-8 px-4'>
                <div className='text-center mb-8'>
                    <h2 className='mb-4 text-4xl font-extrabold text-black'>
                        The more credits you choose the bigger savings you will make.
                    </h2>
                </div>

                <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
                    {packages.map((p) => (
                        <div
                            key={p.id}
                            className='flex flex-col align-stretch p-6 mx-auto lg:mx-0 max-w-lg text-center
                                        rounded-lg border shadow  text-black
                                        border-t-4 border-purple-300 shadow-2xl
                                        '
                        >
                            <h3 className='mb-4 text-2xl font-semibold'>
                                {p.name}
                            </h3>

                            <div className="flex justify-center items-baseline my-4">
                                <span className='mr-4 text-5xl font-extrabold'>
                                    ${p.price}
                                </span>

                                <span className='text-2xl gap-2 flex justify-center items-center dark:text-gray-400'>
                                    / <img src="/img/coin1.png" className='h-6' alt="" />
                                    {p.credits} credits
                                </span>
                            </div>

                            <ul
                                role="list"
                                className="mb-8 space-y-4 text-left"
                            >
                                {features.map((feature) => (
                                    <li
                                        key={feature.id}
                                        className='flex items-center space-x-3'
                                    >
                                        <img src="/img/check.png" className='h-6' alt="" />
                                        <span>{feature.name}</span>
                                    </li>
                                ))}
                            </ul>

                            <form
                                action={route("credit.buy", p)}
                                method="POST"
                                className='w-full'
                            >
                                <input
                                    type="hidden"
                                    name='_token'
                                    value={csrf_token}
                                    autoComplete='off'
                                />

                                <button
                                    className="bg-gradient-to-r from-purple-500 to-purple-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white focus:ring-blue-900 w-full transform transition-transform duration-300 ease-in-out hover:scale-105"
                                >
                                Get started
                                </button>
                            </form>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
