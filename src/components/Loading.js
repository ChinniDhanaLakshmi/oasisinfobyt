import React from 'react'

export default function Loading() {
    return (
        <div className='text-center'>
            <div className="spinner-border" role="status" style={{height:'90px' , width:'90px' , marginTop:'90px'}}>
                <span className="sr-only">Loading...</span>
            </div>


        </div>
    )
}