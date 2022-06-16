import FlagUK from '../../../public/icons/flags/4x3/gb.svg';
import FlagNL from '../../../public/icons/flags/4x3/nl.svg';
import FlagCN from '../../../public/icons/flags/4x3/cn.svg';
import FlagDE from '../../../public/icons/flags/4x3/de.svg';

import React from 'react';
import { useTranslation } from 'react-i18next';
const LanguageItem = ({ locale }: any) => {
    const { t } = useTranslation('common');
    const languageSelection = () => {
        switch (locale) {
            case 'en':
                return (
                    <>
                        <FlagUK className="w-5 h-5 mr-2" />
                        {t('english')}
                    </>
                );
            case 'nl':
                return (
                    <>
                        <FlagNL className="w-5 h-5 mr-2" />
                        {t('dutch')}
                    </>
                );
            case 'zh':
                return (
                    <>
                        <FlagCN className="w-5 h-5 mr-2" />
                        {t('chinese')}
                    </>
                );
            case 'de':
                return (
                    <>
                        <FlagDE className="w-5 h-5 mr-2" />
                        {t('german')}
                    </>
                );
            default:
                return (
                    <>
                        <FlagUK className="w-5 h-5 mr-2" />
                        {t('english')}
                    </>
                );
        }
    };
    return <>{languageSelection()}</>;
};
export default LanguageItem;
