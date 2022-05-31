import React from "react";
import { useDispatch } from "react-redux";
import { insertMessage } from "../sideWindow/sideWindowSlice";
import ChatArea from "./ChatArea";
import styles from "./Chat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip, faStar, faFaceLaugh, faPencil } from "@fortawesome/free-solid-svg-icons";

export default function Chat() {
    const dispatch = useDispatch();

    const [chatState, setChatState] = React.useState({
        message: ``,
        time: ``
    })

    function updateChatState(event) {
        let time = new Date();
            setChatState({
                message: event.target.value,
                time: `${time.getHours()}:${time.getMinutes()}`
            })
    }

    function inputMessage(event) {
        if(event.key === 'Enter') {
            dispatch(insertMessage(chatState));
            setChatState({
                message: ``,
                time: ``
            })
        }
    }

    return(
        <div className={styles.chat}>
            <ChatArea />
            <div className={styles.inputFieldArea}>
                <input className={styles.textEnter} value={chatState.message} onChange={updateChatState} onKeyDown={inputMessage} type="text" placeholder="Enter your message here"/>
                <div className={styles.hoopla}>
                    <p className={styles.icons} ><FontAwesomeIcon icon={faPencil} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faPaperclip} /> <FontAwesomeIcon icon={faFaceLaugh} /></p>
                    <button className={styles.send}> <FontAwesomeIcon icon={faPaperPlane} /> </button>     
                </div>
            </div>
        </div>
    )
}