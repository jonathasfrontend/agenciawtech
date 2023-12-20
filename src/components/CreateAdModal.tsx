import * as Dialog from '@radix-ui/react-dialog';
import { X } from "lucide-react"

function CreateAdModal() {
  return(

    <Dialog.Portal>
      <Dialog.Overlay className="inset-0 fixed"/>
      <Dialog.Content className="bg-[#121214] fixed px-[2%] py-5 text-white h-full w-full top-0 left-0">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-2xl text-white font-extrabold">Agêcia WTHECH</Dialog.Title>
          <Dialog.Close type="button"><X className="w-6 h-6 text-white" /></Dialog.Close>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center ">
          <div className="w-full flex flex-col items-center gap-5 ">
            <li className="text-white text-base font-bold w-full h-12 flex items-center justify-center bg-blue-700 rounded-md"><a href="">Inicio</a></li>
            <li className="text-white text-base font-bold w-full h-12 flex items-center justify-center bg-blue-700 rounded-md"><a href="">Por que nós?</a></li>
            <li className="text-white text-base font-bold w-full h-12 flex items-center justify-center bg-blue-700 rounded-md"><a href="">Portifolio</a></li>
            <li className="text-white text-base font-bold w-full h-12 flex items-center justify-center bg-blue-700 rounded-md"><a href="">Duvidas</a></li>
            <li className="text-white text-base font-bold w-full h-12 flex items-center justify-center bg-blue-700 rounded-md"><a href="https://wa.me/message/I7PZF6S2IM2DI1">Contato</a></li>
          </div>
        </div>
      </Dialog.Content>

    </Dialog.Portal>
        

  )
}

export default CreateAdModal