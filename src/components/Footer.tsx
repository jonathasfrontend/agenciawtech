import Header from "./Header"

function Footer() {
  return(
    <footer className="w-full px-36 py-5 bgPd text-center bg-sky-500 footer rounded-t-xl">
      <Header />
      <p className="text-sm font-normal font-mono my-1 text-white">
        Todos os direitos reservado ©agência_wtech | por
        <a href="https://github.com/jonathasfrontend" className="text-sm font-normal font-mono "> Jonathas_Oliveira</a></p>
    </footer>
  )
}

export default Footer