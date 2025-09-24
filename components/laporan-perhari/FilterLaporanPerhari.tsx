'use client'
import React, { useState } from 'react'
import { Calendar } from '../shadcn/calendar';
import { Button } from '../shadcn/button';
import { DatePickerSingle } from '../ui/datepicker';
import { useLaporanLalin } from '@/context/LaporanLalinContext';

interface FilterDashboardProps {
    className?: string
}

export default function FilterLaporanPerhari({className}: FilterDashboardProps) {
  const [date, setDate] = useState<Date>();
  const {setParamsFilter} = useLaporanLalin();


  const handleFilter = () => {
    let params = {
      tanggal: date?.toISOString().split("T")[0] || null,
    };
    setParamsFilter(params);
  }

  const handleReset = () => {
    setParamsFilter({});
    setDate(undefined);
  }

  return (
    <div className="relative flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          {/* <input
            className="p-2 rounded-lg border focus-visible:none"
            type="text"
            placeholder="Pencarian"
          /> */}
          <div className="relative">
            <DatePickerSingle className={className} onChange={setDate} dateProps={date}/>

            {/* <input
            className="p-2 rounded-lg border focus-visible:none"
            type="text"
            placeholder="Pilih tanggal"
            onClick={() => setOpenCalendar(!openCalendar)}
          />
          <div className={`absolute z-10 ${openCalendar ? "block" : "hidden"}`}>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className={`rounded-lg border w-full ${className}`}
            />
          </div> */}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleFilter}>Filter</Button>
          <Button className="bg-gray-100 border-gray-400 text-black hover:bg-gray-200" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
