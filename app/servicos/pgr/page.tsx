"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Foto from '../../../public/servicosfts/pgr.png'


export default function PgrService(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'square',
      }; 
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
               <Link href="/servicos">Serviços</Link> 
            </li>
            <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
               PGR - Programa de Gerenciamento de Riscos            
            </li>
        </ol>
        </div>
    </section>  
    <main id="descricao">            
        <section id="content" className="mb-0">
            <div className=" content-padding">
                <div className="container roww clearflix">
                <div className="col-md-2 md:-ml-8 lg:-ml-8">
                        <h4 className="font-bold text-xl">Outros Serviços:</h4>
                        <div className="outrosservice">
                            <ul style={listStyle} className="text-sm">
                                <li className='mb-2'>
                                    <Link href="/servicos/ltcat" className='text-black'>LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/servicos/pcmso" className='text-black'>PCMSO - Programa de Controle Médico de Saúde Ocupacional</Link>
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
                                <div className="relative mt-0 ">
                                <div className="entry-image alignleft">
                                <Image src={Foto} alt="" width={500}/>
                                </div>
                                <div><span className='font-bold'>
                            O QUE É? / OBJETIVO
                        </span></div>
                        <div><br /></div>
                                <div > O Programa de Gerenciamento de Riscos (PGR) é a materialização do processo de Gerenciamento de Riscos Ocupacionais (por meio de documentos físicos ou por sistema eletrônico), visando à melhoria contínua das condições da exposição dos trabalhadores por meio de ações multidisciplinares e sistematizadas.</div>                            
                    <div><br/></div>    
                    <div> A responsabilidade da elaboração do PGR é da organização, que pode elaborar internamente, caso possua conhecimento técnico, ou delegar esta tarefa para um engenheiro ou técnico de segurança do trabalho de sua confiança.</div>    
                    <div><br/></div>
                    <div>Entrou em vigor no dia 03 de Janeiro de 2022 a nova NR-01 que exige a implementação o Gerenciamento de Riscos Ocupacionais (GRO) e Programa de Gerenciamento de Riscos (PGR) para as empresas de todo Território Nacional.
                    </div>
                    <div><br /></div>
                    <div><span className='font-bold'>
                            PASSOS PARA SUA ELABORAÇÃO:
                        </span></div>
                        <div><br /></div>
                    <div>1.
                    <span className="white-space:pre;">		</span>
                    Identificação dos riscos
                    </div>  
                    <div>2.
                    <span className="white-space:pre;">		</span>
                    Avaliação dos riscos
                    </div> 
                    <div>3.
                    <span className="white-space:pre;">		</span>
                    Definição das medidas de prevenção e controle                                
                    </div> 
                    <div>4.
                    <span className="white-space:pre;">		</span>
                    Elaboração do PGR 
                    </div>
                    <div>5.
                    <span className="white-space:pre;">		</span>
                    Treinamento dos trabalhadores 
                    </div> 
                    <div>6.
                    <span className="white-space:pre;">		</span>
                    Monitoramento e atualização do PGR 
                    </div>   
                    <div><br/></div>
                    <div><span className='font-bold'>
                            BENEFICIOS:
                        </span></div>
                        <div><br /></div>
                        <div>      
                            -
                    <span className="white-space:pre;">		</span>
                    Prever e prevenir acidentes e doenças ocupacionais;
                    </div>  
                    <div>      
                        -
                    <span className="white-space:pre;">		</span>
                    Identificar potenciais danos e prejuízos organizacionais;
                    </div> 
                    <div>      
                        -
                    <span className="white-space:pre;">		</span>
                    Avaliar e classificar os riscos de forma clara e criteriosa;                                
                    </div> 
                    <div>      
                        -
                    <span className="white-space:pre;">		</span>
                    Determinar a necessidade de adoção de medidas preventivas;
                    </div>
                    <div>      
                        -
                    <span className="white-space:pre;">		</span>
                    Implementar ações que ofereçam segurança às atividades laborais;
                    </div> 
                    <div>      
                        -
                    <span className="white-space:pre;">		</span>
                    Acompanhar, controlar e preservar a integridade física da equipe; 
                    </div>                   
                    <div>      
                        -
                    <span className="white-space:pre;">		</span>
                    Oferecer credibilidade à empresa diante do mercado; 
                    </div>                   
                    <div>      
                        -
                    <span className="white-space:pre;">		</span>
                    Atender às exigências legislativas.
                    </div>                   
                    <div><br/></div>
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