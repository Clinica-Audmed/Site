"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nr18 from '../../../public/NR18.jpg'

export default function Treinamento7(){
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
            Segurança e Saúde no Trabalho na Industria da Construção
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
                <li className="mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 ">
                        <Link href="/treinamentos/nr-05-Comissao-Interna-de-Prevencao-de-Acidentes-e-Assedio" className="text-black"><div>
                        Comissão Interna de Prevenção de Acidentes e Assédio</div></Link>
                        </li>
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
                        <div className="relative mt-0">
                        <div className="entry-image alignleft">
                        <Image src={Nr18} alt=""/>
                        </div>
                        <div><span className='font-bold'>
                            OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>Esta Norma Regulamentadora - NR tem o objetivo de estabelecer diretrizes de ordem administrativa, de planejamento e de organização, que visam à implementação de medidas de controle e sistemas preventivos de segurança nos processos, nas condições e no meio ambiente de trabalho na indústria da construção.</div>
                        <div><br/></div>
                        <div><span className='font-bold mt-5'>
                        PÚBLICO ALVO 
                        </span></div>    
                        <div><br/></div>    
                        <div>Diretores, Gerentes, Engenheiros, Supervisores, Técnicos e Profissionais interessados em conhecer as normas e técnicas para o trabalho na Indústria da Construção.</div>    
                        <div><br/></div>
                        <div>  
                            <span className='font-bold'>PROGRAMA(PREVISTO NA NR-18)</span>
                        </div>
                        <div>   
                            <br/>
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Informações sobre as condições e meio ambiente de trabalho;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Riscos inerentes a sua função;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Uso adequado dos Equipamentos de Proteção Individual – EPI;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Informações sobre os Equipamentos de Proteção Coletiva – EPC, existentes no canteiro de obra
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Procedimento de Emergência;
                        </div>     
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Recomendações Gerais;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Recomendações de Segurança.
                        </div> 
                        <div><br/>
                        </div>              
                </div>
            </div>
            <div className="clear"></div>
        </div>       
    </div>
   </div>
   </div>
        </section>
        <Final/>
        </main>
        </>
    )
}