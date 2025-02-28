"use client"
import Final from "@/app/components/final";
import Navbar from "@/app/components/navbar";
import { faCalendarDays, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Perdaauditiva from '../../../../../public/blog/perdaAuditiva.jpg'
import Logo from '../../../../../public/blog/SOC.png';
export default function PerdaAuditiva(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'circle',
      };
    return(
        <>
        <Navbar />
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
            Perda auditiva ocupacional e a importância da Audiometria        
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
                            <h2>Perda auditiva ocupacional e a importância da Audiometria</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 ">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>20 de fevereiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                            <li><FontAwesomeIcon icon={faFolderOpen} className="mr-1"></FontAwesomeIcon>Saúde Ocupacional, Segurança do Trabalho</li>
                        </ul>
                            <div className="entry-image">
                                <Link href="#"><Image src={Perdaauditiva} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                        <div className="entry-content notopmargin">
                            <h6 className='font-bold text-black mt-5'>A Perda Auditiva Ocupacional é uma das maiores doenças do trabalho atualmente e por isso, saber identificá-la e cuidar dos colaboradores é imprescíndivel.</h6>
                            <br /> 
                            <p>A Organização Mundial da Saúde (OMS) estimou que 1 a cada 4 pessoas terão problemas auditivos até 2050. Isso pode ocorrer devido a fatores e um dos motivos principais é o trabalho. A perda auditiva é mais comum do que se imagina e precisa ser observada por todos.</p>
                            <br />
                            <h3 className='font-bold text-black  '>Como identificar uma perda auditiva ocupacional?</h3>
                            <br/>
                            <p>Existem diversos sintomas para a perda auditiva, e é importante que os colaboradores e empregadores fiquem atentos aos sinais, para que seja identificado ainda em sua fase inicial. Veja só:</p>
                            <ul style={listStyle}>
                                <li>Dores de cabeça;</li>
                                <li>Alteração do sono;</li>
                                <li>Sensação de ouvir zumbidos;</li>
                                <li>Irritação e ansiedade;</li>
                                <li>Dificuldades para entender a fala durante conversas;</li>
                                <li>Isolamento social;</li>
                                <li>Falta de atenção;</li>
                                <li>Falta de concentração;</li>
                                <li>Tontura;</li>
                                <li>Falar alto;</li>
                                <li>Depressão.</li>
                            </ul>                            
                            <h4 className='text-gray-700 text-2xl font-bold'>Causas da perda auditiva ocupacional</h4>
                            <br />
                            <p>As causas da perda auditiva ocupacional podem ser várias. A mais conhecida é a PAIR: Perda Auditiva Induzida por Ruído. No entanto, ainda existem outros fatores como o calor, a vibração e as substâncias químicas.</p>
                            <h3 className='text-black font-bold'>PAIR - Perda Auditiva Induzida por Ruído</h3>
                            <p>O tipo mais comum de perda auditiva relacionada à atividade laboral é a Perda Auditiva Induzida por Ruído (PAIR).</p>
                            <p>A PAIR é provocada pela exposição prolongada ao ruído. Esse tipo de perda auditiva é principalmente caracterizada pela diminuição gradual da acuidade auditiva. É do tipo neurossensorial, geralmente bilateral e é irreversível. Além disso, quanto mais tempo dse exposição ao ruído, mais ela progride.</p>
                            <p>A PAIR causa degeneração das células ciliadas ao orgão de corti (ouvido interno), e não possui tratamento eficaz, mesmo após o afastamento ao trabalho, não há possibilidade de melhora.</p>
                            <h4 className='text-gray-700 text-2xl font-bold'>A perda auditiva e a depressão</h4>
                            <p>A depressão é um dos sintomas da perda auditiva, e muitas pessoas ficam em dúvida em como essa doença pode se relacionar a perda auditiva.</p>
                            <p>Primeiro, é necessário explicar o que é a depressão. Essa doença caracteriza-se como um distúrbio de origem multifatorial, na qual envolve inúmeros aspectos psicológicos, biológicos e sociais. Em relação à perda auditiva, pode ser causada por diversos fatores. Veja:</p>
                            <ul style={listStyle}>
                                <li>Isolamento: a perda auditiva interfere na comunicação com outras pessoas e no equilíbrio. Com isso, o isolamento acaba levando à depressão.</li>
                                <li>Baixa autoestima: a perda auditiva limita a pessoa a fazer o que ela gosta, como assistir a um filme, conversar com um amigo em um restaurante, assistir a um show... Isso geraum sentimento de inutilidade, e consequentemente, baixa autoestima.</li>
                                <li>Tristeza: o sentimento de incapacidade por não conseguir se comunicar, pela falta de paciência das pessoas e o fato de não poder fazer as coisas que costumava gostar, gera uma tristeza profunda.</li>
                            </ul>
                            <h3 className='text-black font-bold'>Profissões que tem alta probabilidade de causar perda auditiva</h3>
                            <p>A Perda Auditiva é uma das doenças do trabalho mais comuns em todo o mundo. E existem diversas profissões que contribuem para esse tipo de doença. Veja alguns exemplos:</p>
                            <ul style={listStyle}>
                                <li>Tripulante de voo: os profissionais da aviação passam muito tempo expostos a fortes ruídos das aeronaves. Os mesmos experimentam até 130 decibéis de ruído durante a decolagem, esse número é capaz de romper um tímpano.</li>
                                <li>Profissionais de construção civil: profissionais dessa área estão expostos a ruídos altos e contínuos, chegando a 125 decibéis e podendo ultrapassar.</li>
                                <li>Músicos e/ou profissionais do áudio: se escutar música em volume alto já faz mal para audição, imagine trabalhar com isso no dia a dia. Os músicos estão expostos em média a 125 decibéis todos os dias, o que causa danos aos ouvidos.</li>
                                <li>Odontologista: o dentista também está exposto a altos ruídos, e estão expostos a 115 decibéis durante sua jornada de trabalho.</li>
                                <li>Motorista de Ambulância ou motorista de carro de polícia: o barulho da sirene é extremamente agudo, e por isso, motoristas desse tipo de veículo estão expostos a 120 decibéis diariamente.</li>
                                <li>Outros: ainda há inúmeras profissões que podem causar perda auditiva, o uso do EPI é imprescíndivel e ainda, cuidar da saúde no dia a dia, tal como ir a consultas médicas, tambem são cuidados essenciais.</li>
                                
                            </ul>
                            <br />
                            <h3 className='text-black font-bold'>Audiometria</h3>
                            <p>A audiometria é um exame rápido e indolor que mede a capacidade auditiva e de interpretação dos sons. Muitas vezes, esse exame é solicitado como um exame admissional, para profissionais que atuam com fortes níveis de pressão sonora.</p>
                            <p>A audiometria é um exame necessário para diagnosticar possíveis perdas na audição provocadas pela exposição ao ruído, em níveis que ultrapassem os limites permitidos de acordo com o Programa de Controle Médico de Saúde Ocupacional (PCMSO). Pensando na importância do tema para o cotidiano dos profissionais de Segurança e Saúde do Trabalho (SST), o SOC – Software Integrado de Gestão Ocupacional tem funcionalidades específicas para a audiometria, ampliando as facilidades que médicos e fonoaudiólogos têm à disposição no momento dos exames, laudos e resultados.</p>
                            <p>O <Link href={'https://www.soc.com.br/'}>SOC</Link> permite o cadastro do aparelho audiométrico, contendo a data de aferição, limite do audiômetro e os valores são múltiplos de cinco. Ele avisa o fonoaudiólogo se o equipamento está com a calibração vencida e possibilita a paramentrização da linha de normalidade, por exemplo, no padrão de 25 dB ou de acordo com critérios estabelecidos pelo Médico Coordenador da empresa, servindo de referência para o laudo médico após o exame padrão.</p>
                            <h4 className='text-gray-700 text-2xl font-bold'>Graus de perda auditiva ocupacional</h4>
                            <p>Ao fazer a audiometria, você terá dados sobre o grau de sua perda, o que dá assistência ao tratamento adequado. A Organização Mundial de Saúde delimitar 7 graus de perda auditiva.</p>
                            <ul style={listStyle}>
                                <li>Audição normal: perda abaixo de 20dB</li>
                                <li>Leve: entre 20dB e 35dB de perda auditiva</li>
                                <li>Moderado: entre 35dB e 50dB de perda auditiva</li>
                                <li>Moderadamente severo: entre 50dB e 65dB de perda auditiva</li>
                                <li>Severo: entre 65dB e 80dB de perda auditiva</li>
                                <li>Profundo: entre 80dB e 95dB de perda auditiva</li>
                                <li>Perda completa/Surdo: acima de 95dB de perda auditiva</li>
                            </ul>
                            <h4 className='text-gray-700 text-2xl font-bold'>O que fazer em casos de perda auditiva decorrente do trabalho?</h4>
                            <p>Quando o colaborador tem perda auditiva causada pelas condições de trabalho, é direito do mesmo receber indenização.</p>
                            <p>No entanto, é necessário ter laudos técnicos que demonstre a perda da capacidade auditiva, comprovando que não é de natureza congênita ou degenerativa.</p>

                        <br />
                            <p>Fonte:<Link href="https://www.soc.com.br/blog-de-sst/perda-auditiva-ocupacional-e-a-importancia-da-audiometria/" target="_blank">https://www.soc.com.br/blog-de-sst/perda-auditiva-ocupacional-e-a-importancia-da-audiometria/</Link></p>                                   
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