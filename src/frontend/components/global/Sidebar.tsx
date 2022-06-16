import React from 'react';
import {
    faHome,
    faCalendar,
    faMagnifyingGlassLocation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './language/LanguageSelector';
import Image from 'next/image';
import logoWithoutText from '../../public/logo_without_text.png';

export default function Sidebar() {
    const { t } = useTranslation('common');
    const icons = [
        { iconName: faHome, content: 'home', href: '/home' },
        { iconName: faCalendar, content: 'events', href: '/events' },
        {
            iconName: faMagnifyingGlassLocation,
            content: 'discovery',
            href: '/discovery',
        },
    ];

    const [showSidebar, setShowSidebar] = React.useState(false);

    function handleShowSidebar() {
        setShowSidebar(!showSidebar);
    }

    return (
        <>
            <button
                onClick={handleShowSidebar}
                className="w-12 m-2 font-bold text-white border-black rounded h-14 hover:bg-green-600"
            >
                <svg
                    className="w-12 h-8 fill-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
            <div>
                <div
                    onClick={handleShowSidebar}
                    className={
                        showSidebar
                            ? 'fixed inset-0 z-40 visible bg-black cursor-pointer opacity-70'
                            : 'hidden opacity-0'
                    }
                ></div>

                <div
                    className={
                        showSidebar
                            ? 'fixed inset-y-0 left-0  z-50 w-64 py-4 bg-green-500 transition-right duration-300'
                            : 'fixed inset-y-0 duration-500 transition-right -left-full z-50 w-64 py-4 bg-green-500'
                    }
                >
                    <div className=" ">
                        <LanguageSelector />
                        <div className=" pt-2 ml-10 -z-10">
                            <Image
                                src={logoWithoutText}
                                alt={'logo'}
                                height={60}
                                width={60}
                            />
                        </div>
                    </div>

                    <ul className="font-normal pt-4 text-white">
                        {icons.map((icon, index) => {
                            return (
                                <li onClick={handleShowSidebar} key={index}>
                                    <Link href={icon.href}>
                                        <a className="flex items-center hover:bg-green-400">
                                            <FontAwesomeIcon
                                                icon={icon.iconName}
                                                size="lg"
                                                className="m-4 text-white"
                                            />
                                            <p className="ml-4">
                                                {t(icon.content)}
                                            </p>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
