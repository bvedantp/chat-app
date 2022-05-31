/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import { nameFind, findById } from "../sideWindow/sideWindowSlice";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
    const dispatch = useDispatch();

    function initiateSearch(event) {
        if(event.key === 'Enter') {
            dispatch(nameFind(event.target.value));
            dispatch(findById(event.target.value));
            props.close();
        }
    }

    return(
        <div className={styles.searchBar}>
            <input className={styles.input} type="text" onKeyDown={initiateSearch} placeholder="Search a contact name to get started..." />
            <button onClick={props.close} >X</button>
        </div>
    )
}