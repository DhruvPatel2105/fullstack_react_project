const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const fs = require("fs");
require("./model/db");

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./schema.graphql", "utf-8"),
  resolvers,
});
const app = express();

app.use(express.static("./public"));
server.start().then(() => server.applyMiddleware({ app, path: "/graphql" }));

app.get("/", function (req, res) {
  res.render("index.html");
});

app.listen(4000, function () {
  console.log("WebServer is start");
});
