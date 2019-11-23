import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({input, meta, child, elem, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <elem {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props} /></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props} /></FormControl>
}