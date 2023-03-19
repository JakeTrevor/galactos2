import { z } from "zod";
import unslugify from "~/helpers/unslugify";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authorRouter = createTRPCRouter({
  getBySlug: publicProcedure.input(z.string()).query(({ ctx, input: slug }) => {
    return ctx.prisma.author.findFirstOrThrow({
      where: {
        slug: slug,
      },
      // TODO see if we can limit this
      include: {
        articles: true,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.author.findMany();
  }),
});
