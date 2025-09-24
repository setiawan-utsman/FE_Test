
export const pieEchart = ({ data }: { data: any }) => {

    const datasMapping = Object.entries(data).map(([key, value]) => {
      return { name: key, value };
    });
    // const drawSeries = datasMapping?.map((item: any) => item?.value);
    // const drawCategory = datasMapping?.map((item: any) => item?.name);
  // const dataSeries = data?.map((item: any) => {
  //   return {
  //     name: item?.key,
  //     value: item?.value,
  //   };
  // });

  const option = {
    ...optionPie,
    series: [
      {
        ...optionPie.series,
        type: "pie",
        data: datasMapping,
      },
    ],
  };
  return option;
};

const optionPie = {
  backgroundColor: "transparent",
  series: {
    labelLine: {
      show: false,
    },
    label: {
      show: false,
      position: "center",
    },
    radius: ["40%", "90%"],
    bottom: "12%",
  },
  tooltip: {
    show: true,
    className: "tooltip-echart",
    axisPointer: {
      type: "shadow",
      lineStyle: {
        color: "rgba(208, 26, 26, 1)",
        width: 16,
        type: "dotted",
      },
    },
  },
  legend: {
    left: "center",
    bottom: "1%",
    itemWidth: 20.5,
    textStyle: {
      fontSize: 12,
      fontFamily: "Poppins",
      color: "#000",
    },
  },
  yAxis: {
    show: false,
  },
  xAxis: {
    show: false,
  },
};
