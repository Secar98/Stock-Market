import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexesItem({value}) {
    return (
        <div>
            <Link className="btn btn-secondary mb-2" to={`/indexes/${value.ticker}`}>
                {value.ticker}    
            </Link> 
        </div>
    )
}
