import React, {useEffect, useState} from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(100)

//first type of useEffect
// useEffect(()=>{
//   console.log("Hello inside from useEffect")
// },[])

//second type of useEffect
useEffect(()=>{
  console.log("second type of useEffect.")
},[count, count2])

//third type of useEffect
// useEffect(()=>{
//   console.log("third type of use effect")
// })

  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>+</button>
    </div>
    <div>
      <h1>{count2}</h1>
      <button onClick={()=>{setCount2(count2-1)}}>-</button>
    </div>
    </>
  )
}

export default UseEffect