import { AppProps } from '../../../interface/AppProps';
import Close from '../../../public/icons/close.svg';

const InfoButton = (props: AppProps) => {
    return (
        <button
            className="inline-block px-3 py-3 mb-4 font-medium leading-snug text-red-600 transition duration-150 ease-in-out bg-gray-100 border-2 border-red-600 shadow-md rounded-xl hover:bg-red-300 hover:shadow-lg focus:bg-red-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-300 active:shadow-lg"
            onClick={props.onClick}
        >
            <div className="flex flex-row items-center justify-center">
                <div>
                    <Close fill="red" />
                </div>
                <p className="ml-2">Close</p>
            </div>
        </button>
    );
};

export default InfoButton;
