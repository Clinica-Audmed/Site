"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../../components/navbar';
import Final from '../../../components/final';
import MedicinaOcupacional from '../../../../public/blog/MedicinaOcupacional.webp';
import Insalubridade from '../../../../public/blog/Insalubridade-SaudeOcupacional.jpg';
import PerdaAuditiva from '../../../../public/blog/perdaAuditiva.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

export default function BlogSaudeOcupacional(){
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
                 <Link href="/blog">  Blog </Link> 
                </li>
                <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
              Saúde Ocupacional           
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
                    <Link href="/blog/categorias/saude-ocupacional/perda-auditiva-ocupacional"><Image src={PerdaAuditiva} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                    </div>
                    <div className="entry-title">
                            <h2 className='mt-8'>Perda auditiva ocupacional e a importância da Audiometria</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>20 de Fevereiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p>A Organização Mundial da Saúde (OMS) estimou que 1 a cada 4 pessoas terão problemas auditivos até 2050. Isso pode ocorrer a devido fatores e um dos motivos principais é o trabalho. A perda auditiva ocupacional é mais comum do que se imagina e precisa ser observada por todo.</p>
                            <div className="link">
                <Link href="/blog/categorias/saude-ocupacional/perda-auditiva-ocupacional" className='text-uppercases'>Saiba mais...</Link>
            </div>
            <div/>
            <div className="clear"></div>
                     <p><br/></p></div>
                    <div className="entry-image">
                    <Link href="/blog/categorias/saude-ocupacional/cauculo-de-insalubridade"><Image src={Insalubridade} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                    </div>
                    <div className="entry-title">
                            <h2 className='mt-8'>Saiba como calcular o adicional de Insalubridade</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>24 de Janeiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p>O adicional de insalubridade é um direito do trabalhador que exerce suas atividades em ambientes de risco, o que pode acabar prejudicando sua saúde.</p>
                            <div className="link">
                <Link href="/blog/categorias/saude-ocupacional/cauculo-de-insalubridade" className='text-uppercases'>Saiba mais...</Link>
            </div>
            <div/>
            <div className="clear"></div>
                     <p><br/></p>
                            <div className="entry-image">
                                <Link href="/blog/categorias/saude-ocupacional/medicina-ocupacional-colaboracao"><Image src={MedicinaOcupacional} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                            </div>
                            <div className="entry-title">
                            <h2 className='mt-8'>Como a medicina ocupacional pode colaborar para o sucesso nas empresas</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>29 de Dezembro de 2023</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p>Muitas empresas ainda não sabem a dimensão que a medicina ocupacional pode tomar em uma empresa. Colocar esse fator como prioridade é um dos principais pilares para se alcançar o sucesso. Afinal, uma empresa que valoriza seus funcionários e se preocupa com a saúde e bem-estar de todos, é uma empresa bem-sucedida.</p>
                            <div className="link">
                <Link href="/blog/categorias/saude-ocupacional/medicina-ocupacional-colaboracao" className='text-uppercases'>Saiba mais...</Link>
            </div>
            <div className="clear"></div>
                     <p><br/></p>
                   
                    </div>
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
                                           <h4><Link href="/blog/categorias/seguranca-do-trabalho/nr10-principais-exigencias">NR10: quais são as exigências para se adequar à Norma</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>09 de fevereiro de 2024</li>
                                       </ul>
                                   </div>
                               </div>
            <div className="spost clearfix roww">
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/seguranca-do-trabalho/nr17-ergonomia">NR17: como a ergonomia pode afetar na rotina do trabalho</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>17 de janeiro de 2024</li>
                                       </ul>
                                   </div>
                               </div>
            <div className="spost clearfix roww">
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/seguranca-do-trabalho/importancia-do-EPC">A importância dos EPC – Equipamento de Proteção Coletivo</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>04 de janeiro de 2024</li>
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