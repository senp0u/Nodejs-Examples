const server = require("./server");
const { PORT, MONGO_URI } = require("./config")

server.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});