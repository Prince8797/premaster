import express from "express";
// components
import getMaterials, { getMaterialsSubject } from "../controllers/studyMaterial-controller.js";

const StudyMaterialRouter = express.Router();

StudyMaterialRouter.get('/', getMaterials);
StudyMaterialRouter.get("/:subjectName", getMaterialsSubject);

export default StudyMaterialRouter;