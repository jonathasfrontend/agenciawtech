import whatsapp from '../assets/logo-whatsapp.svg'

function Contato() {
  return(
    <form 
      action=""
      method="post"
      className="w-full flex items-center justify-center flex-col my-5"
      >
      
      <h1 className="text-4xl font-extrabold my-5 text-white">Entre em Contato</h1>

      <input type="text" name="name" id="" placeholder="Nome" 
      className="w-full h-10 mb-5 pl-3 rounded-md text-[#121214] font-semibold bg-zinc-200 outline-none"/>

      <input type="tel" name="tel" id="" placeholder="Numero de telefone" 
      className="w-full h-10 mb-5 pl-3 rounded-md text-[#121214] font-semibold bg-zinc-200 outline-none"/>

      <input type="email" name="email" id="" placeholder="Seu email e contato" 
      className="w-full h-10 mb-5 pl-3 rounded-md text-[#121214] font-semibold bg-zinc-200 outline-none"/>

      <textarea name="menssagem" id="" placeholder="Sua Menssagem"
      className="w-full h-[200px] resize-none mb-5 pl-3 pt-3 rounded-md text-[#121214] font-semibold bg-zinc-200 outline-none"></textarea>

      <div className="w-full flex flex-wrap items-center justify-center ">
        <input type="submit" value="Enviar seu pedido" 
        className="py-2 px-5 rounded-md text-[#121214] font-semibold bg-zinc-200 outline-none mr-2 cursor-pointer"/>

        <a href="https://wa.me/message/I7PZF6S2IM2DI1" 
        className="text-black text-base font-bold bg-lime-500 py-2 px-5 rounded-md flex items-center">
          <img src={whatsapp} className="w-5 mr-2" alt="" />
          Entre em contato
        </a>
      </div>
     </form>
  )
}

export default Contato