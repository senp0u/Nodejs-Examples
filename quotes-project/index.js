const express = require("express");
const server = express();
const { PORT } = require("./config");
const { HomeRoutes, QuotesRoutes } = require("./routes");
const { NotFoundMiddleware } = require("./middlewares");

server.use(express.static("./public"));
server.use(express.json());

server.use("/", HomeRoutes); //-> Para todas las rutas / en home 
server.use("/quotes", QuotesRoutes);
server.use(NotFoundMiddleware) //-> Si no encontro la ruta solicitada

server.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});