import mongoose from "mongoose";

// const postSchema = new mongoose.Schema({
//   title: String,
//   text: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: { createdAt: 'created_at' } });

// const postSchema = new mongoose.Schema({
//   text: String,
//   kod: Number,
// }, { timestamps: { createdAt: 'created_at' } });

// const postSchema = new mongoose.Schema({
//     title: String,
//     text: String,
//     kod: Number,
// })

const luxeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    link: {
        type: String
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
})

export default luxeSchema;