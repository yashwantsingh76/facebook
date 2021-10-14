import React from 'react'
import {MdError} from 'react-icons/md'
export default function ErrorPage() {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <MdError size={30} color={'red'}/><h1>404!... Page not found</h1>
        </div>
    )
}
