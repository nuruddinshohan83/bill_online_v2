import React from 'react';
import { ErrorMessage,useField } from 'formik';

export const InputField=({label , ...props})=>{
    const[field]=useField(props);
    return(
        <div>
            <label htmlfor={field.name}>{label} </label>
            <input {...props} {...field}/>
            <ErrorMessage name={field.name}/>
        </div>
    )
};