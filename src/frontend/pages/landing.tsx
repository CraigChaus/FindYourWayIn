import type { NextPage } from 'next'


const LandingPage: NextPage = () => {
    return (
        <div className="block h-screen bg-cover bg-landing-page">
            <div className="flex flex-col items-center justify-center h-screen bg-gray-600 opacity-70">
                <h1 className="text-2xl text-center text-white">FYWI <br></br> Walstraat</h1>
                <div className='flex flex-col items-center justify-center mt-12 '>    
                    <button className="px-3 py-2 font-bold text-center text-indigo-400 bg-gray-900 border-2 border-indigo-400 rounded scroll-py-20 focus:outline-none">Button</button>
                    <button className="px-3 py-2 font-bold text-center text-indigo-400 bg-gray-900 border-2 border-indigo-400 rounded focus:outline-none">Button</button>
                    <p>Continue without log in </p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;