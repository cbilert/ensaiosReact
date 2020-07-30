import React from 'react';


function InputField({type, name, value, onChange}) {
    if(type === 'textarea') {
        return (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
            />
        )
    } else {
        return(
            <input
                name={name}
                value={value}
                onChange={onChange}
            />
    )
    }
}
export default InputField;