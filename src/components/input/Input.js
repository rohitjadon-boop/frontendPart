import React from "react";

function Input({ type, placeHolder, onChange, name, value }) {
    return (

        <input type={type} placeHolder={placeHolder} className="input-wrp"
            onChange={onChange} name={name} value={value}>
        </input>

    )
}

export default Input;