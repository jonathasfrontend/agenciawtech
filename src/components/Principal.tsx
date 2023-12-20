import mockup from '../assets/mockup.svg';

function Princial() {
  return (
    <div className="w-full flex items-center justify-between flex-col">
      <h1 className="text-[50px] font-bold text-white mt-[5.6rem] text-center">Promova experiências aos seus clientes</h1>
      <p className="text-base font-light text-white my-5">E veja resultados expressivos dia após dia</p>
      <a href="https://sventv.vercel.app"><img src={mockup} alt="" /></a>
    </div>
  )
}

export default Princial
