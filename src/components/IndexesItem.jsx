import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexesItem({value}) {
    return (
        <div className="col-3 border m-4 p-4">
            <Link  to={`/indexes/${value.ticker}`}>
                {value.name}    
            </Link> 
        </div>
    )
}
