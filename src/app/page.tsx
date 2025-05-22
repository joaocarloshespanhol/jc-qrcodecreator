'use client'

import Image from 'next/image';
import Link from 'next/link';
import { QRCodeCanvas} from 'qrcode.react';
import { FaUpload } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center bg-linear-to-t from-[#00082B] to-[#3F81E8] p-12 pt-12">
          <span className='text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3F81E8]'>OLÁ, SEJA BEM VINDO! </span>
              <span className="text-3xl mt-20 font-extrabold text-white text-center">Crie QR codes dinâmicos, ilimitados e de forma prática.</span>
                <div className='flex flex-col md:flex-row bg-white w-auto h-auto mt-10 rounded-xl p-12 pt-12 gap-12'>
                  <div className="flex-col">
                      <input
                        type="text"
                        placeholder="Digite seu link"
                        className="bg-black rounded-sm text-center p-1"
                        
                        />
                        <p className='text-black'>
                          Pré visualização QR Code
                        </p>

                        <QRCodeCanvas
                            value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
                            title={"Title for my QR Code"}
                            size={188}
                            bgColor={"#ffffff"}
                            fgColor={"#000000"}
                            level={"L"}
                            imageSettings={{
                              src: "https://static.zpao.com/favicon.png",
                              x: undefined,
                              y: undefined,
                              height: 24,
                              width: 24,
                              opacity: 1,
                              excavate: true,
                            }}
                          />
                  </div>
                      <div className="flex flex-col bg-white lg:w-96 md:w-56">
                            <div className='text-black text-2xl font-semibold'>
                              Cores
                            </div>
                              <div className='flex gap-4'>
                                  <div>
                                    <h2 className='text-black'>
                                      Cor Principal
                                    </h2>
                                    <input
                                      type="color"
                                      className="w-full"
                                    />
                                  </div>
                                  <div>
                                    <h2 className='text-black'>
                                      Cor Principal
                                    </h2>
                                    <input
                                      type="color"
                                      className="w-full"
                                    />
                                  </div>
                              </div>
                            <div className='flex flex-col text-black text-2xl font-semibold'>
                              Logo
                            </div>
                              <div className='flex flex-col'>
                                <h2 className='text-black mb-4'>
                                  Adicione sua logo
                                </h2>
                                <div className='flex flex-col'>
                                  <label
                                    htmlFor="logo"
                                    className="cursor-pointer bg-black text-white text-center px-6 py-2 rounded-md hover:bg-gray-800 gap-2 flex"
                                  >
                                    <FaUpload
                                    className='mt-1'
                                    width={200}
                                    height={200} 
                                    />
                                    Selecione uma imagem
                                  </label>
                                  
                                  <input
                                    type="file"
                                    id="logo"
                                    accept="image/*"
                                    className="hidden"
                                  />
                                </div>
                              </div>
                              <div className='flex flex-col'>
                                <h2 className='text-black mt-4'>
                                  Tamanho da logo
                                </h2>
                                  <button className='bg-black text-white'>
                                    Escolher arquivo
                                  </button>
                              </div>
                          
                              <button className='bg-black mt-4 w-full'>
                                Baixar Qr Code
                              </button>
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
