"use client"
import Final from "@/app/components/final";
import Navbar from "@/app/components/navbar";
import { faCalendarDays, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../../../public/blog/SOC.png';
import Capa from '../../../../../public/blog/Capa-para-blog-DET.webp';
import Cronograma from '../../../../../public/blog/Cronograma-gov-DET.png';
import Noti from '../../../../../public/blog/Notificacoes-DET.jpg';

export default function det2024(){

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
            Inspeção do Trabalho por meio do DET começa a valer a partir do dia 1° de Março de 2024       
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
                            <h2>Inspeção do Trabalho por meio do DET começa a valer a partir do dia 1° de Março de 2024</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 ">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>29 de fevereiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                            <li><FontAwesomeIcon icon={faFolderOpen} className="mr-1"></FontAwesomeIcon>e-Social</li>
                        </ul>
                        <div className="entry-image">
                    <Link href="/blog/categorias/seguranca-do-trabalho/nr10-principais-exigencias"><Image src={Capa} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                    </div>
                        <div className="entry-content notopmargin">
                            <h6 className='font-bold text-gray-400 mt-5'>Empregadores e entidades pertencentes aos grupos 1 e 2 do eSocial precisarão utilizar o DET para comunicação eletrônica entre Auditores-Fiscais do Trabalho e empregadores a partir do dia 1° de Março. Outros grupos começarão a valer em maio.</h6>
                            <p>O Domicílio Eletrônico Trabalhista (DET) irá empregar serviços digitais, a fim de facilitar a comunicação eletrônica entre Auditores-Fiscais do Trabalho (AFTs) e empregadores. A plataforma foi criada pelo Ministério do Trabalho e Emprego (TEM). Por meio dela, os empregadores terão ciência e quaisquer atos administrativos, ações fiscais, intimações e avisos em geral. Isso será feito com digitalização de serviços, levando segurança e transparência das informações transmitidas, reduzindo a duração do processo e custos operacionais.</p>
                            <p>O DET é de fácil acesso, não é necessário instalar nada em sua máquina e pode ser utilizado a partir de qualquer sistema operacional via navegador web. Para realizar a conexão ao Domicílio Eletrônico Trabalhista, é preciso de autenticação via login único na conta GOV.BR.</p>
                            <h3 className='font-bold text-black '>Cronograma oficial do Governo</h3>
                            <Image src={Cronograma} alt={""} className="mb-3" />
                            <p>O MTE informou que o edital nº 01/2024, da Secretaria de Inspeção do Trabalho (SIT), com os prazos para que todos os empregadores se cadastrem no DET já está aberto. Mesmo que não possuam empregados registrados atualmente, as empresas devem realizar o cadastro.</p>
                            <p>A partir do dia 1° de Março deste ano, já está sendo exigido o uso do DET aos empregadores e entidades do grupo 1 e 2 do eSocial, conforme o cronograma que foi trazido no Edital SIT n° 01/2024. Continuando com o cronograma, estão elencados nos grupos 3 e 4 do eSocial e para os empregadores domésticos, o prazo tem início no dia 1° de Maio.</p>
                            <h3 className='font-bold text-black '>As finalidades do DET</h3>
                            <p>Segundo o Art. 140-B, o DET destina-se a:</p>
                            <ol className="list-decimal">
                                <li className="mb-2">Cientificar o empregador de quaisquer atos administrativos, procedimentos fiscais, intimações, notificações, decisões proferidas no contencioso administrativos e avisos em geral;</li>
                                <li className="mb-2">Permitir o envio, pelo empregador, de documentação eletrônica e em formato digital exigida em razão da instauração de procedimento administrativo ou de medida de fiscalização, bem como, em integração com os sistemas de processo eletrônico, permitir a apresentação de defesa e recurso no âmbito desses processos;</li>
                                <li className="mb-2">Assinalar prazos para o atendimento de exigências realizadas em procedimentos administrativos ou em medida de fiscalização;</li>
                                <li className="mb-2">Viabilizar, sem ônus, a emissão de certidões, inclusive relacionadas a infrações administrativas trabalhistas, a débitos de FGTS, e ao cumprimento de obrigações relacionadas à legislação trabalhista;</li>
                                <li className="mb-2">Disponibilizar ferramentas gratuitas e interativas para elaboração de autodiagnóstico trabalhista e para avaliação de riscos em matéria de segurança e saúde no trabalho;</li>
                                <li className="mb-2">Disponibilizar consulta à legislação trabalhista;</li>
                                <li className="mb-2">Simplificar os procedimentos de pagamento de multas administrativas e obrigações trabalhistas;</li>
                                <li className="mb-2">Registrar os atos de fiscalização e o lançamento de seus resultados;</li>
                                <li className="mb-2">Possibilitar a consulta, pelos empregadores, de informações relativas às fiscalizações registradas no âmbito do Sistema Federal de Inspeções do Trabalho, bem como dos trâmites de processos administrativos trabalhistas em que figurem como parte interessada; e</li>
                                <li className="mb-2">Ministrar orientações, informações e conselhos técnicos para o comprimento da legislação trabalhista, atendidos os critérios administrativos de oportunidade e conveniênia.</li>
                            </ol>
                            <h4 className="font-semibold text-black text-xl">Resposabilidades do empregador</h4>
                            <p>Com o DET, o empregador tem novas responsabilidades, que foram estabelecidas como:</p>
                            <ol className="list-decimal">
                                <li className="mb-2">Manter o acesso ao seu provedor de internet e a configuração do computador utilizado nas transmissões eletrônicas;</li>
                                <li className="mb-2">Consultar o DET para fins de ciência das comunicações realizadas em sua caixa postal;</li>
                                <li className="mb-2">Verificar a regular transmissão e assegurar-se do efetivo recebimento das petições e documentos pelo sistema DET; e</li>
                                <li className="mb-2">Informar e manter atualizado pelo menos o endereço postal eletrônico (e-mail), a fim de possibilitar o envio automático de mensagens com alertas, Desformando a existência de comunicações a serem recebidas por meio da caixa postal do DET.</li>
                            </ol>
                                <p>Parágrafo único. As mensagens de alerta descritas no inciso IV poderão ser disponibilizadas aos empregadores, adicionalmente, por meio de outros sistemas oficiais de prestação ou consultas de informações. (NR)</p>
                                <p>Art. 142. O empregador será considerado ciente da comunicação entregue na Caixa Postal do DET:</p>
                            <ol className="list-decimal">
                                <li className="mb-2">No dia em que for realizada a consulta eletrônica de seu teor; ou</li>
                                <li className="mb-2">Automaticamente, no primeiro dia útil após período de quinze dias corridos, contados da data de publicação da comunicação na caixa postal do DET, quando não houver sido realizada a consulta de seu teor.</li>
                            </ol>
                            <p>A ausência de consulta das comunicações eletrônicas por parte de empregador, no prazo regulamentar, irá configurar ciência tácita. Assim sendo essencial que todos os empregadores acessem o DET e atualizem seus cadastros. Para mais informações é possível acessar o site: det.sit.trabalho.gov.br e o manual do DET pelo link: det.sit.trabalho.gov.br/manual.</p>
                            <h4 className="font-semibold text-gray-700 text-xl">O DET irá fiscalizar as empresas?</h4>
                            <p>Por mais que muitos confundam, o Domicílio Eletrônico Trabalhista (DET) não irá fiscalizar as empresas sozinho, o DET é um meio de comunicação para o auditor se comunicar com a empresa. Para as fiscalizações tributárias, elas continuarão sendo informadas pelo e-CAC, por meio da consulta e dívidas e pendências fiscais. O DET servirá para fiscalizações no âmbito trabalhista.</p>  
                            <h3 className="font-bold text-black">Multas</h3>
                            <p>Quanto às multas relacionadas a eventos do eSocial com relação da legislação trabalhista, as mesmas serão comunicadas pelo DET. Por exemplo, no caso dos eventos S-2220 e S2210, que possuem efeitos trabalhistas, poderão ser comunicados no DET, pois possuem inadimplências relacionadas ao ASO e CAT. Já no caso do evento S-2240 que está relacionado com a legislação previdenciária e aposentadoria especial, não será comunicado via DET e sim via e-CAC.</p>
                            <h4 className="font-semibold text-gray-700 text-xl">As notificações do DET</h4>
                            <p>Para o primeiro acesso, é necessário cadastrar uma palavra-chave. Ao fazer login e colocar a palavra-chave, é possível consultar dados cadastrais, caixa postal, notificações e procurações. Além disso, os endereços de e-mail cadastrados são utilizados no envio de mensagens para a caixa de entrada do empregador, e também receberão avisos quando houver novas mensagens na caixa postal no DET</p>
                            <Image alt="" src={Noti}/>
                            <p>Para saber mais, acesse o manual do DET: <Link href="https://det.sit.trabalho.gov.br/manual/">Apresentação - documentação Domicílio Eletrônico Trabalista 1.0.0 (trabalho.gov.br)</Link></p>
                            <br />
                            <p>Fonte:<Link href="https://www.soc.com.br/blog-de-sst/inspecao-do-trabalho-por-meio-do-det-comeca-a-valer-a-partir-do-dia-1o-de-marco-de-2024/" target="_blank">https://www.soc.com.br/blog-de-sst/inspecao-do-trabalho-por-meio-do-det-comeca-a-valer-a-partir-do-dia-1o-de-marco-de-2024/</Link></p>                                   
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
                                <ul     >
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