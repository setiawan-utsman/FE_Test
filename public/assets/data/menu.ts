export const MENUS = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: "dashboard",
  },
  {
    id: 2,
    name: "Laporan Lalin",
    path: "/laporan-lalin",
    icon: "settings",
    children: [
      {
        id: 1,
        name: "Laporan Perhari",
        path: "/laporan-lalin/laporan-perhari",
      },
    ],
  },
  {
    id: 3,
    name: "Master Gerbang",
    path: "/master-gerbang",
    icon: "settings",
  },
];

export const TabsMenu = ['e-toll','ktp', 'flo','tunai']