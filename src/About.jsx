// import Button from "./Button"

import { useState } from "react"

function About(){
    // const state = useState("ram")
    // const firstitem = state[0]
    // const seconditem = state[1]
    // var count = 0
    // const increaseCount = ()=>{
    //     count = count + 1
    //     console.log(count)
    // const state = useState(0)
    // const firstItem = useState[0]
    // const secondItem = useState[1]
    const [number,setNumber] = useState(0)

    const increaseCount =()=>{{
        setNumber(number + 1)
    }

    const decreaseCount=()=>{
        setNumber(number - 1)
    }

    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    )
}

export default About