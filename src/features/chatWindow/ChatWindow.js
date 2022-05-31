import React from "react";
import { useSelector } from "react-redux";
import Chat from "../components/Chat";
import Starred from "../components/Starred";
import styles from "./ChatWindow.module.css";

export default function ChatWindow() {
    const currentName = useSelector(state => state.sideWindow.activeUser);

    const [display, setDisplay] = React.useState(false);

    const [chatOrStarred, setChatOrStarred] = React.useState(true);

    React.useEffect(()=> {
        if(currentName !== ``) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    },[currentName]);    

    function updateChatOrStarred() {
        setChatOrStarred(prevState => !prevState);
    }
    //NOW YOU HV TO add btn to starred to unstar a msg, add pp to users and change bg color of new chat btn from gray
    return(
        <div className={styles.chatWindow}>
            {display 
            ? 
            currentName !== undefined ? <div className={styles.container}>
                <div className={styles.topPart}>
                    <p>{currentName.name}</p>
                    <p className={styles.topButton} onClick={updateChatOrStarred} >chat</p>
                    <p className={styles.topButton} onClick={updateChatOrStarred} >starred</p>
                </div>
                {chatOrStarred ? <Chat /> : <Starred />} 
            </div> 
            :
            console.log('Name not found')
            :
            <div>
                <p>Here will be image</p>
                <p>Head over to conversations pane to get started with</p>
            </div>}
            
        </div>
    )
}