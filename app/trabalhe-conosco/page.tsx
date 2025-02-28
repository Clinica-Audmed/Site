"use client"
import Final from "../components/final";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import func from '../../public/equipe.avif';
import img1 from '../../public/img1.avif';
export default function TrabalheConosco(){

    return(
        <>
        <Navbar/>
    <section id="page-title">
        <div className="sobre">
        <h1 className="container">Trabalhe Conosco</h1>
       <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                Trabalhe Conosco
            </li>
        </ol>
        </div>
    </section>   
    <main id="descricao">
    <section className="titulo">
            <h1>Trabalhe na AUDMED</h1>
            <span>Estamos em busca de novos colaboradores.</span>
    </section>  
    <section className="container md:flex">
        <div className="descritivos col-md-6">
            <h3 className="text-lg font-semibold mb-3 leading-6 ml-4 md:ml-0 lg:ml-0 md:mt-2">Nosso Objetivo</h3>
            <p className="text2 ml-4 md:ml-0 lg:ml-0 mr-4 md:mr-0 lg:mr-0 ">Na Clínica Audmed, estamos constantemente em busca de novos talentos para se juntarem à nossa equipe dedicada a promover a saúde e a segurança no ambiente de trabalho, com o objetivo de assegurar a integridade física dos colaboradores, com o máximo de excelência.</p>
        </div>
        <div className="descritivos col-md-4 ">
            <Image src={func} alt="" className="h-52 -mt-14 sm:-mt-2" priority/>
        </div>
    </section>
    <section className="container md:flex">
    <div className="descritivos col-md-4 ">
            <Image src={img1} alt="" className="h-52 -mt-14 sm:-mt-2" priority/>
        </div>
        <div className="descritivos col-md-6">
            <h3 className="text-lg font-semibold mb-3 leading-6 ml-4 md:ml-0 lg:ml-0 md:mt-2">Como se candidatar?</h3>
            <p className="text2 ml-4 md:ml-0 lg:ml-0 mr-4 md:mr-0 lg:mr-0 ">Para realizar sua candidatura, você deve enviar seu currículo no email abaixo (faça o envio do seu curriculo em arquivo PDF).</p>
            <Link href="mailto:rh@audmed.com.br" ><p className="underline -mt-4 ml-4 md:ml-0 hover:text-blue-800" >rh@audmed.com.br</p></Link>
        </div>
    </section>
       <Final/>
    </main>
        </>
    )
}