import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export const ChatContext = createContext();

export const ChatProvider = ({children})=>{
   const [messages,setMessages] = useState([]);
   const [users,setUsers] = useState([]); 
   const [selectedUser,setSelectedUser] = useState(null)
   const [unseenMessages,setUnseenMessages] = useState({});
   
   const {socket,axios} = useContext(AuthContext)

   //func to get users for sidebar 

   const getUsers = async() =>{
    try {
       const {data} = await axios.get("/api/messages/users") 
       if(data.success){
        setUsers(data.users)
        setUnseenMessages(data.unseenMessages)

       }

    } catch (error) {
       toast.error(error.message) 
    }
   }

   // func to get data for selected User

   const getMessages = async(userId) =>{

    try {
       const {data} =  await axios.get(`/api/messages/${userId}`) 

       if(data.success){
        setMessages(data.messages)
       }

    } catch (error) {

        toast.error(error.message)
        
    }

   }

  // func to send a message to selected user
  const sendMessage = async (messageData)=>{

    try {
       const {data} = await axios.post(`/api/messages/send/${selectedUser._id}`,messageData)

       if(data.success){
        setMessages((prev)=>[

            ...prev,data.newMessage
        ]
        )
       }else{
            toast.error(data.message)
       }
       
    } catch (error) {
        toast.error(error.message)
        
    }

  }

  // func to subs messages of a new user
  const subToMessages = async()=>{
    if(!socket) return;

    socket.on("newMessage",(newMessage)=>{
         if(selectedUser && newMessage.senderId === selectedUser._id){
            newMessage.seen = true;
            setMessages((prev)=>[...prev,newMessage])
            axios.put(`/api/messages/mark/${newMessage._id}`)
         }else{
            setUnseenMessages((prev)=>({
                ...prev,[newMessage.senderId] : 
                prev[newMessage.senderId] ? prev[newMessage.senderId]+1:1
            }
                 
            ))
         }
    })
  }
 
  // func to unsubscribe from messages
const unsubscribeMessages = async()=>{
    try {
        if(socket) socket.off("newMessage");

    } catch (error) {
        toast.error(error.message);
    }
}

useEffect(()=>{
    subToMessages();
    return () => unsubscribeMessages();
},[socket,selectedUser]);

    const value ={
        messages,users,selectedUser,getUsers,setMessages,sendMessage,setSelectedUser,unseenMessages,setUnseenMessages,getMessages
    }

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )

}