export const barStackedEchart = ({data}:{data:any}) => {
    const drawSeries = data?.map((item: any) => item?.value);
    const drawCategory = data?.map((item: any) => item?.name);

    const option = {
        ...optionBar,
        series: [
            {
                ...optionBar.series,
                type: "bar",
                data: drawSeries,
            },
        ],
        xAxis: {
            ...optionBar.xAxis,
            data: drawCategory,
        },
    }
    return option;
};

const optionBar = {
  backgroundColor: "transparent",
  color: ["#16a34a"],
  grid: {
    top: "10%",
    left: "8%",
    right: "5%",
    bottom: "10%",
  },
  legend: {
    show: true,
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
  xAxis: {
    axisTick: { show: false },
    axisLabel: { fontSize: 12, fontFamily: "Poppins" },
    axisLine: { show: false },
    type: "category",
    name: "Jenis Pohon",
    nameLocation: "middle",
    nameTextStyle: {
      color: "rgba(188, 188, 188, 1)",
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    name: "Jumlah Pohon",
    nameLocation: "middle",
    nameTextStyle: {
      color: "rgba(188, 188, 188, 1)",
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
      },
    },
    type: "value",
  },
  series: {
    itemStyle: {
      borderRadius: [5, 5, 0, 0],
    },
    barMaxWidth: "40%",
  },
};
