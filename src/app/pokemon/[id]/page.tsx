import Image from "next/image";

async function getData(id: string) {
  const response = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`);
  return response.json();
}

export default async function DetailPokemon({
  params,
}: {
  params: { id: string };
}) {
  let linkImage = "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev";
  const pokemon = await getData(params.id);

  return (
    <div className="p-10 m-5 static">
      <h1 className="text-5xl font-mono font-bold">{pokemon.name}</h1>
      <Image
        src={`${linkImage}/${pokemon.id}.webp`}
        alt={pokemon.name}
        width={400}
        height={100}
        className=""
      />
      <p>- Genus : {pokemon.genus}</p>
      <p>- Description : {pokemon.description}</p>
      <p>- Types : {pokemon.types}</p>
    </div>
  );
}
