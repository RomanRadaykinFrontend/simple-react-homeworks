import React from "react";
import s from '../Error404.module.css'

function Error404() {
    return (
        <div className={s.errorPage}>
            <h1>404</h1>
            <span>Page not found!</span>
        </div>
    );
}

export default Error404;
