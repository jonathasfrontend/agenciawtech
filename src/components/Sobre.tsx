import { Code, Search, Palette, MonitorSmartphone, PenSquare } from 'lucide-react'

function Sobre() {
  return (
    <div className="flex justify-center items-center mt-6 flex-col">
       
        <h1 className="text-4xl font-bold my-2 text-white">Por Que Nós?</h1>
        <p className="text-base font-medium text-zinc-500 mb-5 text-center">Uma experiência incrível para seus clientes, resultados espetaculares para sua empresa.</p>

        <div className="w-full flex items-center justify-center flex-wrap gap-5 ">

          <div className="w-[330px] h-[200px] overflow-hidden flex flex-col items-center justify-center bg-[#313136] p-5 rounded-md">
            <div className="w-full h-full flex items-center justify-center my-2">
              <div className="w-9 h-9 bg-red-300 p-[6px] rounded-full">
                <Palette className=' text-red-800' />
              </div>
              <h1 className="text-xl font-semibold text-white ml-2">Design UI/UX</h1>
            </div>
            <p className='text-sm text-white font-medium text-justify'>Especializados em programação, UX e UI, nosso foco é claro: desenvolver landing pages que não apenas atraem, mas envolvem seu público, transformando visitantes em clientes entusiastas.</p>
          </div>

          <div className="w-[330px] h-[200px] overflow-hidden flex flex-col items-center justify-center bg-[#313136] p-5 rounded-md">
            <div className="w-full h-full flex items-center justify-center my-2">
              <div className="w-9 h-9 bg-cyan-300 p-[6px] rounded-full">
                <Code className=' text-sky-600 ' />
              </div>
              <h1 className="text-xl font-semibold text-white ml-2">Programador web</h1>
            </div>
            <p className='text-sm text-white font-medium text-justify'> Utilizamos tecnologias de última geração para garantir que seu site não apenas funcione perfeitamente, mas também seja rápido, responsivo em dispositivos móveis.</p>
          </div>

          <div className="w-[330px] h-[200px] overflow-hidden flex flex-col items-center justify-center bg-[#313136] p-5 rounded-md">
            <div className="w-full h-full flex items-center justify-center my-2">
              <div className="w-9 h-9  bg-green-300 p-[6px] rounded-full">
                <Search className=' text-green-700' />
              </div>
              <h1 className="text-xl font-semibold text-white ml-2">SEO</h1>
            </div>
            <p className='text-sm text-white font-medium text-justify'>Nossas técnicas de SEO são cuidadosamente integradas desde o início, garantindo que seu site não só atraia tráfego, mas também alcance as posições mais altas nos motores de busca, gerando visibilidade e autoridade.</p>
          </div>

          <div className="w-[330px] h-[200px] overflow-hidden flex flex-col items-center justify-center bg-[#313136] p-5 rounded-md">
            <div className="w-full h-full flex items-center justify-center my-2">
              <div className="w-9 h-9 t-amber-600 bg-yellow-200 p-[6px] rounded-full">
                <MonitorSmartphone className=' text-amber-600 ' />
              </div>
              <h1 className="text-xl font-semibold text-white ml-2">Responsivo</h1>
            </div>
            <p className='text-sm text-white font-medium text-justify'>Reconhecemos a importância da experiência do usuário em todos os dispositivos. Cada site que construímos é completamente responsivo, garantindo que sua mensagem e funcionalidade brilhem em qualquer tela, de smartphones a desktops.</p>
          </div>

          <div className="w-[330px] h-[200px] overflow-hidden flex flex-col items-center justify-center bg-[#313136] p-5 rounded-md">
            <div className="w-full h-full flex items-center justify-center my-2">
              <div className="w-9 h-9 t-amber-600 bg-[#bfaaff] p-[6px] rounded-full">
                <PenSquare className=' text-[#8056FF] ' />
              </div>
              <h1 className="text-xl font-semibold text-white ml-2">Planejamento impecável</h1>
            </div>
            <p className='text-sm text-white font-medium text-justify'>Conte com a Agência Bold como sua parceira no planejamento de seus projetos, conteúdos, campanhas, estratégias. Nossos profissionais altamente qualificados estão preparados para qualquer desafio</p>
          </div>

        </div>

      </div>
  )
}

export default Sobre