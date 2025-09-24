
'use client'
import { HeaderTable, BodyTable, HeaderTableGerbangMater, BodyTableGerbangMater } from '@/public/assets/data/table';
import React from 'react'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '../shadcn/table';
import { Edit, EyeIcon, Pen, Trash } from 'lucide-react';
import EditMasterGerbang from './EditMasterGerbang';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteGerbang, getGerbang } from '@/services/masterGerbang';
import { i } from 'motion/react-client';
import { toast } from 'sonner';
import ModalPreview from './ModalPreview';

interface Props {
  data: any
  isLoading: boolean
}

export default function TableMasterGerbang({data, isLoading}: Props) {
const queryClient = useQueryClient();

const deleteMutation = useMutation({
  mutationFn: deleteGerbang,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["gerbang"] });
    toast.error("Data berhasil dihapus.", {
      duration: 3000,
      position: "top-center",
      style: { backgroundColor: "#16a34a", color: "white" },
    });
  },
  onError: () => {
    toast.error("Data gagal dihapus.");
  },
});

if (isLoading) {
  return <div>Loading...</div>;
}

  return (
    <Table>
      <TableHeader>
        <TableRow>
            <TableHead className="capitalize bg-gray-200 fw-semibold">No</TableHead>
          {HeaderTableGerbangMater.map((header, index) => (
            <TableHead
              className="capitalize bg-gray-200 fw-semibold text-center"
              key={index}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: any, index: number) => (
          <TableRow key={index}>
            <TableCell className="text-sm">{index + 1}</TableCell>
            <TableCell className="text-sm text-center">{item?.NamaCabang}</TableCell>
            <TableCell className="text-sm text-center">{item?.NamaGerbang}</TableCell>
            <TableCell className="text-sm text-center">
                <div className="flex items-center gap-5 justify-center">
                    <EditMasterGerbang data={item}/>
                    <ModalPreview data={item}/>
                    <div className='text-red-500 cursor-pointer' onClick={() => deleteMutation.mutate({ id: item?.id, IdCabang: item?.IdCabang })}><Trash  width={19} height={25} /></div>
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
