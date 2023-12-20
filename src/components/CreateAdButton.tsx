import * as Dialog from '@radix-ui/react-dialog';
import { AlignJustify } from 'lucide-react';

export function CreateAdButton(){
    return(
      <Dialog.Trigger>
        <AlignJustify className="w-6 h-6 text-white hidden menuBar" />
      </Dialog.Trigger>
    )
}