import React, {useEffect, useState}from 'react'

const EffectCounter = () => {

    const [count, setCount] = React.useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    })

    return (
        <div>
            <h3>Count: {count}</h3>
        </div>
    )
}

export default EffectCounter
