"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../../../components/navbar';
import Final from '../../../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Medicina from '../../../../../public/blog/MedicinaOcupacional.webp';
import Logo from '../../../../../public/blog/SOC.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';


export default function MedicinaOcupacionalCola(){
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
            Como a medicina ocupacional pode colaborar para o sucesso nas empresas         
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
                            <h2>Como a medicina ocupacional pode colaborar para o sucesso nas empresas</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 ">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>29 de dezembro de 2023</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                            <li><FontAwesomeIcon icon={faFolderOpen} className="mr-1"></FontAwesomeIcon>Saúde Ocupacional</li>
                        </ul>
                            <div className="entry-image">
                                <Link href="#"><Image src={Medicina} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                        <div className="entry-content notopmargin">
                            <h6 className='font-bold text-black mt-5'>Ao investir na Saúde e Segurança dos trabalhadores, a medicina ocupacional também se torna um grande aliado estratégico, resultando em excelentes resultados.</h6>
                            <br />
                            <p>Muitas empresas ainda não sabem a dimensão que a medicina ocupacional pode tomar em uma empresa. Colocar esse fator como prioridade é um dos principais pilares para se alcançar o sucesso. Afinal, uma empresa que valoriza seus funcionários e se preocupa com a saúde e bem-estar de todos, é uma empresa bem-sucedida.</p>
                            <br />
                            <h3 className='font-bold text-black '>O que é a medicina ocupacional?</h3>
                            <br/>
                            <p>A Medicina Ocupacional, também conhecida como Medicina do Trabalho, é uma especialidade médica voltada para a promoção e preservação da saúde dos trabalhadores, visando trazer um melhor ambiente de trabalho para os colaboradores, tanto para saúde física, quanto para saúde mental. Seu principal objetivo é prevenir doenças relacionadas ao trabalho, bem como melhorar as condições laborais e promover ambientes de trabalho seguros e saudáveis.</p>
                            <p>Esse cuidado contribui não apenas para a saúde dos colaboradores, mas também para o sucesso e a sustentabilidade das empresas.</p>
                            <h4 className='text-gray-700 text-2xl font-bold'>O papel da medicina ocupacional nas empresas:</h4>
                            <br />
                            <p>A medicina ocupacional desempenha um papel de muito sucesso nas empresas, visando garantir a saúde e segurança dos trabalhadores, contribuindo para ambientes mais produtivos, seguros e saudáveis.</p>
                            <p>Quando uma empresa entende a importância de um ambiente saudável, a medicina ocupacional se torna uma aliada estratégica em busca de um crescimento sustentável.</p>
                            <p>Além de ser uma obrigação colocada nas Normas Regulamentadoras, se tornou um indicador de responsabilidade social e um determinante para o sucesso a longo prazo. Por isso, vemos que muitos negócios que se adequaram ‘ao novo’, empresas modernas, estão à frente de outras. Isso porque, uma organização boa, atrai bons profissionais, se tornando crucial para retenção de talentos, na construção de uma imagem positiva e até para redução de absenteísmo.</p>
                            <h4 className='text-gray-700 text-2xl font-bold'>Os benefícios da medicina ocupacional nas empresas</h4>
                            <p>Além de cumprir a legislação trabalhista, ainda, a medicina ocupacional é muito benéfica em diversas partes para a empresa. Veja alguns exemplos:</p>
                            <ul style={listStyle}>
                                <li><b className='font-bold'>Prevenção de Acidentes e Doenças Ocupacionais:</b> a medicina do trabalho ajuda a identificar e reduzir os riscos no local de trabalho, atuando na prevenção de acidentes e doenças ocupacionais.</li>
                                <li><b className='font-bold'>Redução de absenteísmo:</b> com uma boa gestão de medicina ocupacional, a taxa de absenteísmo diminui, aumentando a presença e produtividade dos funcionários. Além de reduzir custos com funcionários afastados.</li>
                                <li><b className='font-bold'> Promoção de saúde ocupacional:</b> a medicina ocupacional nas empresas ajuda a promover a saúde no trabalho, com campanhas de vacinação, treinamentos, orientações sobre hábitos saudáveis e mais.</li>
                                <li><b className='font-bold'>Melhoria do clima organizacional:</b> o cuidado com os colaboradores contribui para um bom clima organizacional, colaboradores satisfeitos e saudáveis são mais propensos a se dedicarem, inovarem e contribuírem ativamente para os objetivos da empresa.</li>
                                <li><b className='font-bold'>Responsabilidade social:</b> uma empresa que cumpre com toda a legislação possui uma estratégia inteligente e constrói uma boa reputação em termos de responsabilidade social corporativa.</li>
                                <li><b className='font-bold'>Gestão de Recursos Humanos:</b> a saúde ocupacional também colabora na gestão de recursos humanos. Isso porque, avaliações regulares da capacidade de trabalho garantem que os colaboradores estejam aptos para suas funções, evitando desgastes e contribuindo para a satisfação no trabalho. Isso não apenas melhora a eficiência operacional, mas também contribui para a retenção de talentos.</li>
                            </ul>
                            <h4 className='text-gray-700 text-2xl font-bold'>Colaboradores mais produtivos, melhores resultados</h4>
                            <p>Ao promover uma boa saúde ocupacional para os funcionários, como resultado, é possível ver um aumento na produtividade dos mesmos, o que se torna benéfico para a empresa como um todo. </p>
                            <p>Isso porque, ao mostrar preocupação pela saúde e bem-estar, os colaboradores se sentirão mais à vontade, mais seguros, e poderão se preocupar mais no trabalho, entregando resultados com mais eficiência. Além disso, o número de funcionários afastados diminui, o que consequentemente traz redução de custos e podendo contar com uma equipe completa, o sucesso para a empresa é certo.</p>
                            <br />
                            <h4 className='text-gray-700 text-2xl font-bold'>Legislação relacionada à saúde ocupacional</h4>
                            <p>A Secretaria do Trabalho e Emprego (Ministério do Trabalho) é o órgão responsável por todas as fiscalizações dos trabalhadores, incluindo a área de SST.</p>
                            <p>Entre as obrigatoriedades, estão as 38 Normas Regulamentadoras, NRs, que foram previstas pela Portaria de nº 3.214, o Programa de Prevenção de Riscos Ambientais (PPRA), e o Programa de Controle de Saúde Ocupacional (PCMSO).</p>
                           <p>Baseado na Lei nº 6.514, de 22 de dezembro de 1977, referente à Consolidação das Leis do Trabalho, que assegura direitos ligados à segurança e à medicina do trabalho, onde o art. 157 salienta que cabe às empresas:</p>
                            <div >
                            <p className='text-base my-0 '> I -
                            <span className='whitespace-pre'>	</span>
                            cumprir e fazer cumprir as normas de segurança e medicina do trabalho;</p>
                            <p className='text-base my-0 '> II -
                            <span className='whitespace-pre'>	</span>
                            instruir os empregados, através de ordens de serviço, quanto às precauções a tomar no sentido de evitar acidentes do trabalho ou doenças ocupacionais;</p>
                            <p className='text-base my-0 '> III -  
                            <span className='whitespace-pre'>	</span>
                            adotar as medidas que lhes sejam determinadas pelo órgão regional competente;
                            </p>
                            <p className='text-base my-0 '> IV -
                            <span className='whitespace-pre'>	</span>
                            facilitar o exercício da fiscalização pela autoridade competente.
                            </p>
                            <p>É importante que as empresas estejam atentas às legislações e se adaptem a elas.</p>
                        </div>
                        <br />
                            <p>Fonte:<Link href="https://www.soc.com.br/blog-de-sst/como-a-medicina-ocupacional-pode-colaborar-para-o-sucesso-nas-empresas/" target="_blank">https://www.soc.com.br/blog-de-sst/como-a-medicina-ocupacional-pode-colaborar-para-o-sucesso-nas-empresas/</Link></p>                                   
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