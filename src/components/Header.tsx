import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdButton } from "./CreateAdButton";
import CreateAdModal from './CreateAdModal';

function Header() {
  return(
    <div className="w-full flex items-center justify-between">
      <h1 className="text-2xl text-white font-extrabold">Agêcia WTHECH</h1>
      
      <Dialog.Root>
        <CreateAdButton />
        <CreateAdModal /> 
      </Dialog.Root>

      <ul className="flex items-center gap-4 contentHeader">
        <li className="text-white text-base font-bold"><a href="">Inicio</a></li>
        <li className="text-white text-base font-bold"><a href="">Por que nós?</a></li>
        <li className="text-white text-base font-bold"><a href="">Portifolio</a></li>
        <li className="text-white text-base font-bold"><a href="">Duvidas</a></li>
        <li className="text-white text-base font-bold bg-blue-700 py-2 px-5 rounded-md"><a href="https://wa.me/message/I7PZF6S2IM2DI1">Contato</a></li>
      </ul>
    </div>
  )
}

export default Header