import { Router } from "express";
import { db } from "./db";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const forums = await db.forum.findMany({
      orderBy: { createdAt: "asc" },
      select: {
        name: true,
        forumId: true,
      }
    });
    res.status(200).json({ forums });
  } catch (e) {
    res.status(500).json({ error: "Internal Error" });
  }
});

export default router