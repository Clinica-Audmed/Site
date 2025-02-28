"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Foto from '../../../public/servicosfts/pcmso.jpg'

export default function PcmsoService(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'square',
      }; 
    return(
        <>
        <Navbar/>
         <section id="page-title">
        <div className="sobre">
        <h1 className="container md:m-0 lg:m-0">Serviços</h1>
        <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
               <Link href="/servicos">Serviços</Link> 
            </li>
            <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                PCMSO - Programa de Controle Médico de Saúde Ocupacional
            </li>
        </ol>
        </div>
    </section>
    <main id="descricao">            
        <section id="content" className='mb-20'>
            <div className="content-padding">
                <div className="container roww clearflix">
                    <div className="col-md-2 md:-ml-8 lg:-ml-8">
                        <h4 className='outros font-bold text-xl'>Outros Serviços:</h4>
                        <div className="outrosservice">
                            <ul style={listStyle} className="text-sm">
                                <li className="mb-2">
                                    <Link href="/servicos/ltcat" className="text-black">LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/servicos/pgr" className="text-black">PGR - Programa de Gerenciamento de Riscos</Link>
                                </li>
                                <li>
                                    <Link href="/servicos/esocial" className='text-black'>
                                    ESocial - Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 ml-2">
                        <div className="semmarginbotton">
                            <div className="clearflix">
                                <div className="relative mt-0">
                                <div className="entry-image alignleft">
                                <Image src={Foto} alt="" width={500}/>
                                </div>
                                <div>O Programa de Controle Médico de Saúde Ocupacional (PCMSO) tem como objetivo a promoção e a preservação da saúde dos trabalhadores. Este programa tem caráter de prevenção, rastreamento e diagnóstico precoce dos agravos à saúde relacionados ao trabalho, inclusive de natureza subclínica, além da constatação da existência de casos de doenças profissionais ou danos irreversíveis à saúde dos trabalhadores. </div>                            
                                <div><br/></div>    
                                <div>Apesar de ser uma obrigação legal para proteção dos empregados, o programa serve também aos empregadores, pois um PCMSO bem elaborado e administrado é uma ferramenta vital contra passivos trabalhistas e responsabilidade cível e criminal dos administradores e proprietários das empresas. 
                                </div>    
                                <div><br/></div>
                                <div>
                                De acordo com a Norma Regulamentadora (NR-7), que normatiza este programa, tem obrigação de implantar o Programa de Controle Médico de Saúde Ocupacional – PCMSO todos os empregadores e instituições que admitam trabalhadores como empregados, independente mente do número de colaboradores contratados.</div>  
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>       
            </div>
           </section>
           <Final/>
           </main>
           
        </>
    )

}