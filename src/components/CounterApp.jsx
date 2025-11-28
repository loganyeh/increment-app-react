import { useState, useRef, useEffect, useContext } from "react";
import { MyContext } from "./MyContext";

function CounterApp(){
    // const {} = useContext(MyContext);
    const [count, setCounter] = useState(0);

    const resetButton = () => {
        setCounter(0);
    }

    const incrementButton = () => {
        setCounter(prev => prev + 1);
    }

    const decrementButton = () => {
        setCounter(prev => prev - 1);
    }

    return(
        <>
            <div className="h-screen w-screen flex justify-center items-center border-2 border-red-600">
                <div className="h-1/2 w-1/2 border-2 border-blue-600 rounded-3xl">
                    <div className="h-2/3 w-full flex flex-row text-9xl">
                        <div onClick={decrementButton} className="h-full w-1/3 flex justify-center items-center hover:bg-gray-50 active:bg-gray-200 cursor-pointer rounded-3xl">-</div>
                        <span className="h-full w-1/3 flex justify-center items-center rounded-3xl">{count}</span>
                        <div onClick={incrementButton} className="h-full w-1/3 flex justify-center items-center hover:bg-gray-50 active:bg-gray-200 cursor-pointer rounded-3xl">+</div>
                    </div>
                    <div onClick={resetButton} className="h-1/3 w-full flex justify-center items-center text-7xl hover:bg-gray-50 active:bg-gray-200 cursor-pointer rounded-3xl">Reset</div>
                </div>
            </div>
        </>
    )
}

export default CounterApp;