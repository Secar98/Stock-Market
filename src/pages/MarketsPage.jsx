import React from 'react'
import { Link } from 'react-router-dom'

export default function MarketsPage({api}) {
    api && console.log(api);
    return (
        <div className="col-12">
            {api && Object.entries(api).map( item => {

                return <Link className="btn btn-secondary mb-2" to={`/Markets/${item[0]}`}>
                    {item[0]}
                </Link>
            })}
        </div>
    )
}
