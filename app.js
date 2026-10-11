const http = require("http");
const routeHandler = require("./routes");

const PORT = process.env.PORT || 3000;
const server = http.createServer(routeHandler);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
