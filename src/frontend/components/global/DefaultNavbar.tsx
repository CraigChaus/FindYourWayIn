import SideBar from './Sidebar';
import React from 'react';
import UserDropdown from './user/Dropdown';
import Image from 'next/image';
import logoWithoutText from '../../public/logo_without_text.png';
import { useRouter } from 'next/router';

export const Navbar = () => {
    const router = useRouter();
    return (
        <div
            id="defaultNavBar"
            className="z-10 flex flex-col w-full bg-transparent"
        >
            <div className="z-10 flex items-center justify-between bg-green-500 h-18">
                <SideBar />
                <Image
                    onClick={() => router.push('/')}
                    alt="logo"
                    width={64}
                    height={64}
                    src={logoWithoutText}
                />
                <UserDropdown />
            </div>
        </div>
    );
};

export default Navbar;
