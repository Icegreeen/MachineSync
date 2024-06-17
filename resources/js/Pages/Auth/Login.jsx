import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
            <div className="h-screen flex justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
                <Head title="Login" />

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white lg:border-r lg:py-24 md:flex-none md:px-28 sm:justify-center">
                    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-semibold tracking-tighter text-gray-900">
                                Lorem ipsum dolor sit amet consectetur,
                                <span className="text-gray-600">from any location</span>
                            </h1>
                            <p className="mt-4 text-base font-medium text-gray-500">
                            Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur sit amet.
                            </p>
                        </div>
                        <div className="mt-8">
                            <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="button" aria-label="Sign in with Google">
                                <ion-icon name="logo-google" role="img" className="md hydrated" aria-label="logo google"></ion-icon>
                                <span>Sign in with Google</span>
                            </button>
                            <div className="relative py-3">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="px-2 text-sm text-black bg-white">Or continue with</span>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={submit}>
                            <div className="space-y-3">
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="block w-full h-12 px-4 py-2 mt-1 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className="col-span-full">
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="block w-full h-12 px-4 py-2 mt-1 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className="block mt-4">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                                    </label>
                                </div>
                                <div className="col-span-full">
                                    <PrimaryButton className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black" disabled={processing}>
                                        Sign in
                                    </PrimaryButton>
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="flex mx-auto text-sm font-medium leading-tight text-center text-black">
                                    Not have a password?
                                    <Link className="ml-auto text-blue-500 hover:text-black" href="/register">
                                        Sign up now
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden h-screen bg-white lg:block lg:flex-1 lg:relative sm:contents">
                    <div className="absolute inset-0 w-full h-full">
                        <img className="object-cover object-center w-full h-full" src="/img/login.jpg" alt="Login Background" />
                    </div>
                </div>
            </div>

    );
}
