"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Cipa from '../../../public/Cipa.jpg'

export default function Treinamento9(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'square',
      }; 
    return(
        <>
        <Navbar/>
        <section id="page-title">
        <div className="sobre">
            <h1 className="container">Treinamentos</h1>
            <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
               <Link href="/treinamentos">Treinamentos</Link> 
            </li>
            <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block"> 
                Comissão Interna de Prevenção de Acidentes - CIPA              
                  </li>
            </ol>
            </div>
    </section>
    <main id="descricao">            
   <section id="content" className='mb-0'>
    <div className="content-padding">
        <div className="container roww clearflix">
            <div className="col-md-2 md:-ml-8 lg:-ml-8">
                <h4 className='font-bold text-xl'>Outros Treinamentos:</h4>
                <div className="outrosservice">
                <ul style={listStyle} className="text-sm">
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-06-Equipamento-de-Protecao-Individual" className='text-black'>
                        Equipamento de Proteção Individual(EPI)</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-10-Seguranca-em-Instalacoes-Eletricas" className='text-black'>
                        Segurança em Instalações Elétricas</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-11-Operacao-em-Empilhadeira" className='text-black'>
                        Operação em Empilhadeira</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-11-Ponte-Rolante" className='text-black'>
                        Ponte Rolante</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-12-Adequacao-de-Maquinas" className='text-black'>
                        Adequação de Máquinas</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-13-Vasos-de-Pressao" className='text-black'>
                        Vasos de Pressão</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-17-Ergonomia-AGP-AET" className='text-black'>
                        Ergonomia / AGP / AET</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-18-Seguranca-e-Saude-no-Trabalho-na-Industria-da-Construcao" className='text-black'>
                        Segurança e Saúde no Trabalho na Industria da Construção</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-23-Brigada-de-Incendio" className='text-black'>
                        Brigada de Incêndio</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-33-Espaco-Confinado" className='text-black'>
                        Espaço Confinado</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-35-Seguranca-do-Trabalho-em-Altura" className='text-black'>
                        Segurança do Trabalho em Altura</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10 ml-4 md:ml-8 lg:ml-8">
                <div className="semmarginbotton">
                    <div className="clearflix">
                        <div className='relative mt-0'>
                        <div className="entry-image alignleft">
                        <Image src={Cipa} alt=""/>
                        </div>
                        <div><span className='font-bold '>
                        DEFINIÇÃO
                        </span></div>
                        <div><br/></div>
                        <div>A NR 05 é uma norma regulamentadora que trata especificamente de todos os aspectos relacionados à Comissão Interna de Prevenção de Acidentes – CIPA. Dessa forma, essa NR estipula todas as regras, condições e demais detalhes que devem ser obedecidos pelas empresas e trabalhadores envolvidos na CIPA.</div>       
                        <div><br/></div>    
                        <div><span className='font-bold '>
                        OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>Identificar perigos existentes no ambiente de trabalho capazes de comprometer a segurança e causar danos à integridade física e à saúde do trabalhador, sugerindo medidas de controle e propondo soluções e implementando as medidas solicitadas. </div>
                        <div><br/></div>
                        <div><span className='font-bold'>
                        PÚBLICO ALVO
                        </span></div>
                        <div><br/></div>
                        <div>Todas as empresas que possuem trabalhadores contratados pela CLT (Consolidação das Leis Trabalhistas). Caso a empresa não tenha enquadramento para obrigatoriedade, deverá treinar um designado.</div>
                        <div><br/></div>
                        <div><span className='font-bold'>
                        PROGRAMA (PREVISTO NA NR 05)
                        </span></div>
                        <div><br/></div>
                        <ul style={listStyle}>
                        <li className='-ml-4'>Estudo do ambiente, das condições de trabalho, bem como dos riscos originados do processo produtivo;</li>
                        <li className='-ml-4'>Noções sobre acidentes e doenças relacionadas ao trabalho decorrentes das condições de trabalho e da exposição aos riscos existentes no estabelecimento e suas medidas de prevenção;</li>
                        <li className='-ml-4'>Metodologia de investigação e análise de acidentes e doenças relacionadas ao trabalho;</li>
                        <li className='-ml-4'>Princípios gerais de higiene do trabalho e de medidas de prevenção dos riscos;</li>
                        <li className='-ml-4'>Noções sobre as legislações trabalhista e previdenciária relativas à segurança e saúde no trabalho;</li>
                        <li className='-ml-4'>Noções sobre a inclusão de pessoas com deficiência e reabilitados nos processos de trabalho;</li>
                        <li className='-ml-4'>Organização da CIPA e outros assuntos necessários ao exercício das atribuições da Comissão;</li>
                        <li className='-ml-4'>Prevenção e combate ao assédio sexual e a outras formas de violência no trabalho. (</li>
                        </ul>
                        <div><br/></div>
                        <div><span className='font-bold '>
                        CAMPO DE APLICAÇÃO
                        </span></div>
                        <div><br/></div>
                        <div>
                        As organizações e os órgãos públicos da administração direta e indireta, bem como os órgãos
                        dos Poderes Legislativo, Judiciário e Ministério Público, que possuam empregados regidos pela
                        Consolidação das Leis do Trabalho - CLT, devem constituir e manter CIPA.
                        </div>
                        <div>Nos termos previstos em lei, aplica-se o disposto nesta NR a outras relações jurídicas de trabalho.</div>
                        <div>  
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
        </div>       
    </div>
    </div>
   </section>
        <Final/>
        </main>
        </>
    )
}