"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import Image from 'next/image';
import Cipa from '../../public/Cipa.jpg';
import Nr06 from '../../public/NR06.jpg';
import Nr10 from '../../public/NR10.jpg';
import Nr11 from '../../public/NR11.jpg';
import NR11Ponte from '../../public/Nr11-PonteRolante.jpg';
import Nr12 from '../../public/NR12.png';
import Nr13 from '../../public/NR13.jpg';
import Nr17 from '../../public/NR17.jpeg';
import Nr18 from '../../public/NR18.jpg';
import Nr23 from '../../public/NR23.jpg';
import Nr33 from '../../public/NR33.jpg';
import Nr35 from '../../public/NR35.jpg';
import QualidadeDeVida from '../../public/Qualidade-de-vida.jpg';
import IsteAids from '../../public/Aids e Ist.jpg';
import Assedio from '../../public/Assédio moral e sexual.png';
import MeioAmbiente from '../../public/Meio Ambiente.png';
import EpiERiscos from '../../public/EPI e Riscos.jpeg';
import Tabagismo from '../../public/TabagismoEAlcoolismo.jpg';
import PrimeiroSocorros from '../../public/PrimeiroSocorros.jpg';
import Ergonomia from '../../public/Ergonomia.png';
import Massoterapia from '../../public/Massoterapia.jpg';
import Ginastica from '../../public/Ginastica Laboral.png';
import SaudeMental from '../../public/Saude mental.jpeg';
import SetembroAmarelo from '../../public/SetembroAmarelo.jpg';
import OutubroRosa from '../../public/OutubroRosa.png';
import NovembroAzul from '../../public/NovembroAzul.png';
import Link from 'next/link';
import { useState } from 'react';

