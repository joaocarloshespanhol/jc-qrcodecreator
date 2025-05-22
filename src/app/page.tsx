'use client'

import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center bg-linear-to-t from-[#00082B] to-[#3F81E8] p-12 pt-12">
          <h1 className='text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3F81E8]'>OLÁ, SEJA BEM VINDO! </h1>
              <span className="text-3xl mt-20 font-extrabold text-white text-center">Crie QR codes dinâmicos, ilimitados e de forma prática.</span>
                <div className="bg-white w-auto h-auto mt-10 rounded-xl">
                  <div className="flex flex-col">

                  </div>
                </div>

                  <footer className="mt-20 flex gap-4">
                    <span className="mt-2">Criado por</span>
                      <Link
                        href="https://www.jcdesenvolvedorweb.com.br"
                        target="_blank" 
                        rel="noopener noreferrer">

                          <Image
                              src="/logo.png"
                              alt="Logotipo JC Desenvolvedor Web"
                              width={100}
                              height={100} />
                        </Link>
                  </footer>
    </main>
  );
}
