"use client"
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Final from "@/app/components/final";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faCalendarDays, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../../../../public/blog/SOC.png';
import ErgonomiaNR17 from '../../../../../public/blog/Ergonomia-NR17.png'

export default function NR17Ergonomia(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'circle',
      };
    return(
        <>
         <Navbar/>
        <section id="page-title">
            <div className="sobre">
            <h1 className="container">
                Blog
            </h1> 
            <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                 <Link href="/blog"> Blog </Link> 
                </li>
                <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
            NR17: como a ergonomia pode afetar na rotina do trabalho        
            </li>
            </ol>
            </div>
        </section>
        <main id="descricao">
        <div className="content-wrap">
        <div className="container clearfix col-md-10">
            <div className="postcontent nobottommargin clearfix w-full md:w-3/4">
                <div className="single-post nobottommargin">
                    <div className="entry clearfix">
                        <div className="entry-title">
                            <h2>NR17: como a ergonomia pode afetar na rotina do trabalho</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 ">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>17 de janeiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                            <li><FontAwesomeIcon icon={faFolderOpen} className="mr-1"></FontAwesomeIcon>Segurança do Trabalho</li>
                        </ul>
                            <div className="entry-image">
                                <Link href="#"><Image src={ErgonomiaNR17} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                        <div className="entry-content notopmargin">
                            <h6 className='font-bold text-black mt-5'>Muito além de ter conforto no local de trabalho, a NR 17 pode ajudar na produtividade dos trabalhadores </h6>
                            <br />
                            <p>A Norma Regulamentadora 17, NR17, trata sobre ergonomia no ambiente de trabalho, promovendo a saúde e qualidade de vida aos colaboradores de uma empresa, aumentando seu desempenho no ambiente de trabalho.</p>
                            <p>O intuito dessa norma é estabelecer parâmetros, a fim de que as condições do empregado se adequem as suas necessidades físicas e psicológicas. Além disso, a norma define ações a serem implantadas no ambiente profissional, prevenindo doenças ocupacionaise preservando a segurança de todos, tendo resultado positivo no psicológico e em toda a rotina do funcionário.</p>
                            <br />
                            <h3 className='font-bold text-black '>O que é Ergonomia regulamentada na NR17?</h3>
                            <br/>
                            <p>A ergonomia é a ciência que estuda a relação que o homem tem com as condições de trabalho. Sendo assim, é um conjunto de regras e procedimentos que visam cuidados com a saúde do profissional, considerando espaços físicos das empresas e organização dos processos na rotina.</p>
                            <p>Sendo regulamentada pela NR17, a ergonomia pode ser dividida em três áreas: ergonomia física, organizacional e cognitiva.</p>
                            <ul style={listStyle}>
                                <li><b className="font-bold">Ergonomia Física:</b> diz sobre as características da anatomia humana. Estuda a relação entre a anatomia do ser humano e sua fisiologia, antopometria e biomecânica. Envolve aspectos como: movimentos repetitivos, posturas, manuseio de materiais e distúrbios musculoesqueléticos.</li>
                                <li><b className="font-bold">Ergonomia Organizacional:</b> diz sobre a cultura organizacional da empresa. Estuda o clima, os processos e políticas, considerando as pessoas como partes inerentes do sistema. Envolve aspectos como: processos comunicativos, trabalho em grupo, gestão de quailidade, projetos participativos e tempo de trabalho.</li>
                                <li><b className="font-bold">Ergonomia Cognitiva:</b> diz sobre processos mentais, como raciocínio, concentração e memória. Estuda os aspectos emocionais, mentais e psicomotores do trabalho, estando ligados ao processamento de informações ao executar tarefas e resolver problemas. Como por exemplo: tomada de decisões, estresse profissional, confiabilidade humana e carga mental.</li>
                            </ul>
                        <br />
                        <h3 className='font-bold text-gray-700 text-2xl ml-2'>Ergonomia e a rotina do trabalho</h3>
                            <br />
                            <p>A rotina de trabalho pode ser afetada pela falta de ergonomia. Isso porque, a falta de condições físicas adequadas no ambiente de trabalho, pode levarao desenvolvimento de graves problemas de saúde, seja desaúde física ou mental.</p>
                            <p>Um colaborador que acaba desenvolvendo distúrbios como Hérnia de Disco, LER(Lesão por Esforço Repetitivo), bursites e outros, acaba tendo parte de sua eficiência comprometida, resultando diretamente em seu trabalho.</p>
                            <p>Por isso, valorizar e investir nos colaboradores é fundamental. Afinal, a valorização vai muito além de salários e beneficios, pensar no ambiente de trabalho em que o funcionário irá atuar diretamente, é primordial. </p>
                            <p>A NR17 ajuda a diminuir o absenteísmo, visto que funcionários saudáveis, não faltam ao trabalho ou ficam afastados. Assim, a empresa tem resultados melhores, é um investimento dfe mão dupla, no qual ambos os lados são beneficiados.</p>                        
                       <br />
                       <h3 className='font-bold text-black '>Empresas devem se adaptar a NR17</h3>
                            <p>Para estar em conformidade com a NR17, as empresas devem se adaptar e tomar medidas para trazer o melhor para seus colaboradores.</p>    
                            <p>A equipe de Recursos Humanos deve trabalhar junto com a equipe de Segurança do Trabalho, a fim de comunicar os colaboradores sobre as regras da NR17 e tomar as medidas preventivas para evitar acidentes.</p>
                            <p>Algumas das ações que podem ser implementadas são:</p>
                            <ul style={listStyle}>
                                <li>Promover palestras e/ou instalar cartilhas sobre as medidas que o colaborador pode tomar para garantir sua saúde no ambiente de trabalho;</li>
                                <li>Deixar o ambiente de trabalho adequado, com as dimensões corretas da mesa, distância entre a tela  e o colaborador, tipo da cadeira, regulagem da cadeira, espaço para se movimentar e outros;</li>
                                <li>Cuidado com a carga manual que cada pessoa irá carregar durante seu trabalho;</li>
                                <li>Fiscalizar e alertar.</li>
                            </ul>
                            <p>O descumprimento da NR17 pode acarretar multas para as empresas. E além disso, uma empresa que cuida da saúde e do bem-estar dos seus funcionários, ganha uma boa visão diante do mercado</p>
                            <br />
                            <p>Fonte:<Link href="https://www.soc.com.br/blog-de-sst/nr17-como-a-ergonomia-pode-afetar-na-rotina-do-trabalho/" target="_blank">https://www.soc.com.br/blog-de-sst/nr17-como-a-ergonomia-pode-afetar-na-rotina-do-trabalho/</Link></p>                                   
                            <div className="clear"></div>
                        </div>
                    </div>
                    
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Postado Por: <span><Link href={'https://www.soc.com.br/'}>SOC</Link></span></h3>
                        </div>
                        <div className="panel-body">
                            <div className="author-image">
                                <Image src={Logo} alt="SOC" title="SOC" className="img-circle"/>
                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
            
            <div className="sidebar nobottommargin col_last clearfix col-md-2 ">
         
                        <div className="widget clearfix -ml-6 ">
                            <h4>Categorias</h4>
                            <div className="widget_links ">
                                <ul style={listStyle}>
                                <li><Link href="/blog/categorias/e-social" className='text-black'>e-SOCIAL</Link></li>
                                <li><Link href="/blog/categorias/saude-ocupacional" className='text-black'>Saúde Ocupacional</Link></li>
                                <li><Link href="/blog/categorias/seguranca-do-trabalho" className='text-black'>Segurança do Trabalho</Link></li>
                                </ul>
                            </div>
                        </div>
        <div className="widget clearfix">
            <h4 className='-ml-6'>Posts Recentes</h4>
            <div className="spost clearfix roww">
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/saude-ocupacional/cauculo-de-insalubridade">Saiba como calcular o adicional de Insalubridade</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>24 de janeiro de 2024</li>
                                       </ul>
                                   </div>
                               </div>
        <div className="spost clearfix roww">
        <div className="entry-c">
            <div className="entry-title">
        <h4><Link href="/blog/categorias/saude-ocupacional/medicina-ocupacional-colaboracao" className='md:hover:text-blue-500' >Como a medicina ocupacional pode colaborar para o sucesso nas empresas </Link></h4>
        </div>
        <ul className="entry-meta">
        <li>29 de Dezembro de 2023</li>
        </ul>
        </div>
        </div>
        <div className="spost clearfix roww">
                                   
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/e-social/multas-do-esocial">Multas do eSocial: onde elas se aplicam e quais cuidados tomar</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>23 de março de 2023</li>
                                       </ul>
                                   </div>
                               </div>
                                    <div className="spost clearfix roww">
                                   
                                    <div className="entry-c">
                                        <div className="entry-title">
                                            <h4><Link href="/blog/categorias/e-social/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador">E-Social: Obrigação que facilita os direitos do trabalhador</Link></h4>
                                        </div>
                                        <ul className="entry-meta">
                                            <li>11 de junho de 2019</li>
                                        </ul>
                                    </div>
                                </div>
                                                    </div>
                    
                </div>
            </div>
        </div>
        
        <Final/>
        </main>
        </>
    )
}