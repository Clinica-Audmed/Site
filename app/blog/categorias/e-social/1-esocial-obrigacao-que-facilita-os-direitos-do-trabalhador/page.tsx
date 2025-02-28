"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../../../components/navbar';
import Final from '../../../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Blogs from '../../../../../public/blog/esocial.jpg';
import Logo from '../../../../../public/blog/SOC.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';


export default function DireitosTrabalhador(){
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
            Obrigação que facilita os direitos do trabalhador         
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
                            <h2>eSOCial: obrigação que facilita os direitos do trabalhador</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 ">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>11 de junho de 2019</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                            <li><FontAwesomeIcon icon={faFolderOpen} className="mr-1"></FontAwesomeIcon>e-SOCIAL</li>
                        </ul>
                            <div className="entry-image">
                                <Link href="#"><Image src={Blogs} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                        <div className="entry-content notopmargin">
                            <h3 className='font-bold text-black mt-5'>Obrigações facilitarão os direitos do trabalhadores a serem cumpridos. Medida visa ações que envolvem os treinamentos e fiscalização dos ambientes.</h3>
                            <br/>
                            <p>Houveram algumas mudanças nas Normas Regulamentadoras (NR). O governo
                            pretende facilitar as NRs e focar na saúde e segurança do trabalhador. 
                            Principalmente, pelo alto índice de acidentes, doenças ocupacionais e 
                            mortes em locais de trabalho no Brasil.</p>
                            <p>Estas mudanças possuem o objetivo de simplificar e desburocratizar as normas, além
                            de melhorar a relação das empresas com os funcionários. Tudo isso para 
                            que eles possuam seus direitos esclarecidos e cumpridos.</p>
                            <p>Apesar de muitos empresários entenderem a preocupação, ainda pedem 
                            calma sobre as regulamentações. Afinal, precisam se organizar em relação
                            aos prazos e regulamentar sobre os novos e antigos funcionários.</p>
                            <p>A preocupação é manter um ambiente de trabalho seguro e adequado aos 
                            funcionários. Empresas que não cumprirem estas novas normas estarão 
                            sujeitas à multas.</p>
                            <p>Vale lembrar que cada área de trabalho possui um tipo de norma a ser 
                            cumprida e, portanto, elas não são iguais para todos. Sendo assim, é 
                            necessário dar atenção para cada caso.</p>
                            <p>Claramente tudo isto facilitará ao trabalhador a ter seus direitos 
                            cumpridos e não mudará nada para as empresas que já seguiam o certo, mas
                            que não era fiscalizados da devida forma.</p>
                            <p>Agora tudo deverá ser computado, enviando os dados ao governo, sejam 
                            de informações trabalhistas, fiscais e providenciarias para um único 
                            banco de dados. E além disto, os trabalhadores poderão ter acesso e 
                            consultar seus dados pela internet.</p>
                            <h3 className='font-bold text-black mt-5'>O porquê desta obrigatoriedade</h3>
                            <br />
                            <p>O Governo tem procurado diminuir a quantidade de acidentes causados 
                            dentro dos ambientes de trabalho, por conta das áreas de riscos que não 
                            possuem certos cuidados.</p>
                            <p>Com esta obrigação do eSocial, as empresas precisam estar sempre 
                            atualizando dados no sistema e tendo tudo de acordo com as normas. Todos
                            que contratam pessoas (jurídicos ou físicos) devem lançar as 
                            informações no sistema, funcionários registrados ou até estagiários.</p>
                            <h3 className='font-bold text-black mt-5'>Documentos necessários</h3>
                            <br />
                            <p>Para cada cargo há alguns dados, a mais ou a menos, a serem enviados.
                            E para cada cargo um leiaute diferente que esclarece os documentos 
                            necessários e ambientes os quais são expostos.</p>
                            <p>O leiaute S- 2300 mostra os dados necessários de envio ao eSocial ao 
                            contratar um estagiário. E o leiaute S-2200 é sobre dados de Cadastramento Inicial/ Admissão /Ingresso de Trabalhador</p>
                            <h3 className='font-bold text-black mt-5'>As últimas atualizações nas NRs</h3>
                            <br />
                            <p>No momento, as normas regulamentadoras que estão a sofrer mudanças são aquelas voltadas a saúde e segurança do trabalho.</p>
                            <p>A primeira norma que passará por uma revisão será a N- 12, que rata 
                            da regulamentação de maquinários. Por enquanto esta é a única a ser 
                            revisada e com previsão de mudanças para o próximo mês.</p>
                            <p><br/></p>
                            <p>Fonte:<Link href="https://ww2.soc.com.br/2019/06/obrigacao-que-facilita-os-direitos-do-trabalhador/" target="_blank">https://ww2.soc.com.br/2019/06/obrigacao-que-facilita-os-direitos-do-trabalhador/</Link></p>                                   
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
        <h4><Link href="/blog/categorias/saude-ocupacional/medicina-ocupacional-colaboracao" className='md:hover:text-blue-500' >Como a medicina ocupacional pode colaborar para o sucesso nas empresas </Link></h4>
        </div>
        <ul className="entry-meta">
        <li>29 de Dezembro de 2023</li>
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