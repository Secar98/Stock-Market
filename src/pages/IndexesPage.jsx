import React from 'react'
import IndexesItem from '../components/IndexesItem';

export default function IndexesPage({api}) {
    api && console.log(Object.entries(api.se)); 
    return (
        <div>
            {api && Object.entries(api.se).map( item => {
                const key = item[0]
                const value = item[1]
                return <IndexesItem key={key} value={value} />
            })}
            
        </div>
    )
}
