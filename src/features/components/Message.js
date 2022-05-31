import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { insertStarred, insertToArray } from "../sideWindow/sideWindowSlice";
import styles from "./Message.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash, faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function Message(props) {
    const [starred, setStarred] = React.useState({
        message: props.message,
        time: props.time
    });

    const [check, setCheck] = React.useState(false);

    const currentUser = useSelector(state => state.sideWindow.activeUser);

    const dispatch = useDispatch();

    function updateStarred() {
        if(check === true) {
            console.log('already starred');
        } else {
            setCheck(true);
            dispatch(insertStarred(starred));
            dispatch(insertToArray(currentUser.id));
        }
    }

    return(
        <div className={styles.messageBox}>
            <div className={styles.hoverButtons}>
                <button onClick={updateStarred} ><FontAwesomeIcon icon={faStar} /></button>
                <button><FontAwesomeIcon icon={faTrash} /></button>
                <button><FontAwesomeIcon icon={faShareNodes} /></button>
            </div>
            <div className={styles.chatList}>
                <p className={styles.time} >{props.time}</p>
                <p className={styles.message}>{props.message}</p>
            </div>
        </div>
    )
}