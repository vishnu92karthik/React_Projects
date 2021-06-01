import React,{useState} from 'react';

export default function Button(props){
    const [title,setTitle]= useState("Submit from function");
    return(
        <button onClick={()=>setTitle('updated value')}>{title}Submit</button>
    )
}