"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Nr23 from '../../../public/NR23.jpg'


export default function Treinamento3(){
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
                Brigada de Incêndio
                </li>
            </ol>
            </div>
    </section>
    <main id="descricao">            
   <section id="content" className='mb-0'>
    <div className="content-padding">
        <div className="container roww clearflix">
            <div className="col-md-2 md:-ml-8 lg:-ml-8">
                <h4 className="font-bold text-xl">Outros Treinamentos:</h4>
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
                        <Link href="/treinamentos/nr-17-Ergonomia-AGP-AET" className='text-black'>
                        Ergonomia / AGP / AET</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-18-Seguranca-e-Saude-no-Trabalho-na-Industria-da-Construcao" className='text-black'>
                        Segurança e Saúde no Trabalho na Industria da Construção</Link>
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
                        <Image src={Nr23} alt=""/>
                        </div>
                        <div><span className='font-bold'>
                            OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>Treinamento continuado em manuseio e operação de equipamentos de combate a incêndios e explosões de profissional responsável por implantação, operação e manutenção de instalações elétricas em área de mineração.</div> 
                        <div> Esta Norma Regulamentadora - NR estabelece medidas de prevenção contra incêndios nosambientes de trabalho.</div>    
                       <div><br/></div>    
                        <div><span className='font-bold mt-5'>
                        PÚBLICO ALVO
                        </span></div>    
                        <div><br/></div>    
                        <div>Todas as empresas</div>    
                        <div><br/></div>    
                        <div><span className='font-bold'>
                            PROGRAMA (PREVISTO NA NR 23)
                        </span></div>  
                        <div><br/></div>  
                        <div> 
                            - 
                        <span className='whitespace-pre'>	</span>
                        Introduções
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Aspectos Legais; 
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Teoria do fogo; 
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Propagação do fogo;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Classes de incêndio; 
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Prevenção do incêndio; 
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Método de extinção; 
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Agente extintotes;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            EPI; Equipamentos de combate a incendio I e II;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Equipamentos de detecção, alarmes e comunicação;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Abandono de área;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Pessoas com abilidades reduzidas;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Riscos e Práticas de combate a incêndio.
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