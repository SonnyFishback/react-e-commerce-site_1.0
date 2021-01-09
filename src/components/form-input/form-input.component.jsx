import { React } from "react";

import "./form-input.styles.scss";

export const FormInput = ({handleChange, label, ...otherProps}) => {
    return(
       <div className="group">
            <input type="text" className="form-input" onChange={handleChange} {...otherProps} />
            {
                label ? (<label className={`${props.value.length ? "shrink" : ""} form-input-label`} >
                    {label}
                </label>) : null
            }
       </div>
    )
}