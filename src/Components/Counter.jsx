import { useState } from "react"
import { decrement, decrementByAmount, increment, incrementByAmount } from "../redux/counterSlice"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {

    const count = useSelector(state => state.counter.count)

    const dispatch = useDispatch()

    return (
        <div className="flex text-5xl flex-col items-center justify-center gap-5">
            <p>this count is: {count}</p>
            <div className="gap-10 flex">
                <button onClick={() => dispatch(decrement())}>-</button>

                <button onClick={() => dispatch(increment())}>+</button>

                <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>

                <button onClick={() => dispatch(decrementByAmount(4))}>-4</button>
            </div>

        </div>
    )
}

export default Counter