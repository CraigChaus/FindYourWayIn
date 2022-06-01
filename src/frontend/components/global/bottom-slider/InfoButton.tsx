import { AppProps } from '../AppProps';
import Info from '../../../public/icons/info.svg';

const InfoButton = (props: AppProps) => {
    return (
        <button 
            className="inline-block w-2/5 py-3 mb-4 text-sm font-medium leading-snug text-green-600 uppercase transition duration-150 ease-in-out bg-gray-100 shadow-md rounded-xl px-7 hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-lg" 
            onClick={props.onClick}
        >
            <div className='flex flex-row items-center justify-center'>
                <div>                        
                    <Info fill="green"/>
                </div>
                <p className='ml-2'>Info</p>
            </div>
        </button>
    )
}

export default InfoButton;
