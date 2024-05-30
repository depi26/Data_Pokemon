import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://pokeapi.deno.dev/pokemon");
  return response.json();
}

export default async function PokemonPage() {
  let linkImage = "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev";
  const pokemons = await getData();

  return (
    <section className="p-6 m-3 flex flex-row flex-wrap gap-4">
      {pokemons.map((item: any) => (
        <div className="w-60 border-2 border-indigo-900" key={item.id}>
          <Link href={`/pokemon/${item.id}`}>
            <Image
              src={`${linkImage}/${item.id}.webp`}
              alt={item.name}
              width={300}
              height={100}
              className="h-50 object-cover"
            />
            <h2 className="text-center text-xl font-mono">{item.name}</h2>
          </Link>
        </div>
      ))}
    </section>
  );
}
