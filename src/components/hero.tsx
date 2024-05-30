import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="container my-40 flex items-center justify-between">
      <div>
        <div className="mb-7 flex flex-col gap-2">
          <h3 className="text-7xl font-bold tracking-wide">I'm Syafa Dwi Devita</h3>
          <p className="text-2xl tracking-wide">Peserta Talenthub Batch 13</p>
          <h6>Berikut ini akan ditampilkan Data Pokemon. Klik tombol dibawah ini !!!</h6>
        </div>
        <Button><a href="/pokemon">Data Pokemon</a></Button>
      </div>
      <div>
    <Image src="/me.png" alt="me" width={500} height={500} />
      </div>
    </section>
  );
}

export default Hero;