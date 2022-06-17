import { useTranslation } from 'react-i18next';
import { AppProps } from '../../../interface/AppProps';
import Direction from '../../../public/icons/direction.svg';

const RoutingButton = (props: AppProps) => {
    const { t } = useTranslation('common');
    return (
        <button
            className="inline-block px-5 py-3 mb-4 font-medium leading-snug text-white transition duration-150 ease-in-out bg-green-600 shadow-md rounded-xl hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
            onClick={props.onClick}
        >
            <div className="flex flex-row items-center justify-center">
                <div>
                    <Direction fill="white" />
                </div>
                <p className="ml-2">{t('direction')}</p>
            </div>
        </button>
    );
};

export default RoutingButton;
