'use client'
import React, { use, useMemo, useState } from 'react'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../shadcn/table'
import { BodyTable, HeaderTable } from '@/public/assets/data/table'
import { useQuery } from '@tanstack/react-query';
import { getLaporanLalin } from '@/services/laporanLalin';
import { useLaporanLalin } from '@/context/LaporanLalinContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../shadcn/tabs';
import { TabsMenu } from '@/public/assets/data/menu';
import DynamicPagination from '../ui/dynamicpagination';

export default function TableLaporanPerhari() {
  const { paramsFilter} = useLaporanLalin();
  const paramsMemo = useMemo(() => paramsFilter, [paramsFilter]);

  const { data, isLoading } = useQuery({
    queryKey: ["laporanLalin", paramsMemo],
    queryFn: async () => getLaporanLalin(paramsMemo),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <Tabs defaultValue="e-toll" className='gap-5'>
        <TabsList>
          {TabsMenu?.map((menu, index) => (
            <TabsTrigger value={menu} key={index} className="capitalize">
              {menu}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="e-toll">
          <TableLaporan
            data={data}
            header={[
              "eBca",
              "eBni",
              "eBri",
              "eDKI",
              "eMandiri",
              "eMega",
              "eNobu",
              "Tanggal",
            ]}
          />
        </TabsContent>
        <TabsContent value="ktp">
          <TableLaporan
            data={data}
            header={["DinasKary", "DinasMitra", "DinasOpr", "Tanggal"]}
          />
        </TabsContent>
        <TabsContent value="flo">
          <TableLaporan data={data} header={["eFlo", "Tanggal"]} />
        </TabsContent>
        <TabsContent value="tunai">
          <TableLaporan data={data} header={["Tunai", "Tanggal"]} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TableLaporan({ data, header }: ITableLaporan) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data?.length / 15);
  const startIndex = (currentPage - 1) * 15;
  const endIndex = Math.min(startIndex + 15, data?.length);
    const goToPage = (page:number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

    const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4">
      <Table>
        <TableHeader>
          <TableRow>
            {header.map((header, index) => (
              <TableHead
                className="capitalize bg-gray-200 fw-semibold"
                key={index}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentPageData?.map((item: any, index: number) => (
            <TableRow key={index}>
              {header.map((_, idx) => (
                <TableCell className="text-sm" key={idx}>
                  {_ == "Tanggal" ? item?.[_]?.split("T")[0] : item?.[_]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>

      <DynamicPagination
        totalItems={data?.length}
        itemsPerPage={15}
        currentPage={currentPage}
        onPageChange={goToPage}
        maxVisiblePages={20}
      />
    </div>
  );
}

interface ITableLaporan {
  data: any;
  header: string[];
}
