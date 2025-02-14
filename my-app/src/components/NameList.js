import React from 'react'
import Person from './Person'
function NameList() {
    const names=['Afreedh','Bilal','Vasi','Afreedh']
    const persons=[
        {
            id:1,
            name:'Afreedh',
            age:25,
            skill:'React'
        },
        {
            id:2,
            name:'Bilal',
            age:24,
            skill:'Angular'
        },
        {
            id:3,
            name:'Vasi',
            age:23,
            skill:'Vue'
        }
    ]
    const nameList =names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
    
}

export default NameList
