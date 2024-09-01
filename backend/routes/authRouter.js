"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_js_1 = require("../controllers/authController.js");
const router = (0, express_1.Router)();
router.post("/signup", authController_js_1.signup);
router.post("/login", authController_js_1.login);
router.post("/logout", authController_js_1.logout);
exports.default = router;
