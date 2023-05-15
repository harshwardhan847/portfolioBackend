import Blog from "../models/blog.js";
import express from "express";
const router = express.Router();

router.get("/blogs", async (req, res) => {
  console.log("blogs");
  const blogs = await Blog.find();
  res.json(blogs);
});
router.post("/blog/new", async (req, res) => {
  const blog = new Blog(req.body);
  console.log(req.body);
  await blog.save();
  res.send("success");
});
router.delete("/blog/delete", async (req, res) => {
  await Blog.findByIdAndDelete(req.body.id);
  res.send("success");
});

router.put("/blog/update", async (req, res) => {
  await Blog.findByIdAndUpdate(req.body.id, req.body);
  res.send("success");
});

export default router;
