import { Menu, Transition } from '@headlessui/react';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase_config';
import { Router, useRouter } from 'next/router';
import { Fragment, useEffect, useRef, useState } from 'react';
import AccountSetting from '../../../public/icons/account_settings.svg';
import LoginIcon from '../../../public/icons/login.svg';
import LogoutIcon from '../../../public/icons/logout.svg';
import UserButton from './UserButton';

export default function UserDropdown() {
    const router = useRouter();
    const logout = async () => {
        await signOut(auth);
    };
    return (
        <div>
            <Menu as="div" className="relative inline-block text-center">
                <div>
                    <Menu.Button>
                        <UserButton />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-green-500 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 divide-y-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? 'bg-green-800 text-white'
                                                : 'text-gray-100'
                                        } group flex w-full items-center rounded-md px-3 py-3 text-sm`}
                                        onClick={() => router.push('/profile')}
                                    >
                                        <AccountSetting
                                            className="w-5 h-auto mr-3"
                                            aria-hidden="true"
                                            fill="white"
                                        />
                                        Account
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? 'bg-green-800 text-white'
                                                : 'text-gray-100'
                                        } group flex w-full items-center rounded-md px-3 py-3 text-sm`}
                                        onClick={() => {
                                            logout();
                                            router.push('/');
                                        }}
                                    >
                                        <LogoutIcon
                                            className="w-5 h-5 mr-3"
                                            aria-hidden="true"
                                            fill="white"
                                        />
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
