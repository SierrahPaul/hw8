import React, { useState } from 'react'

const Counter = (props) => {
    const [currentCount, setCurrentCount] = useState(0)



    const handleClick = () => {
        const newCount = (currentCount + props.incrementBy)

        if(newCount >= 11){
            setCurrentCount(0)
        }
        else{
            setCurrentCount(newCount)
        }
    }

    
    
    const buttonStyles = {
        backgroundColor: props.buttonColor,
        color: 'white',
        borderRadius: '5px',
    }


    return (

                <div>
                    <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
                    <div>{currentCount}</div>
                </div>

    )
}

export default Counter