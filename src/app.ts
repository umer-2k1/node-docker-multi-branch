import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const BRANCH = process.env.BRANCH_NAME || "unknown";

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "Node app running",
    branch: BRANCH,
    port: PORT,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ${BRANCH} running on port ${PORT}`);
});

export default app;
