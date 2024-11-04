import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().min(1000),
  MONGO_CONNECT_STRING: z.string(),
});

// Validate `process.env` against our schema
const env = envSchema.parse(process.env);

// Export the result so we can use it in the project
export default env;
