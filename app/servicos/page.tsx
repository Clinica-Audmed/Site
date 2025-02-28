"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import Image from 'next/image';
import Servicos from '../../public/serviços.png'
import Link from 'next/link';

export default function Serviços(){
return(
    <>
    <Navbar/>
    <section id="page-title">
        <div className="sobre">
        <h1 className="container">Serviços</h1>
        <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                Serviços
            </li>
        </ol>
        </div>
    </section>
    <main id="descricao" >            
        <section id="content">
            <div className="titulo title">
            <h1>SERVIÇOS</h1>
            <span>Oferecemos diversos serviços em medicina e segurança do trabalho para <br/> melhor atender nossos clientes. Conheça!</span>
        </div>
    <div className="container">
        <div className="roww">
        <div className="col-md-4 mt-2 md:mt-0">
            <div className="feature-box fbox-center fbox-effect">
            <Link href="/servicos/pcmso"><Image className="img" src={Servicos} alt=""/></Link>
            <Link href="/servicos/pcmso"><h3 className="h3desc">PCMSO - PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL</h3></Link>
            <p>O Programa de Controle Médico de Saúde Ocupacional (PCMSO) tem como objetivo a promoção e a preservação da saúde dos trabalhadores</p>
        </div>      
    </div>
        <div className="col-md-4 mt-2 md:mt-0">
            <div className="feature-box fbox-center fbox-effect">
            <Link href="/servicos/pgr"><Image className="img" src={Servicos} alt=""/></Link>
            <Link href="/servicos/pgr"><h3 className="h3desc">PGR - PROGRAMA DE GERENCIAMENTO DE RISCOS</h3></Link>
            <p>O Programa de Gerenciamento de Riscos (PGR) é um conjunto de ações visando à preservação da saúde e da integridade física dos trabalhadores.</p>
        </div> 
    </div>     
        <div className="col-md-4 mt-2 md:mt-0">
            <div className="feature-box fbox-center fbox-effect">
            <Link href="/servicos/ltcat"><Image className="img" src={Servicos} alt=""/></Link>
            <Link href="/servicos/ltcat"><h3 className="h3desc">LTCAT - LAUDO TÉCNICO DAS CONDIÇÕES AMBIENTAIS DE TRABALHO</h3></Link>
            <p>O LTCAT (Laudo Técnico de Condições Ambientais do Trabalho) é um documento com fins previdenciários, elaborado por Engenheiro de Segurança do Trabalho.</p>
        </div>  
    </div>
    <div className="col-md-4 mt-5 md:mt-0"> 
            <div className="feature-box fbox-center fbox-effect ">
            <Link href="/servicos/esocial"><Image className="img" src={Servicos} alt=""/></Link>
            <Link href="/servicos/esocial"><h3 className="h3desc">ESocial - Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas</h3></Link>
            <p>É um projeto do governo federal que busca digitalizar e unificar o envio das informações fiscais, previdenciárias e trabalhistas das empresas.</p>
        </div>      
    </div>
        
    </div></div>
    </section>    
    <Final/>
    </main>
    </>
)
}