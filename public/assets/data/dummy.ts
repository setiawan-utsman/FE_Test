import { title } from "process";

interface AnalisisPohon {
  state: IState[];
}

interface IState {
  title: string;
  value: number;
  color: string;
  icon?: any;
}

export const ANALISI_POHON: AnalisisPohon = {
  state: [
    {
      title: "Total Pohon",
      value: 200,
      color: "green",
    },
    {
      title: "Spesies Terdeteksi",
      value: 500,
      color: "blue",
    },
    {
      title: "% Pohon Sehat",
      value: 50,
      color: "green",
    },
    {
      title: "% Pohon Tidak Sehat",
      value: 10,
      color: "red",
    },
  ],
};

export const DATA1 = [
  { name: "BCA", value: 4320 },
  { name: "BRI", value: 3850 },
  { name: "BNI", value: 2980 },
  { name: "DKI", value: 2540 },
  { name: "Mandiri", value: 1860 },
  { name: "Mega", value: 1420 },
  { name: "Flo", value: 980 },
];

export const DATA2 = [
  { name: "Gerbang 1", value: 2540 },
  { name: "Gerbang 2", value: 1860 },
  { name: "Gerbang 3", value: 1420 },
  { name: "Gerbang 4", value: 980 },
  { name: "Gerbang 5", value: 720 },
];

export const DATA3 = [
  { key: "Shif 1", value: 2540 },
  { key: "Shif 2", value: 1860 },
  { key: "Shif 3", value: 1420 },
];

export const DATA4 = [
  { key: "Ruas 1", value: 2540 },
  { key: "Ruas 2", value: 1860 },
  { key: "Ruas 3", value: 1420 },
];