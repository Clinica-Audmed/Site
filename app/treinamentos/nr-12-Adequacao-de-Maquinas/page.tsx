"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Nr12 from '../../../public/NR12.png'

export default function Treinamento5(){
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
            Adequação de Máquinas        
            </li>
            </ol>
            </div>
    </section>
    <main id="descricao">            
   <section id="content" className='mb-0'>
    <div className="content-padding">
        <div className="container roww clearflix">
            <div className="col-md-2 md:-ml-8 lg:-ml-8" >
                <h4 className='text-xl font-bold'>Outros Treinamentos:</h4>
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
                        <div className="relative mt-0">
                        <div className="entry-image alignleft">
                        <Image src={Nr12} alt=""/>
                        </div>
                        <div><span className='font-bold'>
                            OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>O objetivo do treinamento de Segurança em Maquinas e Equipamentos conforme a NR 12 é preparar os trabalhadores para realizar atividades e serviços com segurança e eficiência, visando a saúde dos colaboradores e a execução dos trabalhos utilizando métodos apropriados e precisos.</div>    
                        <div><br/></div>    
                        <div><span className='mt-5 font-bold'>
                        PÚBLICO ALVO
                        </span></div>    
                        <div><br/></div>    
                        <div>
                        Empresas cujos colaboradores realizem operação, manutenção, inspeção e demais intervenções em máquinas e equipamentos rotativos e abrasivos</div>    
                        <div><br/></div>    
                        <div><span className='font-bold'>
                            PROGRAMA (PREVISTO NA NR 12)
                        </span></div>  
                        <div><br/></div>  
                        <div> 
                            - 
                        <span className='whitespace-pre'>	</span>
                            Norma Regulamentadora NR 12 – Conceitos;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Gestão dos Riscos em Máquinas e Equipamentos;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Técnicas e normas de operação segura com equipamentos rotativos;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Manual de operação;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Utilização de EPI (Equipamento de Proteção Individual) e EPC (Equipamento de Proteção Coletiva);
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Medidas de Proteção de Máquinas;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Aspectos Ergonômicos;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Condições Biomecânicas e Variáveis Antropométricas;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Noções de Primeiros socorros;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Manutenção preditiva, preventiva e corretiva;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Riscos de acidentes no uso dos equipamentos rotativos (choques, cortes, esmagamentos, emprensamentos, perfurações, etc.);
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Inspeção dos equipamentos – Check List diário;
                        </div>
                        <div> 
                            <br/>
                        </div>                
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