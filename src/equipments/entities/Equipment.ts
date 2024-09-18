import { Schema, model } from "mongoose";

const EquipmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    acquisitionDate: {
        type: Date,
        required: true        
    },
},{
    timestamps: true,
    versionKey: false
});

export const Equipment = model('Equipment', EquipmentSchema);