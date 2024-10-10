import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { prisma } from "../prisma";

export const pokemonRouter = router({
  getPokemon: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findFirst({
        where: { name: input },
      });
      if (!pokemon) throw new Error("Pokemon not found");
      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        sprite: pokemon.sprite,
      };
    }),
});
