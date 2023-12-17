import * as dotenv from "dotenv";

import express from "express";
import { serve } from "inngest/express";

dotenv.config();

import { functions, inngestClient } from "./inngest";

const app = express();

app.use(express.json());

app.use(
  "/api/inngest",
  serve({
    client: inngestClient,
    functions,
  })
);

const PORT = 8002;
app.listen(PORT, () => {
  console.log(`✅ Server started on localhost:${PORT}`);
});
