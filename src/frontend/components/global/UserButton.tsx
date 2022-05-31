import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React from "react";


export default function UserButton() {
    return (
        <button className="justify-center w-12 m-3 text-white bg-green-400 rounded-full h-11 hover:bg-green-600 ">
            <FontAwesomeIcon  icon={faUser} size="lg" className="justify-center "/>
        </button>
    )
}