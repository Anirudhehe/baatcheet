import express from "express"
import "dotenv/config"
import cors from "cors"
import http from "http"
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import {Server} from "socket.io"
import { log } from "console";

// new express app to start an HTTP server
const app = express();
const server = http.createServer(app)

// new socket.io server
export const io = new Server(server,{
    cors:{origin:"*"}
})

//online users
export const userSockerMap = {}; // {userId:socketId}

//socket connection handler

io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("User connected ", userId);

    if(userId){
        userSockerMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers",Object.keys(userSockerMap)); 
    socket.on("disconnect",()=>{
        console.log("User Disconnected", userId);
        delete userSockerMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSockerMap))
    })
    
})

//midlleware 
app.use(express.json({limit:"4mb"}))
app.use(cors())

//routes
app.use('/api/status',(req,res)=> res.send("server is live"))
app.use("/api/auth",userRouter);
app.use("/api/messages",messageRouter);

await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

// for production
export default server;
