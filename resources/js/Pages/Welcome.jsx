import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, features }) {
  return (
    <section className=''>
        <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

        <Head title="MachineSync" />
        <div className="  mx-auto md:px-12 lg:px-32 max-w-7xl">
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

            <div className="text-center">
                <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
                Building one rocket together,
                <span className="text-gray-600">wherever and anywhere</span>
                </h1>
                <p className="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
                 Build your rocket with the best technologies.
                </p>
                <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
                <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="Primary action">
                    Primary button
                </button>
                <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Secondary action">
                    Secondary button
                </button>
                </div>
                <div className="relative h-full p-2 mt-24 overflow-hidden border rounded-3xl">
                <img src="/img/P.png" className="object-cover h-full border shadow-2xl rounded-2xl" />
                </div>
            </div>


        </div>


        <section>
                <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
                    <h1 className="text-3xl py-12 font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
                    Get to know a little
                    <span className="text-gray-600">about our users</span>
                    </h1>
                  <ul role="list" class="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-4 lg:max-w-none lg:grid-cols-3">
                    <li class="p-2 border bg-gray-50 rounded-3xl">
                      <figure class="flex flex-col justify-between h-full p-6 bg-white border shadow-lg  rounded-2xl">
                        <blockquote class="">
                          <p class="text-base text-gray-500">
                            Being in the financial industry, we were always looking for ways
                            to enhance our transactions' security and efficiency.
                          </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-between pt-6 mt-6 ">
                          <div>
                            <div class="font-medium text-gray-900">Laura Kibum</div>
                            <div class="mt-1 text-sm text-gray-500">
                                Software engineer
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-gray-50">
                            <img alt="#_" src="https://avatars.githubusercontent.com/u/42256702?v=4" class="object-cover h-14 w-14 grayscale" />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li class="p-2 border bg-gray-50 rounded-3xl">
                      <figure class="flex flex-col justify-between h-full p-6 bg-white border shadow-lg  rounded-2xl">
                        <blockquote class="">
                          <p class="text-base text-gray-500">
                            Implementing Semplice's blockchain technology has been a
                            game-changer for our supply chain management.
                          </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-between pt-6 mt-6 ">
                          <div>
                            <div class="font-medium text-gray-900">Paulo Afonso</div>
                            <div class="mt-1 text-sm text-gray-500">
                              Creator of The bug hunter
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-gray-50">
                            <img alt="#_" src="https://avatars.githubusercontent.com/u/58670269?v=4" class="object-cover h-14 w-14 grayscale"/>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li class="p-2 border bg-gray-50 rounded-3xl">
                      <figure class="flex flex-col justify-between h-full p-6 bg-white border shadow-lg  rounded-2xl">
                        <blockquote class="">
                          <p class="text-base text-gray-500">
                            We were initially hesitant about integrating blockchain technology
                            into our existing systems, fearing the complexity of the process.
                          </p>
                        </blockquote>
                        <figcaption class="flex items-center justify-between pt-6 mt-6 ">
                          <div>
                            <div class="font-medium text-gray-900">Jan Marshal</div>
                            <div class="mt-1 text-sm text-gray-500">
                             Back-end engineer
                            </div>
                          </div>
                          <div class="overflow-hidden rounded-full bg-gray-50">
                            <img alt="#_" src="https://avatars.githubusercontent.com/u/76267404?v=4" class="object-cover h-14 w-14 grayscale"/>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </div>
              </section>



        <footer className="py-4 mt-12 border-t-2 w-full">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
              <p className="text-gray-600">&copy; 2024 Copyright</p>
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
    </section>
  );
}
