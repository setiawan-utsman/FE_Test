import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";
import { EyeIcon } from 'lucide-react';

interface IProps {
  data?: any
}
export default function ModalPreview({ data }: IProps) {
    // console.log(data, 'data preview');?
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='cursor-pointer'>
          <EyeIcon width={19} height={20} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Detail</DialogTitle>
          <DialogDescription>Detail Data Gerbang</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div>Id Cabang : <span className='font-semibold'>{data?.IdCabang}</span></div>
          <div>Nama Cabang : <span className='font-semibold'>{data?.NamaCabang}</span></div>
          <div>NamaGerbang : <span className='font-semibold'>{data?.NamaGerbang}</span></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
