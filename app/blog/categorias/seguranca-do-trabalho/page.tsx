"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../../components/navbar';
import Final from '../../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import ImportanciaEPC from '../../../../public/blog/ImportanciadoEPC.jpg';
import NR17Ergonomia from '../../../../public/blog/Ergonomia-NR17.png'
import Logo from '../../../../../public/blog/SOC.png';
import NR10 from '../../../../public/blog/Nr10.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';


export default function SegurançaDoTrabalho(){
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
           Segurança do Trabalho         
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
                    <div className="entry-image">
                    <Link href="/blog/categorias/seguranca-do-trabalho/nr10-principais-exigencias"><Image src={NR10} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                    </div>
                    <div className="entry-title">
                           <Link href="/blog/categorias/seguranca-do-trabalho/nr10-principais-exigencias"> <h2 className='mt-8'>NR10: quais são as exigências para se adequar à Norma</h2></Link>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>09 de Fevereiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p>A Norma Regulamentadora 10, ou NR10, É a norma que diz sobre Segurança em instalações e serviços em eletricidade. Desse modo, estabelece requisitos e condições para que os profissionais possam atuar de forma segura nas instalações de serviços elétricos.</p>
                            <div className="link">
                <Link href="/blog/categorias/seguranca-do-trabalho/nr10-principais-exigencias" className='text-uppercases'>Saiba mais...</Link>
            </div>
            <div/>
            <div className="clear"></div>
                     <p><br/></p></div>
                    <div className="entry-image">
                    <Link href="/blog/categorias/seguranca-do-trabalho/nr17-ergonomia"><Image src={NR17Ergonomia} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                    </div>
                    <div className="entry-title">
                            <h2 className='mt-8'>NR17: como a ergonomia pode afetar na rotina do trabalho</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>17 de Janeiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p>O intuito dessa norma é estabelecer parâmetros, a fim de que as condições do empregado se adequem as suas necessidades físicas e psicológicas. Além disso, a norma define ações a serem implantadas no ambiente profissional, prevenindo doenças ocupacionaise preservando a segurança de todos, tendo resultado positivo no psicológico e em toda a rotina do funcionário.</p>
                            <div className="link">
                <Link href="/blog/categorias/seguranca-do-trabalho/nr17-ergonomia" className='text-uppercases'>Saiba mais...</Link>
            </div>
            <div/>
            <div className="clear"></div>
                     <p><br/></p></div>
                            <div className="entry-image">
                                <Link href="/blog/categorias/seguranca-do-trabalho/importancia-do-EPC"><Image src={ImportanciaEPC} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                            <div className="entry-title">
                            <h2 className='mt-8'>A importância dos EPC – Equipamento de Proteção Coletivo</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>4 de janeiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p>Quando falamos sobre Segurança no Trabalho, falamos sobre o cuidado que deve ter para que os trabalhadores não sofram nenhum tipo de acidente, e com isso, falamos sobre os equipamentos de proteção: EPI e EPC. Os EPI’s são os Equipamentos de Proteção Individual, que são de uso próprio, como capacetes, luvas, roupas, e cada um tem o seu.</p>
                            <div className="link">
                <Link href="/blog/categorias/seguranca-do-trabalho/importancia-do-EPC" className='text-uppercases'>Saiba mais...</Link>
            </div>
                            <p><br/></p>
                            <div className="clear"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="sidebar nobottommargin col_last clearfix col-md-2 ">
         
                        <div className="widget clearfix -ml-20 md:-ml-6 lg:-ml-6">
                            <h4>Categorias</h4>
                            <div className="widget_links ">
                                <ul style={listStyle}>
                                <li><Link href="/blog/categorias/e-social" className='text-black'>e-SOCIAL</Link></li>
                                <li><Link href="/blog/categorias/saude-ocupacional" className='text-black'>Saúde Ocupacional</Link></li>
                                <li><Link href="/blog/categorias/seguranca-do-trabalho" className='text-black'>Segurança do Trabalho</Link></li>
                                </ul>
                            </div>
                        </div>
        <div className="widget clearfix -ml-20 md:-ml-6 lg:-ml-6">
            <h4 className=''>Posts Recentes</h4>
            <div className="spost clearfix roww">
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/saude-ocupacional/perda-auditiva-ocupacional">Perda auditiva ocupacional e a importância da Audiometria</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>20 de fevereiro de 2024</li>
                                       </ul>
                                   </div>
                               </div>
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