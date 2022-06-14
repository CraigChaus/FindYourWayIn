import React from 'react';
import Dropdown from '../components/global/user/Dropdown';
import LanguageSelector from '../components/global/LanguageSelector'

export default function Demo(): JSX.Element {
    return (
        <>
            <Dropdown />
            <div className='text-center align-middle'>

                <LanguageSelector />
            </div>
        </>
    );
}
