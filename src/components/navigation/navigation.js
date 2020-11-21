import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import YellowTopBar from "./yellowTopBar"
import Logo from "./logo"


const Navigation = ({simplified}) => {

    const [isExpanded, toggleExpansion] = useState(false)

    return (
        <>
            <YellowTopBar />
            
            {simplified ? 
            
            (
                <div className="flex flex-wrap max-w-screen-lg mx-auto py-8 px-4">
            <Link to="/" className="bg-transparent hover:bg-yellow-500 text-gray-400 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                &larr; Back to ftpaul.io
            </Link>
            </div>
            )
            
            : 

            (<nav className="flex flex-1 items-center justify-between max-w-screen-lg mx-auto pt-8 px-2 xs:pt-4 xs:ml-8">
                <div className="flex">
                    <Logo />
                </div>
                    <button className="hidden xs:display xs:flex items-center px-3 py-2 text-yellow-600 bg-organd-300 z-40 outline-none focus:outline-none " onClick={() => toggleExpansion(!isExpanded)}>
                        <span className={isExpanded ? `text-xl text-gray-500 hover:text-gray-100 border-b-2 border-yellow-600` : `text-xl text-gray-500 hover:text-yellow-600 border-b-2 border-yellow-600`}>
                            {isExpanded ? "Close" : "Menu"}
                        </span>
                    </button>
                    <div className={isExpanded ? `xs:block xs:visible xs:opacity-100 xs:top-0 xs:left-0 xs:absolute xs:w-screen xs:h-screen xs:bg-yellow-600 xs:ease-in-out xs:duration-1000 xs:overflow-y-hidden z-30` : `xs:hidden xs:invisible xs:opacity-0`}>
                    {isExpanded ? <Helmet bodyAttributes={{class: `xs:overflow-hidden`}}></Helmet> : <Helmet bodyAttributes={{class: `xs:overflow-auto`}}></Helmet>}
                    <ul className={isExpanded ? `xs:block text-xl xs:pt-64 xs:text-center xs:text-2l` : `text-lg flex xs:hidden`}>
                        <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                            <Link className="text-gray-500  hover:text-yellow-600 xs:hover:text-gray-100" activeClassName="border-b-2 border-yellow-600 xs:border-gray-100" to="/">About</Link>
                        </li>
                        {/* <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                            <Link className="text-gray-500  hover:text-yellow-600 xs:hover:text-gray-100" activeClassName="border-b-2 border-yellow-600 xs:border-gray-100" partiallyActive={true} to="/writing/">Writing</Link>
                        </li> */}
                        <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                            <Link className="text-gray-500  hover:text-yellow-600 xs:hover:text-gray-100" activeClassName="border-b-2 border-yellow-600 xs:border-gray-100" to="/bookshelf/">Recommendations</Link>
                        </li>
                        <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                            <Link className="text-gray-500  hover:text-yellow-600 xs:hover:text-gray-100" activeClassName="border-b-2 border-yellow-600 xs:border-gray-100" to="/resume/">Resume</Link>
                        </li>
                        <li className="mr-6 xs:text-gray-600 xs:text-2xl xs:mb-6">
                            <Link className="text-gray-500  hover:text-yellow-600 xs:hover:text-gray-100" activeClassName="border-b-2 border-yellow-600 xs:border-gray-100" to="/contact/">Contact</Link>
                        </li>
                    </ul>

                    </div>
                    
                
            </nav>)}
        </>
    )
}
    
export default Navigation