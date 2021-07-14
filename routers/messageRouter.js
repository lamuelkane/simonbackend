import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import conversation, { message } from "../module/messagemodule.js";

const messageRouter = express.Router()

// messageRouter.post('/conversation', expressAsyncHandler(async(req, res) => {
//     const newConversation = new conversation({
//         members: [req.body.senderid, req.body.receiverid]
//     })
//     try {
//         const savedconversation = await newConversation.save();
//         res.status(200).json(savedconversation)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }))

// messageRouter.get('/:userid', expressAsyncHandler(async(req, res) => {
//     try {
//         const Conversation = await conversation.find({
//             members: {$in: [req.params.userId]}
//         })

//         res.status(200).json(Conversation)
//     } catch (error) {
//         res.status(200).json(error)
//     }
// }))

// messageRouter.get('/conversations', expressAsyncHandler(async(req, res) => {
//     try {
//         const conversations = await conversation.find()
//         res.status(200).json(conversations)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }))

messageRouter.post('/message', expressAsyncHandler(async(req, res) => {
    const Message = new message(req.body)
    try {
        const newMessage = await Message.save()
        res.status(200).json(newMessage)
    } catch (error) {
        res.status(500).json(error)
    }
}))

messageRouter.get('/message/:id', expressAsyncHandler(async(req, res) => {
    try {
        const messages = await message.find({})
        let clientmessages = messages.filter(mess => mess.senderid === req.params.id)
        res.status(200).json(clientmessages)
    } catch (error) {
        res.status(500).json(error)
    }
}))

messageRouter.post('/messages/update', expressAsyncHandler(async(req, res) => {
    try {
        const messages = req.body
        for (let i = 0; i < messages.length; i++) {
            const element = messages[i];
            
            let updatedProduct = await message.updateOne({_id: element._id}, element, (err, res) =>  {
                if (err) throw err;
                console.log("1 document updated");
            })
            res.send(updatedProduct)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}))

messageRouter.post('/message/update', expressAsyncHandler(async(req, res) => {
    console.log('messages received' + req.body.received)
    try {
            let updatedProduct = await message.updateOne({_id: req.body._id}, req.body, (err, res) =>  {
                if (err) throw err;
                console.log("1 document updated....");
            })
            console.log(updatedproduct)
            res.send(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}))

messageRouter.get('/messages', expressAsyncHandler(async(req, res) => {
    console.log('getting messages.....')
      try {
          const messages = await message.find({})
          res.status(200).json(messages)
      } catch (error) {
          res.status(500).json(error)
      }
  }))

messageRouter.get('/deleteone', expressAsyncHandler(async(req, res) => {
    console.log('works in the console')
    res.send('you are here')
    try {
       const deletedmessage = await message.deleteOne({_id: req.body._id})
        res.send(deletedmessage)
    } catch (error) {
        res.send(error)
    }
}))

messageRouter.get('/removeall', expressAsyncHandler(async(req, res) => {
    await message.remove({})
    res.send('messages removed successfully')
}))

export default messageRouter