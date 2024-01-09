import mongoose from "mongoose";
import luxeSchema from "./luxeSchema.js";

const LuxeModel = mongoose.model("luxe", luxeSchema);

export default LuxeModel;