import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { insertToArray } from "../sideWindow/sideWindowSlice";
import Message from "./Message";
import styles from "./ChatArea.module.css";

export default function ChatArea() {
    const currentUser = useSelector(state => state.sideWindow.activeUser);

    const dispatch = useDispatch();

    const [display, setDisplay] = React.useState(false);

    React.useEffect(()=> {
        function updateDisplay() {
            if(currentUser.messages !== undefined) {
                setDisplay(true);
                dispatch(insertToArray(currentUser.id));
            } else {
                setDisplay(false);
            }
        };
        updateDisplay();
    },[currentUser]);

    return(
        <div className={styles.chatThread}>
            {display 
            ? 
            currentUser.messages !== undefined ? currentUser.messages.map((item,index) => {
                return (
                    <Message key={index} time={item.time} message={item.message} />
                )
            }) : <div></div> 
            :
            <div>
                <p>image</p>
                <p>Start a new conversation</p>
            </div>}
        </div>
    )
}