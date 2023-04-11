import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import productRouter from "./router/product";
import categoryRouter from "./router/category";
import authRouter from "./router/auth";
import cors from "cors";

dotenv.config();

const app = express()

app.use(express.json())
app.use(cors())

app.use('/product', productRouter)
app.use('/category', categoryRouter)
app.use('/', authRouter)

mongoose.connect(process.env.URI)

// app.listen(process.env.PORT, () => {
//     console.log(`Kết nối đến server ${process.env.PORT} thành công!`)
// })

export const viteNodeApp = app;