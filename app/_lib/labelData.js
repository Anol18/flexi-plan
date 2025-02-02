import {
  voice,
  sms,
  bioscope,
  fourg,
  longevity,
  mca,
  data,
} from "@/app/_lib/bubble-map.json";
import selectedData from "@/app/_lib/selected-bubbles.json";
export const LABEL_DATA = [
  {
    id: 1,
    type: "longevity",
    label: "Validity",
    unit: "Days",
    data: longevity,
    selectedData: selectedData.longevity,
    color: "green",
  },
  {
    id: 2,
    type: "data",
    label: "Internet",
    subTitle: "Regular",
    unit: "GB",
    data,
    selectedData: selectedData.data,
    color: "green",
  },
  {
    id: 3,
    type: "fourg",
    label: "4G Internet",
    subTitle: "Regular",
    unit: "MB",
    data: fourg,
    selectedData: selectedData.fourg,
    note: "4G enabled handset + SIM required",
    color: "green",
  },
  {
    id: 4,
    type: "voice",
    label: "Minutes",
    color: "pink",
    data: voice,
    selectedData: selectedData.voice,
    unit: "MB",
    note: "Any Local Number",
  },
  {
    id: 5,
    type: "bioscope",
    label: "Bioscope",
    unit: "MB",
    data: bioscope,
    selectedData: selectedData.bioscope,
    note: "Only used to watch Bioscope",
    color: "levender",
  },
  {
    id: 6,
    type: "sms",
    label: "SMS",
    unit: "SMS",
    data: sms,
    selectedData: selectedData.sms,
    color: "cyan",
  },
];
