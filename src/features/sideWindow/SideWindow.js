import React from "react";
import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { findById } from "./sideWindowSlice";
import styles from "./SideWindow.module.css";

export default function SideWindow() {
    const currentName = useSelector(state => state.sideWindow.valueAfterOperation);
    const dispatch = useDispatch();


    const [display,setDisplay] = React.useState(false);

    function updateDisplay() {
        setDisplay(prevState => !prevState);
    };

    return(
        <div className={styles.container}>
            <div className={styles.header} >
                <p className={styles.allChats} >All Chats </p>
                <button className={styles.newChat} onClick={updateDisplay} >New Chat</button>
            </div>
            {display && <SearchBar close={updateDisplay} />}
            <div>
                {currentName.map(item => {
                    return <div dataletter={item.name.split('').slice(0)[0]} className={styles.chatHead}><div></div>
                        <p className={styles.spandan} key={item.id} onClick={()=> dispatch(findById(item.name))} >{item.name} <br /> <span>{item.messages === undefined ? <span>Input text message...</span> : item.messages[currentName.length - 1].message}</span> </p>
                    </div> 
                    
                })}
            </div>
        </div>
    )
}