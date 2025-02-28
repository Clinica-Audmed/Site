"use client"
import Final from "@/app/components/final";
import Navbar from "@/app/components/navbar";
import { faCalendarDays, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import Multas from '../../../../../public/blog/MultasEsocial.jpg';
import Logo from '../../../../../public/blog/SOC.png'

export default function MultasEsocial(){
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
            Multas do eSocial: onde elas se aplicam e quais cuidados tomar         
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
                            <h2>Multas do eSocial: onde elas se aplicam e quais cuidados tomar</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 ">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>22 de março de 2023</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                            <li><FontAwesomeIcon icon={faFolderOpen} className="mr-1"></FontAwesomeIcon>e-SOCIAL</li>
                        </ul>
                            <div className="entry-image">
                                <Link href="#"><Image src={Multas} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                        <div className="entry-content notopmargin">
                            <p className="mt-3">O eSocial(Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas), um dos pilares do Sistema Público de Escrituração Digital, é uma folha de pagamento digital vinculada ao software que as empresas já costumam utilizar, com a finalidade de cumprimento das obrigações acessórias unificando o envio de informações fiscais, trabalhistas e previdenciárias. Entretanto, quando não cumpridas, você poderá ter que lidar com as multas.</p>
                            <p>Ao se tratar de fins físcais e jurídicos, a ferramenta é vinculada à Receita Federal, ao Ministério do Trabalho, ao INSS e à Caixa Econômica Federal.</p>
                            <p>Quando se trata de SST, precisamos relembrar que todo empregador tem responsabilidades de cuidar da saúde e segurança do seu colaborador, e a SST tem o intuito de minimizar e/ou extinguir quaisquer riscos e doenças que possam vir acontecer na organização. Portanto, o empregador te que ficar atento às normas de SST e consequentemente ao SST</p>
                            <h3 className='font-bold text-black mt-1'>Exigências do eSocial para SST:</h3>
                            <p >Relacionado a SST, existem três eventos* que devem ser enviados no eSocial confira:</p>
                            <p className='text-base mb-0 -mt-2'><b className="font-bold">-
                            <span className='whitespace-pre'>	</span>
                            Condições de Ambientais de Trabalho - S-2210:</b> tem como objetivo detalhar as condições nas quais o colaborador é submetido, expor os fatores de risco nos quais o colaborador está exposto, e as condições de insalubridade ou periculosidade.
                            </p>
                            <p className='text-base mb-0 '><b className="font-bold">-
                            <span className='whitespace-pre'>	</span>
                            Comunicação de Acidente de Trabalho:</b> tem como objetivo comunicar acidente de trabalho pelo declarante em até um dia útil após a ocorrência (em caso de dano físico), mesmo que não haja afastamento do trabalhador de suas atividades e de imediato (em caso de falecimento).
                            </p>
                            <p className='text-base mb-0 '><b className="font-bold">-
                            <span className='whitespace-pre'>	</span>
                            Monitoramento da Saúde do Trabalhador:</b> tem como objetivo monitorar a saúde do trabalhador, através de avaliações clínicas e todos os exames médicos no decorrer o vínculo empregatício (exames complementares e avaliações clínicas), com os seus detalhes como datas e conclusões.
                            </p>
                            <p className="font-bold mt-3">*eventos são grupos de informações que devem ser inseridos no eSocial relacionados a sua empresa, aos acontecimentos na relação de trabalho e aos empregados.</p>
                            <h4 className='text-gray-700 text-2xl font-bold'>Descomprimento das exigências do eSocial de SST: multas e valores*</h4>

                            <p>Documentos de SST devem ser enviados ao eSocial, por exemplo: CAT(Comunicado de Acidente do Trabalho), ASO(Monitoramento da saúde do trabalhador), PPP(Gestão de Afastamento temporário e Condições Ambientais do Trabalho) e LTCAT(Laudo Técnico das Condições Ambientais de Trabalho).</p>
                            <p>Qualquer empreendimento que tenha funcionários registrados na CLT(com exceção para empresas de pequeno porte e microempreendedores individuais - MEI E ME com grau de risco I e II), estão sujeitas à obrigatoriedade do envio de eventos no eSocial para SST. Veja algumas multas do eSocial que podem ser aplicadas:</p>
                            <ul style={listStyle}>
                                <li><b className="font-bold">LTCAT - Laudo Técnico das Condições Ambientais do Trabalho = R$ 31.000,41*</b></li>
                                <p className="-mt-1 mb-2">Conforme Alínea N do inciso II do caput do Art. 283, Decreto 3048/99 (RPS). Port. Interministerial MPS/MF nº 26/2023, Art. 8 inciso IV.</p>
                                <li><b className="font-bold">CAT - Comunicação de Acidente de Trabalho (S-2210) = R$ 1.302,00 a R$ 7.507,49*</b></li>
                                <p>De acordo com Art. 22 da Lei 8213/91. Previsão Criminal (Art. 269 do Código Penal). Art. 169 da CLT.</p>
                                <li><b className="font-bold">ASO - Atestado de Saúde Ocupacional (S-2220) = de R$ 402,53 a R$ 4.025,33*</b></li>
                                <p>Conforme Art. 201 da CLT – serão punidas com multa de 3 (três) a 30 (trinta) vezes o valor de referência previsto no artigo 2º, conforme parágrafo único, da Lei nº 6.205, de 29 de abril de 1975, e as relacionadas à segurança do trabalho com multa de 5 (cinco) a 50 (cinquenta) vezes o mesmo valor.</p>
                                <li><b className="font-bold">PPP - Perfil Profissiográfico Previdenciário (S-2240) = R$ 3.100,06 a R$ 310.004,70*</b></li>
                                <p>De acordo com Alínea O do inciso II do caput do Art. 283, Decreto 3048/99 (RPS). Port. Interministerial MPS/MF nº 26/2023, Art. 8 inciso III.</p>
                            </ul>
                            <p className="font-bold -mt-3">*essas são algumas das multas, com valores variáveis, eventualmente, há outras em vigor, consute o decreto.</p>
                            <p className="font-bold -mt-3">As multas são variáveis e já estão valendo, por isso, é importante ficar atento e contar com um softawe para te ajudar.</p>
                            <h3 className='font-bold text-black mt-1'>Software de SST para eSocial:</h3>
                            <p>Atender as obrigatoriedades do eSocial com tantas atualizações, não é uma tarefa simples, visto que há prazos e possíveis multas caso descumprimento. A cada mudança do eSocial, diversas áreas dentro de uma empresa são afetadas, bem como: Departamento Pessoal e Recursos Humanos. Ter que elaborar toda a documentação com todos os mínimos detalhes e atualizar o sistema manualmente é uma missão quase impossível. Por isso, contar com um software de SST, pode ser a solução.</p>
                            <p>O SOC é um Software de Gestão de SST completo, com tudo que você e sua empresa precisa. Sendo 100% online, é o primeiro sistema de gestão ocupacional a obter a certificação ISO 27001, com a finalidade de garantir maior confiabilidaide e proteção dos dados gerenciados. Conforme os critérios internacionalmente reconhecidos pela ISO e pela LGPD (Lei Geral de Proteção de Dados).
                            </p>
                            <p>Com esse sistema, é possível reunir todas as informações em um só lugar, integrada diretamente com o eSocial e outros sistemas, assim você poderá acompanhar todos os prazos, até a confirmação do envio de documentos. Além disso, você consegue validar todos os dados antes de enviá-los ao Governo. E assim, evitando ter que refazer tudo e possíveis inconsistências.</p>
                            <p><br/></p>
                            <p>Fonte:<Link href="https://www.soc.com.br/blog-de-sst/multas-do-esocial-onde-elas-se-aplicam-e-quais-cuidados-tomar/" target="_blank">https://www.soc.com.br/blog-de-sst/multas-do-esocial-onde-elas-se-aplicam-e-quais-cuidados-tomar/</Link></p>                                   
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

    <Final />
    </main>
     </>
)


}