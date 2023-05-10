
import React, { Component,useEffect,useState } from 'react';

const SamplePage =()=>{
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);
    const handleClick1 =()=>{
        setCounter1(counter1+1);
    };
    const handleClick2 =()=>{
        setCounter2(counter2+1);
    };
    useEffect(()=>{
        console.log("hello")
        return ()=>{
            //write code here
        }
    },[counter1])
    return(
        <>
    <button onClick={handleClick1}> counter1</button>
    <div style={{marginBottom:"12px"}}>{counter1}</div>

    <button onClick={handleClick2}> counter2</button>
    <div>{`counter2 is ${counter2}`}</div>
    
    </>
    )
}
export default SamplePage;