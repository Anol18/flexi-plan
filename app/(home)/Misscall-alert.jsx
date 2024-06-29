"use client";
import React, { useState } from "react";
import DisplaySummery from "../_components/Display-Summery";
import Switch from "@mui/material/Switch";
import { mca as defaultMca } from "@/app/_lib/selected-bubbles.json";

export default function MissCallAlert() {
  const [checked, setChecked] = useState(defaultMca);

  // used directely values as 0 refers false and 1 as true
  const handleChange = (event) => {
    if (event.target.checked == true) setChecked(1);
    else setChecked(0);
  };
  return (
    <>
      <div className="flex max-md:gap-[10px] gap-[50px] justify-between max-md:w-[330px] w-[550px] py-5 border-b  px-2">
        <DisplaySummery
          title={"Missed Call Alert"}
          notice={"Validity: 30 days"}
        />
        <div>
          <Switch
            checked={checked}
            onChange={handleChange}
            style={{
              transitionDuration: "0.3s",
            }}
          />{" "}
        </div>
      </div>
    </>
  );
}
