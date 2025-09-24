'use client'
import React, { useState } from 'react'
import { Calendar } from '../shadcn/calendar';
import { Button } from '../shadcn/button';
import { DatePickerSingle } from '../ui/datepicker';
import { useLaporanLalin } from '@/context/LaporanLalinContext';
// import { DatePickerDemo } from '../ui/datepicker';

interface FilterDashboardProps {
  className?: string
}
export default function FilterDashboard({className}: FilterDashboardProps) {
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
    };

  return (
    <div className='relative flex items-center'>
      <DatePickerSingle className={className} onChange={setDate} />

             <div className="flex items-center gap-2">
               <Button onClick={handleFilter}>Filter</Button>
               <Button className="bg-gray-100 border-gray-400 text-black hover:bg-gray-200" onClick={handleReset}>
                 Reset
               </Button>
             </div>
     
      {/* <input className='p-2 rounded-lg border focus-visible:none' type='text' placeholder='Pilih tanggal' onClick={() => setOpenCalendar(!openCalendar)} />
      <Button className='ms-2' onClick={() => setOpenCalendar(!openCalendar)}>Filter</Button>
      <div className={`absolute z-10 ${openCalendar ? 'block' : 'hidden'}`}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className={`rounded-lg border w-full ${className}`}
        />
      </div> */}
    </div>
  );
}
