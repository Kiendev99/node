import mongoose from "mongoose";
const productSchema = new mongoose.Schema( {
    name: {
        type: String,
    },
    price: Number
} )
export default mongoose.model( "product", productSchema )