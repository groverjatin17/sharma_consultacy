import express from "express";

import { getJobs } from "../controllers/jobs.js";

const router = express.Router();

router.get("/", getJobs);
// router.post('/', createPost);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;
