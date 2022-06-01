import { AppProps } from '../AppProps';
import Direction from '../../../public/icons/direction.svg';

const RoutingButton = (props: AppProps) => {
    return (
        <button 
            className="inline-block w-2/5 py-3 mb-4 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-green-600 shadow-md rounded-xl px-7 hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg" 
            onClick={props.onClick}
        >
            <div className='flex flex-row items-center justify-center'>
                <div>                        
                    <Direction fill="white"/> 
                </div>
                <p className='ml-2'>Direction</p> 
            </div>
        </button>
    )
}

export default RoutingButton;
