"use client"
import React from "react";
import Navbar from "@/app/components/navbar";
import Final from "@/app/components/final";
import Logo from '../../../../../public/blog/SOC.png';
import NR10 from '../../../../../public/blog/Nr10.webp'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";



export default function Nr10Exigências(){
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
            NR10: quais são as exigências para se adequar à Norma        
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
                            <h2>NR10: quais são as exigências para se adequar à Norma</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 ">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>09 de fevereiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                            <li><FontAwesomeIcon icon={faFolderOpen} className="mr-1"></FontAwesomeIcon>Segurança do Trabalho</li>
                        </ul>
                        <div className="entry-image">
                    <Link href="/blog/categorias/seguranca-do-trabalho/nr10-principais-exigencias"><Image src={NR10} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                    </div>
                        <div className="entry-content notopmargin">
                            <h6 className='font-bold text-gray-400 mt-5'>A NR10 é a norma que diz sobre Segurança em instalações e serviços de eletricidade e é uma das mais extensas e detalhadas. Conheça algumas exigências e como as empresas devem se adaptar a elas.</h6>
                            <p>A Norma Regulamentadora 10, ou NR10, É a norma que diz sobre Segurança em instalações e serviços em eletricidade. Desse modo, estabelece requisitos e condições para que os profissionais possam atuar de forma segura nas instalações de serviços elétricos.</p>
                            <p>Todas as empresas(setor público ou privado) que tenham quaisquer atividades que envolvem eletricidade devem adotar à esta norma. Sua atuação é ampla e passa por:</p>
                            <ul style={listStyle}>
                            <li>Planejamento de instalações elétricas;</li>
                            <li>Construção, montagem, operação e manutenção de instalações;</li>
                            <li>Geração, transmissão, distribuição e consumo de energia elétrica.</li>
                            </ul>
                            <h3 className='font-bold text-black '>Veja quais são as exigências da NR10:</h3>
                            <p>A NR10 é uma das normas mais extensas e detalhadas, isso porque abrange diversas áreas e tipos de empresas. Veja algumas destas exigências:</p>
                            <h4 className="font-semibold text-gray-700 text-xl">Prevenção de Riscos</h4>
                            <p>São necessárias medidas de controle, a fim de fazer uma análise de riscos e reduzir o número de acidentes. Atualizar os desenhos das instalações elétricas, ter profissionais habilitados para realizar prontuários de instalações elétricas e apresentar prontuário dse intalações elétricas e disponibilizar para os trabalhadores, são algumas das medidas para se adequar a essa exigência.</p>
                            <ul style={listStyle}>
                                <li>Ter o prontuário de instalação elétrica com todas as exigências necessárias: esse prontuário deve conter uma série de informações, como a documentação das inspeções contra descargas atmosféricas e aterramentos elétricos, relatório de inspeção com cronogramas de adequações, especificação dos EPIs e EPCs, resultado de testes de isolação térmica de EPIs e EPCs, detalhamento do procedimento de emergência, certificação da capacitação dos trabalhadores e treinamentos realizados, e certificação de equipamentos e materiais elétricos em áreas classificadas e de EPI e EPC.</li>
                                <li>Medidas de proteção individual: essas medidas precisam seguir a NR6, norma que estabelece o uso de EPI. Ainda, a NR10 recomenda que as vestimentas de trabalho sejam adequadas de acordo com as atividades que estão sendo desempenhadas. E recomenda-se que seja proibido o uso de adornos pessoais em trabalhos com instalações elétricas e em sua proximidade. É importante seguir a NR6, toda a disposição está presente em seus anexos.</li>
                                <li>Medidas de proteção coletiva: além da proteção individual, deve-se atentar às medidas de proteção coletiva. Essas medidas possuem duas formas principais de serem implementadas, por meio do uso de tensão de segurança ou por meio da desenergização elétrica. Ainda há alternativas como o uso de obstáculos, uso de sinalização, uso de barreiras, bloqueio do religamento automático, uso de sistemas de saccionamento automático de alimentação e outros.</li>
                            </ul>
                            <h4 className="font-semibold text-gray-700 text-xl">Gestão de Riscos</h4>
                            <p>Além de prevenir os riscos, é necessario fazer a gestão dos mesmos, a fim de estar sempre reforçando as ações que devem ser tomadas em caso de trabalho em instalações elétricas desenergizadas e energizadas e trabahlo em alta tensão.</p>
                            <ul style={listStyle}>
                                <li>Segurança em instalações elétricas energizadas: os trabalhadores devem receber treinamentos sobre instalações elétricas energizadas, o manuseio de instalações elétricas a partir de 50 volts em corrente alternada(CA) e 120 volts em corrente contínua(CC) só pode ser realizado por profissionais habilitados, os trabalhos feitos na zona controlada devem seguir procedimentos específico, a análise de risco deve ser desenvolvida sempre que novas tecnologias forem usadas e ainda, a ligação e desligamento de circuitos em baixa tensão e com materiais em bom estado de conservação podem ser realizadas por qualquer pessoa não advertida. </li>
                                <li>Segurança em instalações elétricas desenergizadas: os trabalhadores devem ter confirmação de ausência de tensão, receber o impedimento de reenergização e o seccionamento, além disso, a instalação de aterramento temporário deve ser feita com equipotencialização dos condutores dos circuitos, deve ser feita a instalação da sinalização de impedimento da reenergização e a proteção de elementos energizados existentes na zona controlada.</li>
                            </ul>
                            <h4 className="font-semibold text-gray-700 text-xl">Passo a passo para a reenergização</h4>
                            <p>A NR10 estabelece que a desenergização deve ser mantida até ser autorizada a reenergização. Ainda, existe um passo a passo para ser feito:</p>
                            <ol className="list-decimal">
                                <li>a) Retirar as ferramentas, utensílios e equipamentos;</li>
                                <li>b) Retirar a zona controlada de todos os trabalhadores não envolvidos no processo de reenergização;</li>
                                <li>c) Remover o aterramento temporário, da equipotencialização e das proteções adicionais;</li>
                                <li>d) Remover a sinalização de impedimento de reenergização; e</li>
                                <li>e) Destravar, se houver, e religar os dispositivos de seccionamento.</li>
                            </ol>
                            <h4 className="font-semibold text-gray-700 text-xl">Trabalho em alta tensão</h4>
                            <p>Para o trabalho de alta tensão, a NR10 estabelece que:</p> 
                            <ul style={listStyle}>
                                <li>Os equipamentos desativados devem ser sinalizados;</li>
                                <li>Serviços de instalação não podem ser realizados individualmente;</li>
                                <li>Os procedimentos só podem ser executados mediante o uso de ordens de serviço, contendo todas as informações necessárias;</li>
                                <li>Os dispositivos isolantes devem ser submetidos a testes periodicamente de acordo com as recomendações dos fabricantes;</li>
                                <li>Os trabalhadores devem dispor de mecanismos de comunicação permanente com a equipe o centro de operações enquanto realiza, os serviços;</li>
                                <li>Os procedimentos só podem ser executados quando estiverem detalhados e assinados por profissionais qualificados;</li>
                                <li>Antes da instalação elétrica, uma avaliação técnica deve ser realizada pela equipe.</li>
                            </ul> 
                            <h4 className="font-semibold text-gray-700 text-xl">Segurança em projetos</h4>

                            <p>Quando falamos de projetos que envolvam eletricidade, a NR10 tem exigências para o projeto, como:</p>
                            <ul style={listStyle}>
                                <li>Identificar e instalar separadamente os circuitos elétricos com finalidade diferentes;</li>
                                <li>Projetar dispositivos de seccionamento que incorporem recursos fixos de equipotencialização e aterramento do circuito seccionado;</li>
                                <li>Definir o esquema de aterramento e prever condições para aterramento temporário;</li>
                                <li>Especificar dispositivos de desligamento de circuito que tenham recursos que impeçam a reenergização e que tenham sinalização de advertência;</li>
                                <li>Prever a instalação de dispositivos de seccionamento de ação simultânea;</li>
                                <li>O projeto deve ser assinado por um profissional habilitado, ficar à disposição de consulta de trabalhadores e de autoridades competentes e descrever todos os itens de segurança exigidos no tópico 10.3.9 da NR10;</li>
                                <li>Considerar os serviços de instalação e manutenção pensando em um espaço seguro para sua realização, levando em conta o dimensionamento, localização dos componentes e influências extremas.</li>
                                </ul>
                            <p>Ainda na Segurança em projetos, a NR reforça que medidas de controle adicionais devem ser tomadas. Essas medidas devem considerar altura, fauna, flora, explosividade, poeira, umidade, confinamento, campos elétricos e magnéticos. Entre as exigências estão:</p>
                            <ul style={listStyle}>
                            <li>Sinalização de segurança;</li>
                            <li>Medição e testagem de equipamentos com isolamento elétrico;</li>
                            <li>Uso de equipamentos compátíveis com a instalação elétrica e adequados à tensão envolvida;</li>
                            <li>Garantia de iluminação adequada aos serviços e posição de trabalho segura;</li>
                            <li>Realização de inspeção no sistema de proteção da rede elétrica.</li>
                            </ul>
                            <h4 className="font-semibold text-gray-700 text-xl">Sinalização de Segurança</h4>
                            <p>Com o intuito de previnir a saúde do colaborador que está realizando esse tipo de trabalho, a NR10 exige que a sinalização de segurança esteja de acordo dom a NR26. Com atenção para:</p>
                            <ul style={listStyle}>
                                <li>Delimitação de áreas;</li>
                                <li>Identificação de circuitos elétricos;</li>
                                <li>Restrições e impedimento de acesso;</li>
                                <li>Sinalização de impedimento de energização;</li>
                                <li>Travamento e bloqueios de dispositivos e sistemas de manobra e comandos;</li>
                                <li>Identificação de equipamento ou circuito impedido;</li>
                                <li>Sinalização de áreas de circulação de vias púlicas, veículos e movimentação de cargas.</li>
                            </ul>
                            <h4 className="font-semibold text-gray-700 text-xl">Procedimento de trabalho</h4>
                            <p>De acordo com a NR10, os procedimentos de trabalho devem ter um padrão. A norma exige que:</p>
                            <ul style={listStyle}>
                                <li>A equipe deve contar com um trabalhador para fazer a condução e supervisão dos serviços;</li>
                                <li>Os procedimentos de trabalho devem conter objetivo, campo de aplicação, base técnica, competências e responsabilidades, disposições gerais, medidas de controle e orientações finais;</li>
                                <li>Uma avaliação em conjunto deve ser realizada antes da realização do serviço considerando os principais aspectos da atividade;</li>
                                <li>Ordens de serviço sejam emtidas antes do início de cada serviço com informações sobre tipo, data e local do serviço.</li>
                            </ul>
                            <h3 className='font-bold text-black '>Tipos de Profissionais de acordo com a NR10</h3>
                            <p>Existem diferentes tipos de profissionais que podem trabalhar com instalações elétricas, e são divididos em:</p>
                            <ul style={listStyle}>
                                <li>Profissionais qualificados: aquele que possui um curso específico na área de elétrica;</li>
                                <li>Profissionais habilitados: que possuem registro no conselho de classe;</li>
                                <li>Profissionais capacitados: que possui capacitação de um profissional habilitado e autorizado e que trabalha sob responsabilidade de outro profissional que também é habilitado e autorizado;</li>
                                <li>Profissionais autorizados: que são qualificados ou capacitados e habilitados.</li>
                            </ul>
                            <p>Ainda, é estipulado que os trabalhadores autorizados devem realizar exames médicos de acordo com as suas funções, seguindo o que consta na NR17. Além disso, os trabalhadores autorizados precisam realizar um curso de capacitação para conhecimento dos riscos e medidas de prevenção, que deve ser reciclado a cada dois anos.</p>
                            <h4 className="font-semibold text-gray-700 text-xl">Controle de Danos</h4>
                            <p>A NR10 possui orientações para que as empresas e os trabalhadores possam enfrentar os riscos e ter o controle de danos em casos de emergências:</p>
                            <ul style={listStyle}>
                                <li>Proteção contra incêndio e explosão: Segundo a NR23, os locais em que equipamentos elétricos estiverem dispostos, precisam contar com protreções contra incêndios e explosões. Já os materiais utilizados em instalações elétricas necessitam de uma avaliação sobre suas conformidades e aquelas que podem acumular eletricidade estática carecem de proteção específica e dispositivos de descarga elétrica.</li>
                                <li>Ações de emergência: A norma diz que os trabalhadores autorizados estejam aptos a realizar resgates e primeiros socorros, os métodos de resgates sejam padronizados e os trabalahadores estejam capacitados para manusear equipamentos de prevenção e combate a incêndios.</li>
                            </ul>
                            <p>É importante ressaltar que os trabalhadores são responsáveis por garantir a sua segurança e dos outros pro meio de suas ações. Ainda, são responsáveis pro cumprir as normas regulamentadoras.</p>
                            <h3 className='font-bold text-black '>O não cumprimento da NR10</h3>
                            <p>Assim como qualquer outra NR, há penalidades para a empresa que não cumprir a NR10, as mesmas podem ser penalizadas com multas, embargos e interdições, que podem causar paralização total ou parcial das atividades da empresas.    </p>
                            <br />
                            <p>Fonte:<Link href="https://www.soc.com.br/blog-de-sst/nr10-quais-sao-as-principais-exigencias-para-se-adequar-a-norma/" target="_blank">https://www.soc.com.br/blog-de-sst/nr10-quais-sao-as-principais-exigencias-para-se-adequar-a-norma/</Link></p>                                   
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
