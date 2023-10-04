import mongoose from "mongoose";

const vendorSchema = mongoose.Schema({
    vendorId: { type:String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, max: 50, reequired: true },
    password: {type: String, max:50, min: 4, required: true},
    location: { type: String, required: true },
    typeOfV: { type: String, required: true },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;