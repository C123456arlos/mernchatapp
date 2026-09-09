import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser'
import { app, server } from './lib/socket.js'
import dns from "node:dns/promises"
import path from 'path'
dotenv.config()
const PORT = process.env.PORT
const __dirname=path.resolve()


app.use(express.json())
app.use(cookieParser())

app.use(cors({origin:'http://localhost:5174', credentials:true}))

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')))
    app.get("*{any}", (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'))
    })
}
// app.listen(PORT, () => {
    //     console.log('server is running on port' + PORT)
    //     connectDB()
    // })
    
    dns.setServers(["1.1.1.1"]);
    console.log(await dns.getServers());
    server.listen(PORT, () => {
        console.log('server is running on port' + PORT)
        connectDB()
    })
    