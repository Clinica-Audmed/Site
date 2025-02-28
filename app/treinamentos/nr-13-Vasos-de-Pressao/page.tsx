"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Nr13 from '../../../public/NR13.jpg'

export default function Treinamento4(){
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
        Vasos de Pressão          
        </li>
            </ol>
            </div>
    </section>
    <main id="descricao">            
   <section id="content"  className="mb-0">
    <div className="content-padding">
        <div className="container roww clearflix">
            <div className="col-md-2 md:-ml-8 lg:-ml-8">
                <h4 className='font-bold text-xl ml-3'>Outros Treinamentos:</h4>
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
                        <Image src={Nr13} alt=""/>
                        </div>
                        <div><span className='font-bold '>
                        OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>O objetivo desta Norma Regulamentadora - NR é estabelecer requisitos mínimos
                            para a gestão da integridade estrutural de caldeiras, vasos de pressão, suas tubulações
                            de interligação e tanques metálicos de armazenamento nos aspectos relacionados à
                            instalação, inspeção, operação e manutenção, visando a segurança e saúde dos
                            trabalhadores.
                        </div>       
                        <div>
                            <br/>
                        </div>
                        <div><span className='font-bold '>
                        PÚBLICO ALVO
                        </span></div>
                        <div><br/></div> 
                        <div>Operadores de Cadeiras, Operadores de Unidades de Processos, técnicos, engenheiros, gerentes e demais profissionais que atuam nas áreas de projeto, fabricação, montagem, operação, manutenção e inspeção de vasos e caldeiras.</div>    
                        <div><br/></div>    
                        <div>  
                            <span className='font-bold'>PROGRAMA (PREVISTO NA NR 13)</span>
                        </div>
                        <ul style={listStyle}>
                        <li className='-ml-4'>Pressão atmosférica;</li>
                        <li className='-ml-4'>Pressão Interna de um vaso;</li>
                        <li className='-ml-4'>Pressão manométrica, pressão relativa e pressão absoluta;</li>
                        <li className='-ml-4'>Unidades de pressão;</li>
                        <li className='-ml-4'>Calor e temperatura;</li>
                        <li className='-ml-4'>Noções gerais: o que é calor, o que é temperatura;</li>
                        <li className='-ml-4'>Modo de transferência de calor;</li>
                        <li className='-ml-4'>Calor específico e calor sensível</li>
                        <li className='-ml-4'>Transferência de calor a temperatura constante;</li>
                        <li className='-ml-4'>Vapor saturado e vapor superaquecido.</li>
                        </ul>            
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