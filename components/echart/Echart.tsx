'use client';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as echarts from "echarts";
import { barEchart } from '@/helper/bar.parser';
import { pieEchart } from '@/helper/pie.parser';

interface IChart {
    path?: string
    params?:any
    parser?: 'bar' | 'pie'
    data?:any
    nameyAxis?:string
    namexAxis?:string
    isLegend?:boolean
}

const parserType: any = {
  bar: barEchart,
  pie: pieEchart,
};

export default function Echart({path, params, parser, data, namexAxis, nameyAxis, isLegend= true}:IChart) {
  const chartRef = useRef<any>(null);
  const [option, setOption] = useState<any>();

  const getData = useCallback(() => {
    // console.log(data);
    // console.log(parser);
    
    if(!data || !parser) return;
    
    const parserData = parserType[parser]({
        data,
      })
    if(!parserData) return;
    setOption(parserData);
  }, [data]);

  useEffect(() => {
    getData();
  }, [getData]);
 
  useLayoutEffect(() => {
    if (!chartRef.current || !option) return;
    // init chart
    const chart = echarts.init(chartRef.current);

    // set option
    chart?.setOption({
      ...option,
      legend: {
        ...option.legend,
        show: isLegend
      },
      yAxis: {
        ...option.yAxis,
        name: nameyAxis
      },
      xAxis: {
        ...option.xAxis,
        name: namexAxis
      }
    });

    // cleanup supaya nggak double init
    return () => {
      chart.dispose();
    };
  }, [chartRef, option])

  return (
    <div ref={chartRef} className='h-full w-full'/>
  )
}
