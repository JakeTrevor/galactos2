import { sampleArticles, sampleAuthors } from "prisma/sampleData";
import slugify from "~/helpers/slugify";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const adminRouter = createTRPCRouter({
  populateDB: publicProcedure.mutation(async ({ ctx }) => {
    console.log("wahoo!");
    for (let each of sampleAuthors) {
      await ctx.prisma.author.create({
        data: { ...each, slug: slugify(each.name) },
      });
      console.log("created author");
    }

    let a = await ctx.prisma.author.findFirstOrThrow({
      where: {
        name: "Humphrey Appleby",
      },
    });

    for (let each of sampleArticles) {
      await ctx.prisma.article.create({ data: { ...each, authorId: a.id } });
      console.log("Created article");
    }

    return true;
  }),
});
