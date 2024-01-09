import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import LuxeModel from "./posts/LuxeModel.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {

    try {
        const data = await LuxeModel.find({});
        res.json({data, status: 'successGET'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.post('/', async (req, res) => {
    try {
        const data = req.body;
        const dataCreate = await new LuxeModel(data).save();
        res.json({dataCreate, status: 'successPOST'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.put('/:id', async (req, res) => {
    try {
        const data = req.body;
        await LuxeModel.findByIdAndUpdate(req.params.id, data);
        const dataEdit = await LuxeModel.findById(req.params.id);
        res.json({dataEdit, status: 'successPUT'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


app.delete('/:id', async (req, res) => {

    try {
        const data = await LuxeModel.findByIdAndDelete(req.params.id);
        res.json({data, status: 'successDELETE'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

(async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to DB');

        app.listen(process.env.PORT, (err) => {
            if (err) throw err;

            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        });
    } catch (err) {
        throw err;
    }
})()
