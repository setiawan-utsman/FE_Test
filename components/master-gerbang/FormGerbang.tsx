'use client'
import React, { useEffect } from 'react'
import { Label } from '../shadcn/label';
import { Input } from '../shadcn/input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DialogClose, DialogFooter } from '../shadcn/dialog';
import { Button } from '../shadcn/button';

interface IProps {
    onClick?: (data: any) => void;
    data?: any
}

export default function FormGerbang({onClick, data}: IProps) {
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  defaultValues: {
    id: data?.id || 1,
    IdCabang: data?.IdCabang || "",
    NamaGerbang: data?.NamaGerbang || "",
    NamaCabang: data?.NamaCabang || "",
  },
});


  const onSubmit = async(formData: any) => {
   if(onClick) onClick(formData);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-3 col-span-2">
          <Label htmlFor="name-1">Id Cabang</Label>
          <Input
            className="focus-visible:outline-none focus-visible:ring-0 disabled:bg-slate-200"
            id="IdCabang"
            placeholder="Id Cabang"
            disabled={data?.IdCabang}
            {...register("IdCabang")}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">Nama Gerbang</Label>
          <Input
            className="focus-visible:outline-none focus-visible:ring-0"
            id="NamaGerbang"
            placeholder="Nama Gerbang"
            {...register("NamaGerbang")}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">Nama Cabang</Label>
          <Input
            className="focus-visible:outline-none focus-visible:ring-0"
            id="NamaCabang"
            placeholder="Nama Cabang"
            {...register("NamaCabang")}
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Batal</Button>
        </DialogClose>
        <Button type="button" onClick={handleSubmit(onSubmit)}>
          Simpan
        </Button>
      </DialogFooter>
    </>
  );
}
