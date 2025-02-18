import localFont from "next/font/local";

export const gotham = localFont({
  variable: "--gotham",
  src: [
    {
      path: "../fonts/gotham/GothamHTF-Ultra.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/gotham/GothamHTF-Black.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/gotham/GothamHTF-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/gotham/GothamHTF-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/gotham/GothamHTF-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/gotham/GothamHTF-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/gotham/GothamHTF-XLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/gotham/GothamHTF-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});
