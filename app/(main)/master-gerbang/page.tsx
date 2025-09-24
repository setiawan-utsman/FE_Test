'use client';
import AddMasterGerbang from '@/components/master-gerbang/AddMasterGerbang';
import TableMasterGerbang from '@/components/master-gerbang/TableMasterGerbang';
import { getGerbang } from '@/services/masterGerbang';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'

export default function MasterGerbangPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["gerbang"],
    queryFn: getGerbang,
  });

  const [search, setSearch] = useState<string>("");

  const filteredData = data?.filter((item: any) =>
    item.NamaCabang.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="text-lg font-semibold">Master Gerbang</div>
      <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div className="col-span-1">
          <div className="flex justify-between w-100 items-center">
            <input
              className="p-2 rounded-lg border focus-visible:none"
              type="text"
              placeholder="Pencarian"
              onChange={(e) => setSearch(e.target.value)}
            />
            <AddMasterGerbang />
          </div>
        </div>
        <div className="col-span-1">
          <TableMasterGerbang data={filteredData} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
