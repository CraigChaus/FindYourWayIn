import type { NextPage } from 'next'


const LandingPage: NextPage = () => {
    return (
        <div className="block h-screen bg-cover bg-landing-page">
            <div className="flex flex-col items-center justify-center h-screen bg-gray-600 opacity-70">
                <h1 className="text-5xl text-center text-white">FYWI <br></br> Walstraat</h1>
                <div className='flex flex-col items-center mt-12 justify-evenly h-1/5'>    
                    <button className="px-4 py-2 font-bold text-white bg-green-700 rounded hover:bg-green-800">
                        Sign in
                    </button>      
                    <button className="px-4 py-2 font-bold text-green-700 bg-white border-2 border-green-700 rounded hover:bg-gray-400">
                        Sign up
                    </button> 
                    <a href='' className="hover:text-gray-900">Continue without log in </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;