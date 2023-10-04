import mongoose from "mongoose";

const organiserSchema = mongoose.Schema({
    organiserId: { type:String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, max: 50, reequired: true },
    password: { type: String, max:50, min: 4, required: true },
    location: { type: String, required: true },
});

const Organiser = mongoose.model("Organiser", organiserSchema);

export default Organiser;