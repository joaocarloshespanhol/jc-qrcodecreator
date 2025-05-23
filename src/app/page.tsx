'use client'

import { QRCodeCanvas } from 'qrcode.react';
import { FaUpload } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRef } from 'react';

export default function Home() {
  

  const [inputUrl, setinputUrl] = useState<string>('');
  const [fgColor, setFgColor] = useState<string>('#00082B');
  const [bgColor, setBgColor] = useState<string>('#FFFFFF');
  const [logoUrl, setLogoUrl] = useState<string>('/fav.png');
  const [qrLogoSize, setqrLogoSize] = useState<number>(38);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handleLogoSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.result) {
            setLogoUrl(reader.result as string);
          }
        }
        reader.readAsDataURL(file);
    }
  }
  
    const handleQrDownload = () => {
      if (!qrCodeRef.current) return;
        const canvas = qrCodeRef.current.querySelector("canvas");
          if (!canvas) return;

          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "qrcode.png";
          link.click();

    }

  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-t from-[#00082B] to-[#3F81E8] px-4 py-8 md:px-12">
      <span className="text-4xl md:text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3F81E8]">
        OLÁ, SEJA BEM VINDO!
      </span>

      <span className="text-xl md:text-3xl mt-10 md:mt-20 font-extrabold text-white text-center">
        Crie QR codes dinâmicos, ilimitados e de forma prática.
      </span>

      <div className="flex flex-col md:flex-row bg-white w-full max-w-5xl mt-10 rounded-xl p-6 md:p-12 gap-8">

        <div className="flex flex-col flex-1">
          <p className='text-black'>Digite seu link</p>
          <input
            type="text"
            placeholder="Digite o link aqui"
            value={inputUrl}
            onChange={(e) => setinputUrl(e.target.value)}
            className="bg-zinc-200 text-black rounded-md text-center p-2 w-full"
          />
          <p className="text-black mt-4 mx-auto">Pré-visualização QR Code</p>
            <div ref={qrCodeRef}
              className="mx-auto">
                <QRCodeCanvas
                  value={inputUrl}
                  title={inputUrl}
                  size={250}
                  bgColor={bgColor}
                  fgColor={fgColor}
                  level="L"
                  imageSettings={{
                    src: logoUrl,
                    x: undefined,
                    y: undefined,
                    height: qrLogoSize,
                    width: qrLogoSize,
                    opacity: 1,
                    excavate: true,
                    crossOrigin: 'anonymous'
                  }}
                />
            </div>
        </div>


        <div className="flex flex-col bg-white w-full md:w-56 lg:w-96">
          <div className="text-black text-2xl font-semibold mb-4">Cores</div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h2 className="text-black mb-1">Cor Principal</h2>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 rounded-md bg-zinc-200 border border-zinc-400 hover:border-zinc-200 transition" />
            </div>
            <div className="flex-1">
              <h2 className="text-black mb-1">Cor Secundária</h2>
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="w-full h-10 rounded-md bg-zinc-200 border border-zinc-400 hover:border-zinc-200 transition"  />
            </div>
          </div>

          <div className="text-black text-2xl font-semibold mt-6 mb-2">Logo</div>
          <div className="flex flex-col">
            <h2 className="text-black mb-2">Adicione sua logo</h2>
            <label
              htmlFor="logo"
              className="cursor-pointer bg-zinc-300 text-black text-center px-6 py-2 rounded-md hover:bg-zinc-200 flex items-center gap-2"
            >
              <FaUpload />
              Selecione uma imagem
            </label>
              <input
                type="file"
                onChange={handleLogoSelection}
                id="logo"
                accept="image/*"
                className="hidden" />
          </div>

          <div className="flex flex-col mt-4">
            <h2 className="text-black mb-2">Tamanho da logo</h2>
            <select
              value={qrLogoSize}
              onChange={(e) => setqrLogoSize(Number(e.target.value))}
              className="bg-zinc-300 text-black px-4 py-2 rounded-md hover:bg-zinc-200">
              Escolher tamanho
              <option value="18">18px x 18px</option>
              <option value="38">38px x 38px</option>
              <option value="47">47px x 47px</option>
              <option value="56">56px x 56px</option>
            </select>
          </div>

          <button
            onClick={handleQrDownload}
            className="cursor-pointer bg-[#2e74e4] text-white px-4 py-4 rounded-md hover:bg-[#3c80ee] mt-6 w-full">
            <span className="text-lg font-semibold">Baixar QR Code</span>
          </button>
        </div>
      </div>

      <footer className="mt-16 flex flex-col md:flex-row items-center gap-4">
        <span className="text-white">Criado por</span>
        <Link
          href="https://www.jcdesenvolvedorweb.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.png"
            alt="Logotipo JC Desenvolvedor Web"
            width={100}
            height={100}
          />
        </Link>
      </footer>
    </main>
  );
}
