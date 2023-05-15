import express from "express";
import db from "./db.js";
import blogs from "./routes/blogs.js";
db();
const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  res.send("hello");
});

app.use("/api", blogs);
app.listen(process.env.PORT || 3080, () =>
  console.log("Listening on port 3080")
);
