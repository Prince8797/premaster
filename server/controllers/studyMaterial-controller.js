import PreMasterApi from "../schemas/studyMaterial-schema.js"


export const getMaterials = async (request, response) => {
    try {
        const allMaterials = await PreMasterApi.find(); // .find({}) will take all the data from database.
        response.send(allMaterials);
    } catch (error) {
        console.log("error which retrieving Study materials");
        response.status(500).json({ message: error.message });
    }
}

export const getMaterialsSubject = async (request, response) => {
    try {
        const studyMaterial = await PreMasterApi.findOne({ subjectName: request.params.subjectName });
        response.send(studyMaterial);
    } catch (error) {
        console.log("error while retrieving Subjects of study material");
        response.status(500).json({ message: error.message });
    }
}

export default getMaterials;