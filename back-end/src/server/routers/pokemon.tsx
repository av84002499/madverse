getPokemonArray: publicProcedure
  .input(z.array(z.string()))
  .query(async ({ input }) => {
    const pokemons = await prisma.pokemon.findMany({
      where: { name: { in: input } },
    });
    return pokemons.map(pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types,
      sprite: pokemon.sprite,
    }));
  }),
