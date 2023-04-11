import { string } from "joi";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    original_price: {
        type: Number,
        min: 0,
        required: true
    },
    short_description: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    images: [
        {
            base_url: {
                type: String,
                required: false
            },
            is_gallery: {
                type: Boolean,
                required: false,
            },
            label: {
                type: String,
                required: false
            },
            large_url: {
                type: String,
                required: false
            },
            medium_url: {
                type: String,
                required: false
            },
            position: {
                type: String,
                required: false
            },
            small_url: {
                type: String,
                required: false
            },
            thumbnail_url: {
                type: String,
                required: false
            },
        }
    ],
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    specifications: [
        {
            name: {
                type: String,
                required: false
            },
            attributes: [
                {
                    code: {
                        type: String,
                        required: false
                    },
                    name: {
                        type: String,
                        required: false
                    },
                    value: {
                        type: String,
                        required: false
                    },
                }
            ]
        }
    ]
}, { timestamps: true, versionKey: false });

export default mongoose.model("Product", productSchema);