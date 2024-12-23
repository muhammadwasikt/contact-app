import express from "express";
import Contact from "../model/contact_model.js";



export const contactRoutes = express.Router();




contactRoutes.get("/", async (req, res) => {
    try {
        const getAllContacts = await Contact.find();
        res
            .status(200)
            .send({ status: 200, message: 'SUCCESS', data: getAllContacts });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
});

contactRoutes.post("/add", async (req, res) => {
    console.log(req.body);
    
    try {
        const data = req.body;
        const response = await Contact.create(data);
        res
            .status(200)
            .send({ status: 200, message: "SUCCESS", data: response });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
});

contactRoutes.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        const updateData = await Contact.find()
        res
            .status(200)
            .send({ status: 200, message: 'DELETE_SUCCESSFULLY', data: updateData});
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
});
contactRoutes.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = await Contact.findByIdAndUpdate(id, data);
        res
            .status(200)
            .send({ status: 200, message: 'UPDATE_SUCCESSFULLY', data: response });
    } catch (error) {
        res.status(400).send({ status: 400, message:error.message});
    }
});