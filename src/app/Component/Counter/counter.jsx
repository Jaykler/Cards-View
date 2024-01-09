"use client"
import React,{useState} from "react"


//Use useState as a variable
function Counter (props){
    const [valor,setValor] = useState(props.iValue || 0)

    function increment(){
        setValor(valor+1)
        console.log(valor)
    }

    function decrement(){

        valor > 0 && setValor(valor-1)
        // if (valor === 0) return
        // if (valor <=0) {
        //     setValor(valor)
        // }
        
    }
    
    return (
        <main>
            <h1>{valor}</h1>
            <button onClick={increment}>Increment </button>
            <button onClick={decrement}>Decrement </button>
        </main>
    )   
}
export default Counter