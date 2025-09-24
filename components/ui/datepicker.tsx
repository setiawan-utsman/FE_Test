"use client";

// import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "../shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/popover";
import { Calendar } from "../shadcn/calendar";
import React, { useEffect, useState } from "react";


interface IProps {
    className?: string
    onChange?: (date: Date) => void
    dateProps?: Date
}

export function DatePickerSingle({className, onChange, dateProps}: IProps) {
  const [date, setDate] = useState<Date | undefined>();

  useEffect(() => {
    if (onChange && date) {
      onChange(date)
    }
  }, [date]);

  useEffect(() => {
    if(dateProps) setDate(dateProps)
  }, [dateProps]);
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span className="fs-base">Pilih tanggal</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} className={className} />
      </PopoverContent>
    </Popover>
  );
}
