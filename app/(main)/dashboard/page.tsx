"use client";
import FilterDashboard from "@/components/dashboard/FilterDashboard";
import Echart from "@/components/echart/Echart";
import { useLaporanLalin } from "@/context/LaporanLalinContext";
import { DATA1, DATA2, DATA3, DATA4 } from "@/public/assets/data/dummy";
import { getLaporanLalin } from "@/services/laporanLalin";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo } from "react";

export default function DashboardPage() {
  const { paramsFilter } = useLaporanLalin();
  const paramsMemo = useMemo(() => paramsFilter, [paramsFilter]);
  const [dataEtoll, setDataEtoll] = React.useState<any>();
  const [dataKtp, setDataKtp] = React.useState<any>();

  const { data, isLoading } = useQuery({
    queryKey: ["laporanLalin", paramsMemo],
    queryFn: async () => getLaporanLalin(paramsMemo),
  });

  useEffect(() => {
    if (data) {
      data.forEach((item: any) => {
        const eTollData: any = {};
        const ktpData: any = {};
        const otherData: any = {};

        Object.entries(item).forEach(([key, value]) => {
          const lowerKey = key.toLowerCase();

          if (lowerKey.startsWith("e") && lowerKey !== "e") {
            // e-toll cluster (keys starting with 'e')
            eTollData[key] = value;
          } else if (lowerKey.startsWith("din")) {
            // KTP cluster (keys starting with 'din')
            ktpData[key] = value;
          } else {
            // Other data
            otherData[key] = value;
          }
        });
        setDataEtoll(eTollData);
        setDataKtp(ktpData);
      });
    }
  }, [data]);


  return (
    <div className="flex flex-col gap-6">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="col-span-2">
          <FilterDashboard className="w-56 mt-2" />
        </div>
        {isLoading && <div>Loading...</div>}
        {data?.length === 0 ? (
          <div className="text-center text-gray-500">Data tidak ditemukan</div>
        ) : (
          <>
            <div className="col-span-1">
              <div className="w-full h-60">
                <Echart
                  parser="bar"
                  data={dataEtoll}
                  namexAxis="E-Toll"
                  nameyAxis="Jumlah Transaksi"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-60">
                <Echart parser="pie" data={dataEtoll} />
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-60">
                <Echart
                  parser="bar"
                  data={dataKtp}
                  namexAxis=""
                  nameyAxis="Jumlah Lalin"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-60">
                <Echart parser="pie" data={dataKtp} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
