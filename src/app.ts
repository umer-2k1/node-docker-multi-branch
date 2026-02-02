import express from "express";

const app = express();
// const PORT = process.env.PORT || 3000;
// const BRANCH = process.env.BRANCH_NAME || "unknown";
const PORT = 3001;
const BRANCH = "feat/auth";

app.use(express.json());

app.get("/health", (_, res) => {
  res.json({
    message: `Node app running on ${BRANCH}`,
    branch: BRANCH,
    port: PORT,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ${BRANCH} running on port ${PORT}`);
});

export default app;
