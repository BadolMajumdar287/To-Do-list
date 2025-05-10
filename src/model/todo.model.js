import { model, Schema } from "mongoose";


const todoSchema = new Schema({

   userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
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




export const todoModel = model("todo", todoSchema);