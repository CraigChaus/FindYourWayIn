/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import ChevronDownIcon from '../../public/icons/chevron-down.svg';
import React from 'react';
import Link from 'next/link';
import Language from '../../public/icons/language.svg';
import FlagUK from '../../public/icons/flags/4x3/gb.svg';
import FlagNL from '../../public/icons/flags/4x3/nl.svg';
import { useRouter } from 'next/router';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export default function LanguageSelector() {
    const router = useRouter();
    return (
        <div className="absolute top-5 right-5">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        {router.locale === 'en' ? (
                            <FlagUK className="w-5 h-5" />
                        ) : (
                            <FlagNL className="w-5 h-5" />
                        )}
                        <ChevronDownIcon
                            className="w-5 h-5 ml-2 -mr-1"
                            aria-hidden="true"
                        />
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
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {router.locales?.map(
                                (locale: string, index: number) => (
                                    <Menu.Item key={index}>
                                        {({ active }) => (
                                            <Link
                                                href={router.asPath}
                                                locale={locale}
                                            >
                                                <a
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                        'flex px-4 py-2 text-sm',
                                                    )}
                                                >
                                                    {locale === 'en' ? (
                                                        <>
                                                            <FlagUK className="w-5 h-5 mr-2" />
                                                            English
                                                        </>
                                                    ) : (
                                                        <>
                                                            <FlagNL className="w-5 h-5 mr-2" />
                                                            Nederlands
                                                        </>
                                                    )}
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ),
                            )}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
