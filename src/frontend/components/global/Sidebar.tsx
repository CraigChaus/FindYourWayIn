import React from 'react';
import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Sidebar() {
    const icons = [
        { iconName: faHome, content: 'Home', href: '/home' },
        { iconName: faCalendar, content: 'Events', href: '/events' },
    ];

    const [showSidebar, setShowSidebar] = React.useState(false);

    function handleShowSidebar() {
        setShowSidebar(!showSidebar);
    }

    return (
        <div>
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
                            ? 'fixed inset-y-0 left-0 z-50 w-64 py-4 bg-green-500 transition-right duration-300'
                            : 'fixed inset-y-0 duration-500 transition-right -left-full z-50 w-64 py-4 bg-green-500'
                    }
                >
                    <ul className="font-normal text-white">
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
                                                {icon.content}
                                            </p>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
