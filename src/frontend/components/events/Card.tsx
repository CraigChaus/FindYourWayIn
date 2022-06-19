import React from 'react';
import Image from 'next/image';
import broken from '../../public/images/broken.png';
import { useTranslation } from 'react-i18next';

export const Card = ({ date, event, onClick, imageSrc }: any) => {
    const { t } = useTranslation('common');
    return (
        <>
            <div onClick={onClick} className="w-full h-1/2 ">
                <div className="p-2 m-1 text-center h-60">
                    <Image
                        className="container rounded-xl"
                        src={imageSrc}
                        alt={'alt'}
                        height={220}
                        width={350}
                    />

                    {/* change text color based on image color */}

                    {imageSrc == broken ? (
                        <div className="relative flex flex-col bottom-40">
                            <span className="pr-2 font-bold text-center text-black text-l ">
                                {date}
                            </span>
                            <span className="w-full pl-2 text-xl font-bold text-center text-black ">
                                {event}{' '}
                            </span>
                            <button className="mx-24 mt-4 font-normal text-white bg-green-800 rounded-md">
                                {t('clickForMore')}
                            </button>
                        </div>
                    ) : (
                        <div className="relative flex flex-col bottom-40">
                            <span className="pr-2 font-bold text-center text-white text-l ">
                                {date}
                            </span>
                            <span className="w-full pl-2 text-xl font-bold text-center text-white ">
                                {event}{' '}
                            </span>
                            <button className="mx-24 mt-4 font-normal text-white bg-green-800 rounded-md">
                                {t('clickForMore')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Card;
