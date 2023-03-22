import express from "express"
import mongoose from "mongoose";
import router from "./router/product";
const app = express()
app.use( express.json() )
app.use( "/api", router )
mongoose.connect( "mongodb://127.0.0.1:27017/we17305-demo2" )
export const viteNodeApp = app;