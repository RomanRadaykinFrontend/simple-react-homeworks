import React from "react";
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>

            <div className={s.avatarBlock}>
                <img src={props.avatar} alt='avatar'/>
            </div>

            <div className={s.messageBlock}>
                <div className={s.name}>
                    <b> {props.name} </b>
                </div>

                <div className={s.messageAndTime}>
                    <div>
                        {props.message}
                    </div>

                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Message;
