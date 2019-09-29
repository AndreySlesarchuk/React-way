import React from "react";
import styles from "./FormsControl.module.css"

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={styles.formControl}>
            <textarea {...input} {...props} />
        </div>
    )
}