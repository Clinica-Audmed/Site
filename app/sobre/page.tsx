"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar"
import Link from 'next/link';
import Image from 'next/image';
import British from '../../public/clientes/british.jpg';
import Robiel from '../../public/clientes/robiel.png';
import Hella from '../../public/clientes/Hella.png';
import Schott from '../../public/clientes/schott-logo.png';
import Valoren from '../../public/clientes/valoren.png';
import Intralox from '../../public/clientes/intralox.png';
import Zarin from '../../public/clientes/Zarin.jpg';
import Frente from '../../public/Fachada clinica1.png';
import Final from '../components/final';

export default function SobreClinica(){
    return(
        <>
        <Navbar/> 
        <section id="page-title">
        <div className="sobre">
        <h1 className="container">Sobre</h1>
       <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                Sobre
            </li>
        </ol>
        </div>
    </section>   
    <main id="descricao">
    <section className='-mt-10 mb-8'>
       <Image src={Frente} alt='' className=' ml-auto mr-auto shadow-xl border-black h-96 w-full md:w-3/4 lg:w-2/4'/>
       </section>            
        <section className="titulo">
            <h1>A AUDMED</h1>
            <span>Nós cuidamos da saúde de seus colaboradores.</span>
        </section>
       <section className="container">
        <div className="roww">
            <div className="descritivos col-md-5">
            <h3 className="text-lg font-semibold mb-7 leading-6 ml-4 md:ml-0 lg:ml-0">Nossa Empresa</h3>
            <p className="text2 ml-4 md:ml-0 lg:ml-0 mr-4 md:mr-0 lg:mr-0">A Clínica Audmed oferece ampla assessoria às empresas para atender às exigências do Ministério do Trabalho e Emprego, especialmente no que se refere à Medicina e Segurança do Trabalho. Por meio de nossa equipe e parceiros, primamos pela qualidade dos serviços prestados, proporcionando assessoria a pequenas, médias e grandes empresas em Indaiatuba e região. Estamos localizados na Rua Ademar de Barros, número 491, no Centro de Indaiatuba-SP, contando com infraestrutura adequada para a realização de exames médicos ocupacionais e complementares.  </p>
            </div>
            <div className="descritivos col-md-6 ml-12">
                <h3 className="text-lg font-semibold mb-7 leading-6 ml-4 md:ml-0 lg:ml-0">Nossos Objetivos</h3> 
                <p className="text2 ml-4 md:ml-0 lg:ml-0 mr-4 md:mr-0 lg:mr-0">Manter seus Clientes totalmente informados quanto à Saúde e Segurança do Trabalho de seus empregados, através da emissão dos Relatórios Gerenciais informatizados;<br/>
                    Realizar a Gestão da Saúde Ocupacional e da Segurança do Trabalho de forma responsável e eficaz, possibilitando a empresa manter o foco em seu próprio negócio;<br/>
                    Auxiliar na elaboração de programas de prevenção customizados para seus clientes;<br/>
                    Atuar na promoção da Saúde e do bem-estar no ambiente de trabalho;<br/>
                    Cumprir a legislação trabalhista vigente no tocante à Saúde e Segurança do Trabalho;<br/>
                    Padronizar e normatizar as ações voltadas ao controle médico da saúde ocupacional;<br/>
                    Auxiliar no controle e redução dos índices de acidentes de trabalhos e de doenças profissionais;</p>
                </div>
            </div>
       </section>
       
       <section >
        <div className="container">
    <div className="roww clçaa">
    <div className="descritivos2 col-md-4 -ml-6 mr-3 md:mr-0 lg:mr-0 md:-ml-12 lg:-ml-12">
        <h4 className='text-xl font-semibold'>MISSÃO</h4>       
        <p className="text">Atuar no ramo da Medicina Ocupacional e Segurança do Trabalho com o objetivo de assegurar a integridade física e mental dos colaboradores, com o máximo de excelência.</p>
    </div>
    <div className="descritivos2 desc1 col-md-4 -ml-7 md:mr-0 lg:mr-0 md:ml-11 lg:ml-11">
        <h4 className='text-xl font-semibold'>VISÃO</h4>
        <p className="text">Ser reconhecida pela excelência no ramo de nossas atividades, atendendo as necessidades e expectativas de nossos clientes e de seus colaboradores.</p>
        </div>  
    <div className="descritivos2 desc2 col-md-4 -ml-7 md:-mr-96 lg:-mr-96 md:ml-11 lg:ml-11">
        <h4 className='text-xl font-semibold'>VALORES</h4>
        <p className="text">Pioneirismo;<br/>
            Ética;<br />
            Humildade;<br />
            Foco no cliente;<br />
            Inovação;<br />
            Empatia;<br />
            </p>
        </div>  
    </div>
    </div>
    </section>
    <section id="fotoo">
    <div className="foto" data-stellar-background-ratio="0.3">
    <div className="container clearfix">
        <div className="col-md-5 offset-md-6 text-black font-bold mr-8">
              <h2>AUDMED ATUA NA MEDICINA E SEGURANÇA DO TRABALHO HÁ 25 ANOS</h2>
              <ul>
                <li>Conformidade com o e-Social</li>
                <li>Localização com fácil acesso</li>
                <li>Equipe de profissionais altamente capacitados</li>
                <li>Referencia no segmento em Indaiatuba e região</li>
            </ul>
              
        </div>
    </div>
    </div>
    </section>
    <section>
    <div className="container mt-20">
        <h2 className='text-center font-thin text-3xl leading-6'>Algumas de nossas empresas clientes:</h2>
        <div className="cont">
       <Link href={'https://www.robiel.com/'} target='_blank'><Image className="clientes" src={Valoren} alt="Robiel Logo" /></Link>
       <Link href={'https://www.british.com.br/site/'} target='_blank'><Image className="clientes lg:-mt-0 md:-mt-0 -mt-10 h-40" src={Intralox} alt="Bristish Logo" /></Link>
       <Link href={'https://www.robiel.com/'} target='_blank'><Image className="clientes" src={Robiel} alt="Robiel Logo" /></Link>
       <Link href={'https://www.british.com.br/site/'} target='_blank'><Image className="clientes lg:-mt-0 md:-mt-0 -mt-10" src={British} alt="Bristish Logo" /></Link>
       <Link href={'https://www.schott.com/pt-br/flat-glass'} target='_blank'><Image className="clientes" src={Schott} alt="Schott Logo" /></Link>
       <Link href={'https://www.hella.com/hella-br/pt/Empresa-23.html'} target='_blank'><Image className="clientes lg:mt-0 md:mt-0 mt-10" src={Hella} alt="Hella Logo" /></Link>
       <Link href={'https://grupozarin.com.br/'} target='_blank'><Image className="clientes lg:mt-0 md:mt-0 mt-10" src={Zarin} alt="Zarin Logo" /></Link>
        </div> 
    </div>
</section>
<Final/>
   </main>
        </>
    )
}
