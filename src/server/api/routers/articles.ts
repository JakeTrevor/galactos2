import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const articleRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.string())
    .query(({ ctx, input: articleID }) => {
      return ctx.prisma.article.findUniqueOrThrow({
        where: {
          id: articleID,
        },
        include: {
          author: true,
        },
      });
    }),

  getByAuthor: publicProcedure
    .input(z.string())
    .query(({ ctx, input: authorID }) => {
      // TODO consider limiting number of articles returned here
      return ctx.prisma.article.findMany({
        where: {
          authorId: authorID,
        },
        orderBy: {
          date: "desc",
        },
      });
    }),

  getMostRecent: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.article.findMany({
      orderBy: {
        // TODO im not sure if this is correct...
        date: "desc",
      },
    });
  }),
});
