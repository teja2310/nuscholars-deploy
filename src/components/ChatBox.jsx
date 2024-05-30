import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, limit, onSnapshot,orderBy, } from "firebase/firestore";
import { db } from "../firebase";
const ChatBox = () => {
    const messagesEndRef=useRef();
    const [messages,setMassages]=useState([]);
    //const messages = [ { id: 1, text: "hello there!", name: "teja cutie" }, { id: 2, text: "hi", name: "kang ji won" } ]
    const scrollToBottom=()=>{
        messagesEndRef.current.scrollIntoView({behavior:"smooth"})
    }
    useEffect(scrollToBottom,[messages])

    useEffect(() => {
        const q = query(collection(db, "messages") ,orderBy("createdAt"),limit(100));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(),id: doc.id});
                //console.log(doc.data())
            });
            console.log(messages)
            setMassages(messages)
        });
        return ()=>unsubscribe; 

    }, [])
    return (
        <div className="pb-44 pt-20 containerWrap">{messages.map(message => (
            <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef}></div> </div>
    );

}
export default ChatBox