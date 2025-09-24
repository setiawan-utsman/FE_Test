import FilterLaporanPerhari from '@/components/laporan-perhari/FilterLaporanPerhari';
import TableLaporanPerhari from '@/components/laporan-perhari/TableLaporanPerhari';
import { LaporanLalinProvider } from '@/context/LaporanLalinContext';
import React from 'react'

export default function LaporanPerhariPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-lg font-semibold">Laporan Lalin Per Hari</div>
      {/* <LaporanLalinProvider> */}
        <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-4">
          <div className="col-span-1">
            <FilterLaporanPerhari className="w-56 mt-2" />
          </div>
          <div className="col-span-1">
            <TableLaporanPerhari />
          </div>
        </div>
      {/* </LaporanLalinProvider> */}
    </div>
  );
}
