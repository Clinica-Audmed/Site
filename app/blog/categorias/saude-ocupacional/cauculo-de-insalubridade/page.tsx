"use client"

import React from "react";
import Navbar from "@/app/components/navbar";
import Final from "@/app/components/final";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../../../../public/blog/SOC.png';
import Insalubridade from '../../../../../public/blog/Insalubridade-SaudeOcupacional.jpg'

export default function InsalubridadePage(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'circle',
      };
    return(<>
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
            Saiba como calcular o adicional de Insalubridade        
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
                            <h2>Saiba como calcular o adicional de Insalubridade</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 ">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>24 de janeiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                            <li><FontAwesomeIcon icon={faFolderOpen} className="mr-1"></FontAwesomeIcon>Saúde Ocupacional</li>
                        </ul>
                            <div className="entry-image">
                                <Link href="#"><Image src={Insalubridade} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                        <div className="entry-content notopmargin">
                            <h6 className='font-bold text-black mt-5'>Direito de profissionais que colocam sua saúde em risco durante seu trabalho, o adicional de insalubridade pode ser calculado de três maneiras.</h6>
                            <p>O adicional de insalubridade é um direito do trabalhador que exerce suas atividades em ambientes de risco, o que pode acabar prejudicando sua saúde.</p>                           
                            <h3 className='font-bold text-black '>O que é insalubridade no trabalho?</h3>
                            <p>A palavra insalubridade vem do adjetivo ‘insalubre’, que tem como significado ‘nocivo à saúde’. Esse termo é utilizado para descrever condições de trabalho que podem estar prejudicando o bem-estar e/ou saúde do colaborador. Entre os trabalhos insalubres, estão: a exposição a agentes nocivos, temperaturas extremas, ruídos excessivos e outros.</p>
                            <h3 className='text-black font-bold'>Legislação sobre o Adicional de Insalubridade</h3>
                            <p>A CLT, no artigo 189, diz que:</p>
                            <p>Serão consideradas atividades ou operações insalubres aqueles que, por sua natureza, condições ou métodos de trabalho, exponham os empregados a agentes nocivos à saúde, acima dos limites de tolerância fixados em razão da natureza e da intensidade do agente e do tempo de exposição aos seus efeitos.</p>
                            <p>Além disso, o artigo 7º responsável por versar sobre os direitos dos trabalhadores urbanos e rurais traz os seguintes textos:</p>
                            <p className='text-base my-0 '> XXII  -
                            <span className='whitespace-pre'>	</span>
                            redução dos riscos inerentes ao trabalho, por meio de normas de saúde, higiene e segurança;</p>
                            <p className='text-base my-0 '> XXIII  -
                            <span className='whitespace-pre'>	</span>
                            adicional de remuneração para as atividades penosas, insalubres ou perigosas, na forma da lei;</p>
                            <p>Dessa forma, fica claro o direito do colaborador de ser compensado pelos riscos.</p>
                            <p>Em específico, a Norma Regulamentadora 15, NR15, é a responsável por determinar quais os limites do que é considerado insalubre.</p>
                            <h3 className='text-black font-bold'>Quais são as atividades insalubres?</h3>
                            <p>As atividades insalubres são aquelas que colocam o trabalhador em contato com agentes nocivos à saúde, nos quais os limites são acima do permitido. E com isso, diversas profissões são consideradas insalubres, independente da formação do profissional e/ou experiência.</p>
                            <p>Veja alguns exemplos de condições que determinam a atividade ser insalubre:</p>
                            <ul style={listStyle}>
                                <li>Exposição ao calor ou frio;</li>
                                <li>Radiações ionizantes;</li>
                                <li>Radiações não ionizantes;</li>
                                <li>Agentes biológicos;</li>
                                <li>Agentes químicos;</li>
                                <li>Vibrações;</li>
                                <li>Ruídos contínuos ou intermitentes;</li>
                                <li>Ruídos de impacto;</li>
                                <li>Poeiras minerais;</li>
                                <li>Umidade;</li>
                                <li>Trabalho sob ar-comprimido;</li>
                                <li>E outros.</li>
                            </ul>
                            <h4 className='text-gray-700 text-2xl font-bold'>Profissionais que se encaixam em atividades insalubres:</h4>
                            <p>Há uma vasta lista de profissões que são consideradas insalubres, que são divididas em níveis e tempo de atividade especial. Veja alguns exemplos:</p>
                            <ul style={listStyle}>
                                <li>Fabricante de tinta;</li>
                                <li>Carregador de rochas;</li>
                                <li>Operador de britadeira;</li>
                                <li>Carregador de explosivos;</li>
                                <li>Trabalhadores em túneis;</li>
                                <li>Extrator de mercúrio e fósforo branco;</li>
                                <li>Bombeiros;</li>
                                <li>Eletricista acima de 250v;</li>
                                <li>Aeroviário;</li>
                                <li>Enfermeiro e auxiliar de enfermagem;</li>
                                <li>Jornalista;</li>
                                <li>Estivador;</li>
                                <li>Médicos;</li>
                                <li>Metalúrgicos;</li>
                                <li>Pescador;</li>
                                <li>Professor;</li>
                                <li>Mergulhador;</li>
                                <li>Operador de raio X;</li>
                                <li>Transporte urbano e ferroviário;</li>
                                <li>E outros;</li>
                            </ul>
                            <p>Existem diversas profissões que se encaixam em insalubres, e de qualquer tipo de empresa, desde escritórios à grandes fabricas.</p>
                            <h4 className='text-gray-700 text-2xl font-bold'>Grau de risco de Insalubridade e o adicional</h4>
                            <p>Os graus de insalubridade se dividem em três: mínimo, médio e máximo. E são esses graus que representam a porcentagem que deve ser paga ao empregado, e isso varia de acordo com o nível de riscos à saúde do colaborador.</p>
                            <ul style={listStyle}>
                                <li><b className="font-bold">Grau mínimo:</b> São consideradas atividades de grau mínimo, aquelas que os danos não são imediatos.</li>
                            </ul>
                            <p className="-mt-5">O grau mínimo traz um adicional de 10% do salário mínimo na remuneração do colaborador. Vamos fazer o cálculo com o salário mínimo de 2024:</p>
                            <p className="-mt-2">R$ 1.412 x 0,10 = 141,20. Se o trabalhador está nessa categoria, ele deve receber o salário dele e + 141,20.</p>
                            <ul style={listStyle}>
                                <li><b className="font-bold">Grau médio:</b> São consideradas atividades de grau médio, aquelas que colocam profissionais em risco, como bombeiros, eletricistas, médicos e enfermeiros.</li>
                            </ul>
                            <p className="-mt-5">O grau médio traz um adicional de 20% ao salário mínimo vigente. Com base no salário mínimo de 2024:</p>
                            <p className="-mt-2">R$ 1.412 x 0,20 = 282,40. Se o trabalhador está nessa categoria, ele deve receber o salário dele e + 282,40.</p>
                            <ul style={listStyle}>
                                <li><b className="font-bold">Grau máximo:</b> São consideradas atividades de grau mínimo, aquelas que os profissionais possuem alto risco durante o seu período de trabalho, como profissionais de saúde que atuam com pacientes portadores de doenças infecto-contagiosas ou um profissional carregador de rochas.</li>
                            </ul>
                            <p className="-mt-5">O grau máximo traz um adicional de 40% com base no salário mínimo vigente. Com base no salário mínimo de 2024:</p>
                            <p className="-mt-2">R$ 1.412 x 0,40 = 584,80. Se o trabalhador está nessa categoria, ele deve receber o salário dele e + 584,80.</p>
                            <h4 className=' font-bold'>Insalubridade x Periculosidade</h4>
                            <p>Qual a diferença entre Insalubridade e Periculosidade?</p>
                            <p>A insalubridade está relacionada a riscos à saúde, como exposição a agentes químicos, biológicos e físicos, e está prevista no artigo 189 da CLT. Já a periculosidade está relacionada a riscos de acidentes e danos físicos, como trabalho em altura, trabalho com equipamentos perigosos e outros, e está prevista no artigo 193 da CLT.</p>
                            <p>Muitos ficam em dúvida sobre os valores pagos, se é possivel acumular ambos e a resposta é não! O artigo 193, parágrafo 2° da CLT foi recepcionado pela Constituição Federal e veda a cumulação de dois adicionais, mesmo que os fatos gerados sejam distintos.</p>
                            <p>Com isso, o empregador deve optar sobre o adicional mais vantajoso. Na maioria dos casos, a periculosidade é escolhida, visto que a insalubridade tem como base o salário mínimo vigente e a periculosidade tem como base o salário do trabalhador </p>
                           
                        <br />
                            <p>Fonte:<Link href="https://www.soc.com.br/blog-de-sst/saiba-como-calcular-o-adicional-de-insalubridade/" target="_blank">https://www.soc.com.br/blog-de-sst/saiba-como-calcular-o-adicional-de-insalubridade/</Link></p>                                   
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