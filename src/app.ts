import express from 'express';
import dotenv from 'dotenv';
import { router } from './lib/routes/v1';


dotenv.config(); // Load environment variables

const app = express();
// app.use(clerkAuthMiddleware);
app.use("/api/v1", router)

export default app