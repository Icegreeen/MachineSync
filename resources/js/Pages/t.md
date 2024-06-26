import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, features }) {
  return (
    <section className="relative flex flex-col items-center h-screen bg-[#fff] overflow-hidden clash-grotesk">
      <svg className="absolute opacity-30" width="2321" height="1350" viewBox="0 0 1681 978" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1503_1700" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="1681" height="978">
          <path d="M0.5 0L1680.5 0V768L0.5 978V0Z" fill="#1C1740"></path>
        </mask>
        <g mask="url(#mask0_1503_1700)">
          <g filter="url(#filter0_f_1503_1700)">
            <path d="M2156.05 -606.341C2156.05 -606.341 2075.29 25.8064 1731.15 201.252C1394.62 372.826 1152.78 -75.6031 819.09 101.068C485.521 277.673 743.525 703.193 419.536 895.252C70.69 1102.05 -575.501 838.969 -575.501 838.969" stroke="url(#paint0_angular_1503_1700)" strokeWidth="325.413" strokeLinecap="round"></path>
          </g>
          <g filter="url(#filter1_f_1503_1700)">
            <path d="M2290.69 543.196C2290.69 543.196 1863.83 968.178 1555.06 879.367C1253.1 792.517 1378.97 298.802 1075.64 217.624C772.419 136.477 669.857 623.3 363.039 559.967C32.6814 491.774 -191.789 -121.981 -191.789 -121.981" stroke="url(#paint1_angular_1503_1700)" strokeWidth="325.413" strokeLinecap="round"></path>
          </g>
          <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter2_f_1503_1700)">
            <path d="M1743.11 788.778C1743.11 788.778 1440.79 1023.51 1207.37 957.41C979.098 892.767 1054.54 604.218 825.457 542.894C596.459 481.592 538.127 767.036 307.109 716.187C58.3658 661.436 -131.751 286.41 -131.751 286.41" stroke="url(#paint2_angular_1503_1700)" strokeWidth="325.413" strokeLinecap="round"></path>
          </g>
          <g filter="url(#filter3_f_1503_1700)">
            <path d="M398.746 1256.29C398.746 1256.29 374.987 904.578 532.709 802.487C686.949 702.649 856.582 947.979 1008.85 845.354C1161.05 742.766 985.518 510.366 1131.24 399.342C1288.15 279.799 1645.24 416.706 1645.24 416.706" stroke="url(#paint3_angular_1503_1700)" strokeWidth="325.413" strokeLinecap="round"></path>
          </g>
          <g style={{ mixBlendMode: 'soft-light' }} opacity="0.5">
            <path d="M0.5 422L1919.5 182.5V-57L0.5 182.5V422Z" fill="url(#paint4_linear_1503_1700)"></path>
          </g>
          <g style={{ mixBlendMode: 'soft-light' }} opacity="0.5">
            <path d="M1630.5 218L-364.5 467.5L-364.5 717L1630.5 467.5L1630.5 218Z" fill="url(#paint5_linear_1503_1700)"></path>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_1503_1700" x="-870.685" y="-896.931" width="3321.89" height="2162.05" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="15.0825" result="effect1_foregroundBlur_1503_1700"></feGaussianBlur>
          </filter>
          <filter id="filter1_f_1503_1700" x="-483.427" y="-416.166" width="3065.71" height="1601.89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="15.0825" result="effect1_foregroundBlur_1503_1700"></feGaussianBlur>
          </filter>
          <filter id="filter2_f_1503_1700" x="-423.376" y="-7.76707" width="2458.08" height="1271.04" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="15.0825" result="effect1_foregroundBlur_1503_1700"></feGaussianBlur>
          </filter>
          <filter id="filter3_f_1503_1700" x="102.081" y="60.0571" width="1838.6" height="1486.55" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="15.0825" result="effect1_foregroundBlur_1503_1700"></feGaussianBlur>
          </filter>
          <radialGradient id="paint0_angular_1503_1700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(918.431 340.19) rotate(-119.789) scale(257.962 1544.32)">
            <stop stopColor="#FF7BDA"></stop>
            <stop offset="0.354167" stopColor="#BFDEF8"></stop>
            <stop offset="0.604167" stopColor="#5840FA"></stop>
            <stop offset="0.806766" stopColor="#BFDEF8"></stop>
            <stop offset="1" stopColor="#5840FA"></stop>
          </radialGradient>
          <radialGradient id="paint1_angular_1503_1700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(991.002 461.861) rotate(-76.9047) scale(257.962 1284.31)">
            <stop stopColor="#FF7BDA"></stop>
            <stop offset="0.354167" stopColor="#BFDEF8"></stop>
            <stop offset="0.604167" stopColor="#5840FA"></stop>
            <stop offset="0.806766" stopColor="#BFDEF8"></stop>
            <stop offset="1" stopColor="#5840FA"></stop>
          </radialGradient>
          <radialGradient id="paint2_angular_1503_1700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(771.464 684.678) rotate(-76.9047) scale(151.011 969.963)">
            <stop stopColor="#FF7BDA"></stop>
            <stop offset="0.354167" stopColor="#BFDEF8"></stop>
            <stop offset="0.604167" stopColor="#5840FA"></stop>
            <stop offset="0.806766" stopColor="#BFDEF8"></stop>
            <stop offset="1" stopColor="#5840FA"></stop>
          </radialGradient>
          <radialGradient id="paint3_angular_1503_1700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(933.516 714.121) rotate(54.1329) scale(151.011 751.026)">
            <stop stopColor="#FF7BDA"></stop>
            <stop offset="0.354167" stopColor="#BFDEF8"></stop>
            <stop offset="0.604167" stopColor="#5840FA"></stop>
            <stop offset="0.806766" stopColor="#BFDEF8"></stop>
            <stop offset="1" stopColor="#5840FA"></stop>
          </radialGradient>
          <linearGradient id="paint4_linear_1503_1700" x1="1933.78" y1="34.2379" x2="37.7558" y2="320.803" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="paint5_linear_1503_1700" x1="-379.344" y1="621.953" x2="1591.95" y2="324.626" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"></stop>
            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>

      <Head title="Welcome" />
      <div className="text-black/50 dark:bg-black dark:text-white/50 w-full">
        <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white w-full">
          <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

            <header className="grid grid-cols-2 gap-2 py-10 px-4 w-full">
              <div className="flex justify-start">
                <img src="/img/logo.png" alt="Logo" className="h-14" />
              </div>
              <nav className="-mx-3 flex flex-1 justify-end col-span-2 lg:col-span-1">
                {auth.user ? (
                  <a
                    href="/dashboard"
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                  >
                    Dashboard
                  </a>
                ) : (
                  <>
                    <a
                      href="/login"
                      className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                      Log in
                    </a>
                    <a
                      href="/register"
                      className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                      Register
                    </a>
                  </>
                )}
              </nav>
            </header>

            <main className="mt-6 flex flex-col md:flex-row items-center justify-center w-full">
              <div className="min-h-screen flex flex-col p-4 w-full">
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-black to-purple-600 text-transparent bg-clip-text">
                        Unlock the Power of Our SaaS Platform
                    </h1>

                  <p className="text-lg text-gray-400">Discover how our cutting-edge SaaS solutions can transform your business and drive success.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 w-full">
                  <div className="grid grid-cols-1 gap-6 w-full">

                    {features.data.map((feature) => (
                        <>
                            <Link
                                className="backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-md flex flex-col items-start border-b-4 border-indigo-200"
                                href={route(feature.route_name)}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="">
                                        <img className='rounded-lg h-36' src={feature.image} alt="" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h2 className="ml-4 text-3xl font-semibold">{feature.name}</h2>
                                        <p className="text-gray-600 ml-4  ">{feature.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                  </div>

                  <div className="mt-16 md:mt-0 md:ml-10">
                    <img src="/img/3.png" alt="Example" className="w-full max-w-md mx-auto" />
                  </div>
                </div>
              </div>
            </main>

          </div>

          <footer className="py-4 border-t-2 border-gray-100 fixed bottom-0 w-full">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
              <p className="text-gray-600">&copy; 2024 www.zeta.com</p>
              <ul className="flex space-x-4 items-center">
                <li>
                  <a href="#" className="text-gray-600 hover:text-white">Terms of use</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-white">Policy privace</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
          </footer>

        </div>
      </div>
    </section>
  );
}
