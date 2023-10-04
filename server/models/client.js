import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    userId: { type:String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, max: 50, reequired: true },
    password: { type: String, max:50, min: 4, required: true },
    location: { type: String, required: true },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;