export default function Treinamentos() {
    const [alternar, setAlternar] = useState(true);
    const listStyle:React.CSSProperties = {
        listStyleType: 'square',
      }; 
    const buttonStyles = {
        container: {
          display: 'flex',
          justifyContent: 'center',
          margin: '20px 0', // Ajuste a margem conforme necessário
        },
        button: {
          backgroundColor: 'lightgray',
          color: 'black',
          border: '1px solid darkgray',
          borderRadius: '5px',
          margin: '0 10px', // Ajuste a margem conforme necessário
          padding: '10px 20px',
          cursor: 'pointer',
          fontWeight: 'bold', // Adiciona letra mais grossa (negrito)
          width: '150px', // Ajuste a largura conforme necessário
        },
        selectedButton: {
          backgroundColor: 'green',
          color: 'white',
          fontWeight: 'bold', // Adiciona letra mais grossa (negrito)
          width: '150px', // Ajuste a largura conforme necessário
        },
      };
      

  
    return (
      <>
        <Navbar />
  
        <section id="page-title" >
          <div className="sobre">
            <h1 className="container">{alternar ? 'TREINAMENTOS' : 'PALESTRAS'}</h1>
            <ol className="breadcrumb ">
              <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
              </li>
              <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
              <li className="ads hidden md:inline-block lg:inline-block">
                Treinamentos e Palestras
              </li>
            </ol>
          </div>
        </section>
  
        <div style={buttonStyles.container}>
          <button
            onClick={() => setAlternar(true)}
            style={Object.assign({}, buttonStyles.button, alternar && buttonStyles.selectedButton)}
          >
            Treinamentos
          </button>
          <button
            onClick={() => setAlternar(false)}
            style={Object.assign({}, buttonStyles.button, !alternar && buttonStyles.selectedButton)}
          >
            Palestras
          </button>
        </div>
        <main id="descricao ">
          <section id="content">
            <div className="titulo title">
              <h1>{alternar ? 'TREINAMENTOS' : 'PALESTRAS'}</h1>
              <span className='m-6 md:m-0 lg:m-0 '>A AUDMED oferece diferentes tipos de {alternar ? 'treinamentos' : 'palestras'} em medicina e <br /> segurança do trabalho</span>
            </div>
          </section>
          <section className="container clearfix bottommargin padding">
            <div className="row servicos bottommargin-sm ">
              {alternar && (<>
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-05-Comissao-Interna-de-Prevencao-de-Acidentes-e-Assedio"><Image src={Cipa} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-05-Comissao-Interna-de-Prevencao-de-Acidentes-e-Assedio" ><h4 className="text-lg text-black font-bold"><span className="badge">
                        NR-05
                    </span>
                    Comissão Interna de Prevenção de Acidentes e Assédio - CIPA</h4></Link>
                <p>CIPA é uma comissão formada por empregados da empresa para trabalhar em busca de saúde e segurança do trabalho. O foco da comissão é trabalhar para evitar acidentes e/ou doenças relacionadas ao trabalho. A norma que regulamenta a CIPA(Comissão Interna de Prevenção de Acidentes e Assédio) nas empresas é a NR 5</p>                
            </div>
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-06-Equipamento-de-Protecao-Individual"><Image src={Nr06} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-06-Equipamento-de-Protecao-Individual">
                        <h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-06
                    </span>
                    Equipamento de Proteção Individual(EPI)</h4>
                    </Link>
                <p>Regulamenta a execução do trabalho com uso de Equipamentos de Proteção Individual (EPI), sem estar condicionada a setores ou atividades econômicas específicas.</p>                
            </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-10-Seguranca-em-Instalacoes-Eletricas"><Image src={Nr10} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-10-Seguranca-em-Instalacoes-Eletricas"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-10
                    </span>
                    Segurança em instalações e serviços em eletricidade</h4></Link>
                <p>NR 10 - Esta Norma Regulamentadora estabelece os requisitos e condições mínimas objetivando a implementação de medidas de controle e sistemas preventivos, de forma a garantir a segurança e a saúde dos trabalhadores que, direta ou indiretamente, interajam em instalações elétricas e serviços com eletricidade.</p>
                </div>
            
            <div className="row servicos bottommargin-sm ">
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-11-Operacao-em-Empilhadeira"><Image src={Nr11} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-11-Operacao-em-Empilhadeira" ><h4 className="text-lg text-black font-bold"><span className="badge">
                        NR-11
                    </span>
                    Operação em Empilhadeira</h4></Link>
                <p>O Treinamento de Operação de Empilhadeira tem porn objetivo desenvolver capacidades para operar empilhadeira seguindo procedimentos, normas e legislação técnica de segurança, saúde e meio ambiente.</p>                
            </div>
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-11-Operacao-em-Empilhadeira"><Image src={NR11Ponte} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-11-Operacao-em-Empilhadeira" ><h4 className="text-lg text-black font-bold"><span className="badge">
                        NR-11
                    </span>
                    Ponte Rolante</h4></Link>
                <p>Os equipamentos utilizados na movimentação de materias, tais como ascensores, elevadores de carga, guindaste, monta-carga, pontes-rolantes, talhas, empilhadeiras, guinchos, esteiras-rolantes, transportadores de diferentes tipos, serão calculados e construídos de maneira que ofereçam as necessárias garantias de resistência e segurança e conservados em perfeitas condiçoes de trabalho. </p>                
            </div>
            <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-12-Adequacao-de-Maquinas"><Image src={Nr12} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-12-Adequacao-de-Maquinas">
                        <h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-12
                    </span>
                    Adequação de Máquinas</h4></Link>
                <p>Esta NR e seus anexos definem referências técnicas, princípios fundamentais e medidas de proteção para resguardar a saúde e a integridade física dos trabalhadores e estabelece requisitos mínimos para a prevenção de acidentes e doenças do trabalho nas fases de projeto e de utilização de máquinas e equipamentos.</p>
                </div>
            </div>
            <div className="row servicos bottommargin-sm ">
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-13-Vasos-de-Pressao"><Image src={Nr13} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-13-Vasos-de-Pressao"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-13
                    </span>
                    Vasos de Pressão</h4></Link>
                <p>NR-13 estabelece requisitos mínimos para gestão da integridade estrutural de caldeiras a vapor, vasos de pressão e suas tubulações de interligação nos aspectos relacionados à instalação, inspeção, operação e manutenção, visando a segurança e saúde dos trabalhadores.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-17-Ergonomia-AGP-AET"><Image src={Nr17} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-17-Ergonomia-AGP-AET"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-17
                    </span>
                    Ergonomia / AGP / AET</h4></Link>
                    <p>Trata dos parâmetros necessários para garantir conforto, segurança e saúde para os colaboradores, com o intuito de evitar que ocorram doenças causadas por esforço repetitivo.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-18-Seguranca-e-Saude-no-Trabalho-na-Industria-da-Construcao"><Image src={Nr18} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-18-Seguranca-e-Saude-no-Trabalho-na-Industria-da-Construcao" ><h4 className="text-lg text-black font-bold"><span className="badge">
                        NR-18
                    </span>
                    Segurança e Saúde no Trabalho na Industria da Construção</h4></Link>
                <p>Para fins desta NR, considera-se trabalho a quente as atividades de soldagem, goivagem, esmerilhamento, corte ou outras que possam gerar fontes de ignição, tais como aquecimento, centilha ou chama.</p>                
            </div>
            </div>
            <div className="row servicos bottommargin-sm">
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-23-Brigada-de-Incendio"><Image src={Nr23} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-23-Brigada-de-Incendio"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-23
                    </span>
                    Brigada de Incêndio</h4></Link>
                <p>Capacitar, atualizar e centificar profissionais em conformidade com a IT 17 e NR 23, nas ações de prevenção e combate a princípios de incêndio. Instrumentalizar os participantes do curso a procederem de forma segura, de modo a garantir sua própia segurança, das possíveis vítimas e do patrimônio em risco.</p>                
            </div>
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-33-Espaco-Confinado"><Image src={Nr33} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-33-Espaco-Confinado">
                        <h4 className="text-lg text-black font-semibold" ><span className="badge">
                        NR-33
                    </span>
                    Trabalho em Espaço Confinado</h4></Link>
                <p>Esta Norma Regulamentadora, tem como objetivo estabelecer os requisitos para a caracterização dos espaços confinados e as medidas de prevenção, de forma a garantir a segurança e a saúde dos trabalhadores que interagem ou indiretamente com estes espaços.    
                </p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-35-Seguranca-do-Trabalho-em-Altura"><Image src={Nr35} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-35-Seguranca-do-Trabalho-em-Altura"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-35
                    </span>
                    Segurança do Trabalho em Altura</h4></Link>
                <p>Este treinamento aborda os requisitos e as medidas de proteção as atividades realizadas em altura, envolvendo o planejamento, organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores envolvidos direta ou indiretamente.</p>
                </div>
            </div>
        </>)}
        {!alternar && (
                <>
     <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={EpiERiscos} className="bottommargin-sm h-64" alt=""/>
                    </div>
                   <h4 className="text-lg text-black font-bold ml-1">
                    EPI e Riscos</h4>
                <p className='-mt-1'>Destaca a importância do uso adequado de EPIs para prevenir acidentes e minimizar exposições a riscos ocupacionais. Explora os diferentes tipos de EPIs e aborda estratégias para identificar, avaliar e controlar os riscos no ambiente de trabalho.</p>                
            </div>
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={Ergonomia} className="bottommargin-sm h-64" alt=""/>
                    </div>
                        <h4 className="text-lg text-black font-semibold ml-1">
                    Ergonomia</h4>
                   
                <p className='-mt-1'>Explora a importância da adaptação do ambiente de trabalho e das práticas laborais para otimizar o desempenho e prevenir problemas de saúde relacionados ao trabalho. Destaca conceitos-chave, como postura adequada, mobiliário ergonômico e organização do espaço, visando a promoção do bem-estar e eficiência no ambiente profissional.</p>                
            </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={PrimeiroSocorros} className="bottommargin-sm h-64" alt=""/>
                    </div>
                    <h4 className="text-lg text-black font-semibold ml-1">
                    Primeiros Socorros</h4>
                <p className='-mt-1'>A palestra sobre Primeiros Socorros abrange técnicas essenciais, incluindo RCP, controle de hemorragias, imobilização de fraturas e manejo de emergências médicas. Os participantes aprendem a agir de maneira eficaz em situações críticas, proporcionando assistência inicial até a chegada de ajuda profissional.</p>
                </div>
            
            <div className="row servicos bottommargin-sm ">
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={Tabagismo} className="bottommargin-sm h-64" alt=""/>
                    </div>
                    <h4 className="text-lg text-black font-bold ml-1">
                    Tabagismo e Alcoolismo</h4>
                <p className='-mt-1'>O objetivo é proporcionar entendimento sobre os impactos negativos desses hábitos, destacando os danos à saúde física e mental, bem como os riscos de dependência. A palestra visa incentivar a conscientização sobre os benefícios de parar de fumar e reduzir o consumo de álcool, promovendo estilos de vida saudáveis. Além disso, aborda estratégias de prevenção, recursos disponíveis para tratamento e a importância do apoio social na superação dessas dependências. </p>                
            </div>
            <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={IsteAids} className="bottommargin-sm h-64" alt=""/>
                    </div>
                        <h4 className="text-lg text-black font-semibold ml-1">
                   IST / AIDS</h4>
                <p className='-mt-1'>O objetivo é informar sobre práticas seguras, promover o uso de métodos preventivos, e desmistificar estigmas associados a essas doenças. Além disso, destaca-se a importância do diagnóstico precoce, acesso a tratamento e educação contínua para reduzir a propagação dessas infecções e melhorar a qualidade de vida das pessoas afetadas.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={SaudeMental} className="bottommargin-sm h-64" alt=""/>
                    </div>
                    <h4 className="text-lg text-black font-semibold ml-1">
                   Saúde Mental</h4>
                <p className='-mt-1'>A pessoa precisa estar bem consigo mesma e aceitar as exigências da vida, o contrário impacta no seu raciocínio, comportamentos e no relacionamento interpessoal. Algumas características, como poder de persuasão, foco, frieza para tomar decisões, ousadia para assumir riscos e certa indiferença em relação à opinião alheia devem ser observadas e principalmente cuidadas</p>
                </div>
            </div>
            <div className="row servicos bottommargin-sm ">
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={Assedio} className="bottommargin-sm h-64" alt=""/>
                    </div>
                   <h4 className="text-lg text-black font-semibold ml-1">
                    Assédio Sexual e Moral</h4>
                    <p className='-mt-1'>Toda conduta abusiva, de natureza psicológica que atenta cintra a dignidade psiquica, de forma repetitiva e prolongada e que expõe o trabalhador a situações humilhantes e constrangedoras, capazes de causar ofensa à dignidade ou a integridade psíquica, que tenha por efeito excluir a posição do empregado ou deteriorar o ambiente de trabalho, durante o exercícios de suas funções.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                       <Image src={QualidadeDeVida} className="bottommargin-sm h-64" alt=""/>
                    </div>
                    <h4 className="text-lg text-black font-bold ml-1">
                    Qualidade de Vida</h4>
                <p className='-mt-1'>A Qualidade de Vida compreende um conjunto de condições e ações que contribuem para o Bem-Estar no trabalho, na vida social e familiar do trabalhador.</p> 
                <ul style={listStyle} className='-ml-3 -mt-3'>
                <li>Alimentação</li>
                <li>Diabetes</li>
                <li>Obesidade</li>
                <li>Atividade Física</li>    
                </ul>               
            </div>
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={Massoterapia} className="bottommargin-sm h-64" alt=""/>
                    </div>
                    <h4 className="text-lg text-black font-semibold ml-1">
                    Massoterapia</h4>
                <p className='-mt-1'>As sessões de Quick Massage que auxiliam no melhor funcionamento do sistema respiratório, digestivo, além de melhorar a circulação sanguinea proporcionando Saúde e Bem-Estar.</p>                
                <ul style={listStyle} className='-ml-3 -mt-3'>
                <li>Controle do Stress</li>
                <li>Diminui a Ansiedade</li>
                <li>Alivia dores musculares</li>
                <li>Reduz o cansaço e a insônia</li>    
                </ul>   
            </div>
            </div>
            <div className="row servicos bottommargin-sm ">
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={Ginastica} className="bottommargin-sm h-64" alt=""/>
                    </div>
                        <h4 className="text-lg text-black font-semibold ml-1">
                    Ginastica Laboral</h4>
                <p className='-mt-1'>A NR-33 é uma norma para trabalhos confinados, que estabelece medidas de prevenção, medidas administrativas, medidas pessoais, capacitação e medidas para situações de emergências.</p>
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                       <Image src={MeioAmbiente} className="bottommargin-sm h-64" alt=""/>
                    </div>
                    <h4 className="text-lg text-black font-semibold ml-1">
                    Meio Ambiente</h4>
                <p className='-mt-1'>Torna-se cada vez mais exigentes e fundamental o nosso compromisso com a preservação do meio ambiente, os recursos naturais e necessaários para nossa sobrevivência.
                    Precisamos repensar, cuidar, recusar, reduzir, reciclar e reutilizar, juntos podemos construir um futuro mais limpo, saudavél e sustentável
                </p>
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                       <Image src={SetembroAmarelo} className="bottommargin-sm h-64" alt=""/>
                    </div>
                    <h4 className="text-lg text-black font-semibold ml-1">
                   Setembro Amarelo</h4>
                <p className='-mt-1'>Segundo a Organização Mundial da Saúde (OMS), no mundo, ocorre um suicídio a cada 40 segundos. Estudos mostram que o estresse ocupa a segunda posição entre os problemas de saúde relacionados ao trabalho.</p>
                </div>
            </div>
            <div className="row servicos bottommargin-sm ">
            <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Image src={OutubroRosa} className="bottommargin-sm h-64" alt=""/>
                    </div>
                        <h4 className="text-lg text-black font-semibold ml-2">
                    Outubro Rosa</h4>
                <p className='-mt-1'>Objetivo de compartilhar informações e promover a conscientização sobre a doença, proporcionar maior acesso aos serviços de diagnóstico e de tratamento e contribuir para a redução da mortalidade.
                </p>
                <ul style={listStyle} className='-ml-3 -mt-3'>
                <li>Anatomia da mama, Diagnóstico</li>
                <li>Tipos de câncer de mama, Autoexame</li>
                <li>Fatores de risco, Tipos de tratamento</li>
                <li>Sinais e sintomas</li>    
                </ul> 
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                       <Image src={NovembroAzul} className="bottommargin-sm h-64" alt=""/>
                    </div>
                    <h4 className="text-lg text-black font-semibold ml-1">
                    Novembro Azul</h4>
                <p className='-mt-1'>Voltado para a conscientização do câncer de próstata e alertar os homens da importância do diagnóstico precoce.</p>
                <ul style={listStyle} className='-ml-3 -mt-3'>
                <li>Anatomia da próstata, Diagnóstico</li>
                <li>Tipos de câncer de próstata, Autoexame</li>
                <li>Fatores de risco, Tipos de tratamento</li>
                <li>Sinais e sintomas</li>    
                </ul> 
                </div>
                
            </div>
                </>
              )}
            </div>
          </section>
        </main>
        <Final/>
      </>
    );
}
