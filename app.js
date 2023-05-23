const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

const appRouter = require("./router/routes");
const notFound = require("./middlewares/notFound");

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// other middlewares
app.use("/api/v1/app", appRouter);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`app live at http://localhost:${PORT}`);
});

// We can access these data from an url using express
//  1. path params: /:id -> req.params.id
//  2. query params : ?search=abc+def&sort=asc -> req.query
//  3. body params(payload) :  JSON,XML,Text,Form,Form-encode,Binary,etc ->req.body

// Best Practices:

// Usually the content body is used for the data that is to be uploaded/downloaded to/from the server
// and the query parameters are used to specify the exact data requested.For example when you upload a
// file you specify the name, mime type, etc.in the body but when you fetch list of files you can use the
// query parameters to filter the list by some property of the files.In general, the query parameters are
// property of the query not the data. (ref: https://stackoverflow.com/questions/25385559/rest-api-best-practices-args-in-query-string-vs-in-request-body)

// For more: https://en.wikipedia.org/wiki/Query_string
