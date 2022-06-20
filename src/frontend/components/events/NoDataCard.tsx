import React from 'react';
import Image from 'next/image';
import logo_without_text from '../../public/logo_without_text.png';
import { useTranslation } from 'react-i18next';

export default function NoDataCard() {
    const { t } = useTranslation('common');
    return (
        <>
            <div className="p-2 m-1 text-center h-60">
                <Image
                    className="container rounded-xl"
                    src={logo_without_text}
                    alt={'logo'}
                    height={220}
                    width={350}
                />
                <div className="relative flex flex-col bottom-40">
                    <span className="w-full pl-2 text-xl font-bold text-center text-black ">
                        {t('noEvent')}
                    </span>
                </div>
            </div>
        </>
    );
}
