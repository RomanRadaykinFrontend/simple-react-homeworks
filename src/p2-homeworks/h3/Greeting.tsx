import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = (error !== '') ? s.error : s.notError; // need to fix with (?:)


    return (
        <div className={s.appWrapper}>
            <div className={s.appContent}>
                <div className={s.formWrapper}>
                    <input placeholder='Enter your name' value={name} onChange={setNameCallback} className={inputClass}/>
                    <button onClick={addUser}>add</button>
                </div>

                <div className={s.errorMessage}>
                    <span>{error}</span>
                </div>
                <div className={s.count}>
                    <span>{totalUsers}</span>
                </div>
            </div>
        </div>
    );
}

export default Greeting;
