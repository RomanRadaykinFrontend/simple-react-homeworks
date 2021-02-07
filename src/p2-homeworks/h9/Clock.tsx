import React, {useState, MouseEvent} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            // setDate
            let newDate = new Date();
            setDate(newDate)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = (e: MouseEvent) => {
        // show
        if(e.type === 'mouseenter'){
            setShow(true)
        }
    };
    const onMouseLeave = (e: MouseEvent) => {
        // close
        if(e.type === 'mouseleave'){
            setShow(false)
        }
    };

    const stringTime = date ? `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}` : ''; // fix with date
    const stringDate = date ? `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} `: ''; // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
