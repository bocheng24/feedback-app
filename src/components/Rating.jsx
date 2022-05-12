import React from 'react'

function Rating({ rating, handleChange, selected }) {

    return (
        <li className={ (selected === rating ) ? 'isSelected' : null }>
            <input type="radio"
                name="rating" 
                id={`rate${ rating }`}
                value={`${ rating }`}
                onChange={ handleChange }
                checked={ selected === rating }
            />
            <label htmlFor={`rate${ rating }`}>{ rating }</label>
        </li>
    )
}

export default Rating