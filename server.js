import express, { static as eStatic } from "express";
import cookieParser from "cookie-parser";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

express()
    .use(cookieParser())
    .use(eStatic("front/build"))
    .get("/", function (req, res) {
        res.cookie("alabala", "portocala");
        res.sendFile(join(__dirname, "./front/build/index.html"));
    })
    .get("/cookies", (req, res) => res.json({ cookies: req.cookies }))
    .listen(8080);
