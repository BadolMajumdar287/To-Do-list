import { model,Schema } from "mongoose";


const todoSchema = new Schema({

         userId: {
            type:Schema.Types.ObjectId,
            ref: "users",
         },
         title: {
            type: String,
            required: true,
         },
         completed: {
            type: Boolean,
            default: false,
         }


});




export const todoModel = model("todos",todoSchema);