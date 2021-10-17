import React from 'react'
import Card from './Card'

function CardWrapper(props) {
    //console.log(props.users)
    return (
        <div>
            {
                props.users.map(user =>(
                    <Card key={user.id} {...user} />
                ))
            }
        </div>
    )
}

export default CardWrapper
