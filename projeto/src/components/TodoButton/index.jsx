import React from 'react'
import { BiCheck } from "react-icons/bi";
import './style.css'

export default ({ value, onChanged }) => (
    <div className={`todo-button ${value ? 'todo-button-selected' : ''}`}
        onClick={() => onChanged(!value)}>
        <BiCheck values={{ className: "todo-button-icon" }} />
    </div>
) 