import mongoose from "mongoose";


const preMasterApiSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        subjectName: String,
        subjectDiscription: String,
        bgURL: String,
        chapter1: Object,
        chapter2: Object,
    },
    {
        timestamps: true
    }
)

const PreMasterApi = new mongoose.model("PreMasterApi", preMasterApiSchema);

export default PreMasterApi;