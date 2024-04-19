import React, { useContext } from "react";
import './c.css';
// import { ThemeContext } from '../Theme/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';

const Lab4 = () => {
    // const { theme, toggleTheme } = useContext(ThemeContext);
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
        {/* // <div className={`container-${theme}`}>
        //     <h2>Тут кнопочка смены темы(работает отвратительно, пофиксить)</h2>
        //     <button onClick={toggleTheme}>Поменять тему</button> */}

            <div>
                <h2>Счет: {count}</h2>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            
        </div>
    )
}

export default Lab4;
