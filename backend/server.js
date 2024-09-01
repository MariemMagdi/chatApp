"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRouter_js_1 = __importDefault(require("./routes/authRouter.js"));
const connectToMongoDb_js_1 = __importDefault(require("./db/connectToMongoDb.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    (0, connectToMongoDb_js_1.default)();
    console.log(`server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
    res.send("Hello world!!");
});
app.use("/api/auth", authRouter_js_1.default);
