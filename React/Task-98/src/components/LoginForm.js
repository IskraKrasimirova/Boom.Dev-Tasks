import React from "react";
import style from "./LoginForm.module.css";

function LoginForm() {
    return (
        <form className={style.form}>
            <label className={style.label}>Username</label>
            <input className={style.input} type="text" name="username"></input>
            <label className={style.label}>Password</label>
            <input className={style.input} type="password" name="password"></input>
            <button className={style.submit} type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;