import React from 'react'

const Welcome = props => {
    console.log(props.userData)
    return (
        <div>
            <h2>Name : {props.userData.name} </h2>
        </div>
    )
}

export default Welcome
