import React, { useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';
import ThemeToggle from "../Theme/ToggleTheme";

const Lab4 = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <ThemeToggle />

            <div>
                <h2>Счет: {count}</h2>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            
        </div>
    )
}

export default Lab4;
