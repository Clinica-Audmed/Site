"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Foto from '../../../public/servicosfts/ltcat.jpg'


export default function LtcatService(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'square',
      }; 
    return(
        <>
        <Navbar/>
        <section id="page-title">
        <div className="sobre">
        <h1 className="container">Serviços</h1>
        <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
               <Link href="/servicos">Serviços</Link> 
            </li>
            <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                LTCAT - Laudo Técnico das Condições Ambientais de Trabalho  
            </li>
        </ol>
        </div>
    </section>
    <main id="descricao">            
   <section id="content" className='mb-0'>
    <div className="content-padding">
        <div className="container roww clearflix">
        <div className="col-md-2 md:-ml-8 lg:-ml-8">
                <h4 className='font-bold text-xl' >Outros Serviços:</h4>
                <div className="outrosservice">
                    <ul style={listStyle} className='text-sm' >
                        <li className='mb-2'>
                        <Link href="/servicos/pcmso" className='text-black'>
                        PCMSO - Programa de Controle Médico de Saúde Ocupacional</Link>
                        </li>
                        <li className='mb-2'>
                        <Link href="/servicos/pgr" className='text-black'>
                        PGR - Programa de Gerenciamento de Riscos</Link>
                        </li>
                        <li>
                        <Link href="/servicos/esocial" className='text-black'>
                        ESocial - Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10 ml-2"  >
                <div className="semmarginbotton">
                    <div className="clearflix">
                        <div className='relative mt-0'>
                        <div className="entry-image alignleft">
                        <Image src={Foto} alt="" width={500}/>
                        </div>
                        <p >O LTCAT (Laudo Técnico de Condições Ambientais do Trabalho) é um documento com fins previdenciários, elaborado por Engenheiro de Segurança do Trabalho e/ou Médico do trabalho, cujo objetivo é emitir um parecer conclusivo sobre as condições ambientais a que o funcionário foi exposto, devendo refletir a realidade no momento da inspeção.</p>
                        <p>Para isso, são realizadas avaliações qualitativas e quantitativas a fim de analisar os riscos físicos (ruído, calor, radiações, vibrações, pressões, temperatura extrermas ), químicos (poeiras, névoas, fumos, neblinas) e biológicos (bactérias, vírus, fungos, parasitas) presentes no ambiente.</p>    
                        <p><br/></p>    
                        <p><span className='font-bold mt-5'>As empresas podem ser multadas caso não possuam o LTCAT?</span></p>    
                        <p>O parágrafo 3º do Art. 58 d Lei 8213/91 com o texto dado pela Lei 9528/97 diz que: </p>    
                        <p>A empresa que não mantiver laudo técnico atualizado com referência aos agentes nocivos existentes no ambiente de trabalho de seus trabalhadores ou que emitir documento de comprovação de efetiva exposição em desacordo com o respectivo laudo, estará sujeito à penalidade prevista no Art. 133 desta Lei, que foi republicada na MP 1596-14 de 10.11.97 e convertida na Lei 9528 de 10.12.97  </p>    
                        <p></p>    
                        <p><span className='font-bold'>Como deve ser a disponibilidade do Laudo Técnico das Condições Ambientais de Trabalho</span></p>    
                        <p>Este documento deve estar disponível na empresa para análise dos Auditores Fiscais da Previdência Social, Médicos e Peritos do INSS, devendo ser realizadas as alterações necessárias no mesmo, sempre que as condições de nocividade se alterarem, guardando-se as descrições anteriormente existentes no referido Laudo, juntamente com as novas alterações introduzidas, datando-se adequadamente os documentos, quando tais modificações ocorrerem.</p>
                        <p></p>
                        <p><span className='font-bold'>Qual é o prazo de validade do LTCAT ?</span></p>
                        <p>O LTCAT deve ser renovado pelo menos uma vez ao ano, ou sempre que ocorrer qualquer alteração no ambiente de trabalho ou em sua organização.</p>
                        <p><br/></p>
                        <p><span className='font-bold'>Evolução da legislação que regulamenta o LTCAT (Laudo Técnico das Condições Ambientais de Trabalho)</span></p>
                        <p>A Lei 3807/60 introduziu o benefício denominado aposentadoria especial na legislação previdenciária que exigia a apresentação de Laudo Técnico somente para o agente ruído, não mencionando esta exigência para os demais agentes Nocivos.</p>
                        <p>A Constituição Federal de 1988, Com o novo ordenamento jurídico do país sancionou a concessão de aposentadorias no regime geral de Previdência Social, que passou a ter critério único, com exceção das aposentadorias especiais. </p>
                        <p>A Lei 9032 - somente em 28.04.95 o Art. 57 desta Lei veio regulamentar o parágrafo 1º do Art. 201 da CF, exigindo na forma da lei que tais condições prejudicassem a saúde ou a integridade física. </p>
                        <p>MP 1532 - Em 11.10.96 a Lei 8213/91 teve alterações de seu texto com a edição da MP 1523 de 11.10.96, que originou a Lei 9528 de 10.12.97 que passou a exigir laudo técnico para todos os agentes nocivos. </p>
                        <p><br/></p>
                        <p><span className='font-bold'>A Lei 9732 de 11.12.98, parágrafo 1º do Artigo 58 ficou com a redação:</span></p>
                        <p>A Comprovação da efetiva exposição do segurado aos agentes nocivos será feita mediante formulário, na forma estabelecida pelo INSS, emitido pela empresa ou seu preposto, com base em laudo técnico de condições ambientais do trabalho expedido por médico do trabalho ou engenheiro de segurança do trabalho.</p>                
                        <div><br/></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
        </div>       
    </div>
   </section>
        <Final/>
        </main>
        </>
    )
}