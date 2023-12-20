import whatsapp from '../assets/logo-whatsapp.svg'

function Contatowhats() {
  return(
    <div className="w-full px-0 py-0 bannerMeio my-10 flex items-center justify-center flex-col">
      <h1 className="text-4xl font-normal my-2 text-white text-center">Vamos Começar Seu Projeto?</h1>
      <p className="text-sm font-normal my-2 text-white">Fale agora mesmo com um de nossos consultores!</p>
      
      <a href="https://wa.me/message/I7PZF6S2IM2DI1" 
      className="text-black text-base font-bold bg-lime-500 py-2 px-5 rounded-md flex items-center">
        <img src={whatsapp} className="w-5 mr-2" alt="" />
        Entre em contato
      </a>
    </div>
  )
}

export default Contatowhats