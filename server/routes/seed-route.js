import express from "express";
import PreMasterApi from "../schemas/studyMaterial-schema.js";
import PreMasterUser from "../schemas/user-schema.js";
import data from "../constants/data.js";


// this api is creating a api with the name localhost:80/api/seed --> in json format.

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    console.log("study materials saved to database successfully")
    await PreMasterApi.deleteMany();
    const createdMaterials = await PreMasterApi.insertMany(data.studyMaterials);
    await PreMasterUser.deleteMany();
    const createUsers = await PreMasterUser.insertMany(data.users);
    res.send({ createUsers, createdMaterials });
});

export default seedRouter;
