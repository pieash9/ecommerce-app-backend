import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/errors";
import { SignupSchema } from "./schema/users";

const app: Express = express();

app.use(express.json());

app.use("/api", rootRouter);

export const prismaClient = new PrismaClient().$extends({
  query: {
    user: {
      create({ args, query }) {
        args.data = SignupSchema.parse(args.data);
        return query(args);
      },
    },
  },
});

app.use(errorMiddleware);

app.listen(PORT, () => console.log("App is running on", PORT));
