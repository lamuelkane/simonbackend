import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    members: {
        type: Array,
    }
},
{timestamps: true}
)

const conversation = mongoose.model('conversation', conversationSchema);

const messageSchema = new mongoose.Schema({
    receiverid: {
        type: String,
    },
    senderid: {
        type: String
    },
    text : {
        type: String
    },
    read: { type: Boolean, default: false},
    received: { type: Boolean, default: false}
},
{timestamps: true}
)

export const message = mongoose.model('message', messageSchema)

export default conversation