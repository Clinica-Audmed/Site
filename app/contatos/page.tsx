"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Whatts from '../../public/whatts.png'
import Gmail from '../../public/gmail.png'
import Insta from '../../public/instagram.png'
import Facebook from '../../public/facebook.png'
import Telefone from '../../public/telefone.png'
export default function Contatos(){
       return(
        <>
        <Navbar/>
        <section id="page-title">
            <div className="sobre">
            <h1 className="container">
                Contato
            </h1> 
            <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                    Contato 
                </li>
            </ol>
            </div>
        </section>
        <main>
        <section id="mapa">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.2729771629397!2d-47.21388598955873!3d-23.087100979041494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4a33a21482d%3A0x71d7f3a923ec9ba4!2sCl%C3%8Dnica%20AUDMED!5e0!3m2!1spt-BR!2sbr!4v1698430011245!5m2!1spt-BR!2sbr" z-index="3" width="100%" height="470" className="border-none" loading="lazy"></iframe>
                </div>
            </section>
            <section id="contatos" className="container " >
                <div className="titulo">
                    <h1>ENTRE EM CONTATO CONOSCO</h1>
                </div>
                <div className='roww'>
  <div className="max-w-xs max-h-96 mt-20 md:mr-20 md:ml-0 lg:ml-0 lg:mr-20 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
     
        <Image className="rounded-t-lg h-52 w-52 mx-auto " src={Whatts} alt="" />
    <div className="p-5">
        
            <h5 className="mb-2 -mt-11 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Envie uma mensagem via WhatsApp</h5>
        
        <Link href="https://wa.me/5519992492716" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 ml-7 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Enviar Mensagem
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
<div className="max-w-xs max-h-96 mt-20 md:mr-20 md:ml-0 lg:ml-0 lg:mr-20 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
     
        <Image className="rounded-t-lg h-52 w-52 mx-auto " src={Gmail} alt=""  />
    
    <div className="p-5">
         
            <h5 className="mb-2 -mt-8 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Entre em contato conosco via Gmail</h5>
        
        <Link href="mailto:adm@audmed.com.br" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 ml-11 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Enviar Gmail
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
<div className="max-w-xs max-h-96 mt-20 md:mr-20 md:ml-0 lg:ml-0 lg:mr-20 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
     
        <Image className="rounded-t-lg mt-2 h-52 w-52 mx-auto " src={Telefone} alt=""  />
    <div className="p-5">
            <h5 className="mb-2 -mt-8 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Nosso telefone para contato</h5>
        <Link href={'tel:+55193894-5066'} rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 ml-10 mt-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Realizar ligação
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
<div className="max-w-xs max-h-96 mt-20 mb-20 md:mr-20 md:ml-0 lg:ml-0 lg:mr-20 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <Image className="rounded-t-lg mt-2 h-52 w-52 mx-auto " src={Insta} alt=""  />
    <div className="p-5">
            <h5 className="mb-2 -mt-8 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Nos siga no Instagram</h5>
        <Link href="https://www.instagram.com/audmed.indaiatuba/" target='_blank' className="inline-flex items-center px-3 py-2 ml-9 mt-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visualizar Perfil
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
<div className="max-w-xs max-h-96 mb-20 mt-20 md:mr-20 md:ml-0 lg:ml-0 lg:mr-20 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <Image className="rounded-t-lg mt-2 h-52 w-52 mx-auto " src={Facebook} alt=""  />
    <div className="p-5">
            <h5 className="mb-2 -mt-8 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Nos siga no Facebook</h5>
        <Link href="https://www.facebook.com/clinicaaudmed1" target='_blank' rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 ml-9 mt-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visualizar Perfil
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

</div>
</section>
        </main>
        <Final/>
        </>
    )
}

