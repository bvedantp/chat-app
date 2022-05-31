import React from "react";
import { useSelector } from "react-redux";
import styles from "./Starred.module.css";

export default function Starred() {
    const currentName = useSelector(state => state.sideWindow.activeUser);
console.log(currentName.starred)
    return(
        <div className={`${styles.messageBox} ${styles.chatThread}`}>
            {currentName.starred === undefined 
            ?
            <div>Starred messages will be shown here.</div>
            :
            currentName.starred.map((item, index) => {
                return <div key={index} className={styles.chatList}>
                    <p className={styles.time}>{item.time}</p>
                    <p className={styles.message}>{item.message}</p>
                </div>
            })}
        </div>
    )
}