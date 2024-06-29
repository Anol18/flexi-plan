"use client";
import { useEffect, useState } from "react";
import Bubble from "../_components/Bubble";
import DisplaySummery from "../_components/Display-Summery";
import { LABEL_DATA } from "../_lib/labelData";
import eligibilityConditions from "@/app/_lib/eligibility-map.json";
export default function UserSelectionWarpper() {
  // storing selected value in array (object id as key)
  const [selectedBubbles, setSelectedBubbles] = useState(
    LABEL_DATA.reduce((acc, item) => {
      acc[item.id] = item.selectedData;
      return acc;
    }, {})
  );

  // transforming day_$ as given json using selected longevity;
  const availableOptions = eligibilityConditions[`day_${selectedBubbles[1]}`];

  function handleStoreData(value, id) {
    const selectedValue = parseInt(value.getAttribute("data-item-value"), 10);

    const componentId = parseInt(id.getAttribute("data-component-id"), 10);

    setSelectedBubbles((prevSelected) => ({
      ...prevSelected,
      [componentId]: selectedValue,
    }));
  }
  // function which storing data to useState
  const handleClicked = (e) => {
    const { target } = e;
    const value = target.closest("[data-item-value]");
    const id = target.closest("[data-component-id]");

    if (value && id) {
      handleStoreData(value, id);
    }
  };

  useEffect(() => {
    // Check if the currently selected options are disabled and reset it
    LABEL_DATA.forEach((item) => {
      const type = item.type;
      if (
        selectedBubbles[item.id] !== 0 &&
        type !== "longevity" &&
        !availableOptions[type]?.includes(selectedBubbles[item.id])
      ) {
        setSelectedBubbles((prevSelected) => ({
          ...prevSelected,
          [item.id]: 0,
        }));
      }
    });
  }, [selectedBubbles, availableOptions]);

  return (
    <>
      <div className="px-2" onClick={handleClicked}>
        {LABEL_DATA.map((item) => {
          return (
            <div
              key={item.id}
              className="flex max-md:gap-[10px] gap-[50px] max-md:w-[330px] w-[550px] py-5 border-b"
              data-component-id={item.id}
            >
              <DisplaySummery
                title={item.label}
                color={item.color}
                subTitle={item.subTitle}
                count={selectedBubbles[item.id]}
                notice={item.note}
                unit={item.unit}
              />
              <div className="flex gap-5 w-[400px] flex-wrap">
                {item.data?.map((val) => {
                  // checking is eliglibility
                  const isDisabled =
                    item?.type !== "longevity" &&
                    !availableOptions[item.type]?.includes(val);

                  return (
                    <span key={val} data-item-value={val}>
                      <Bubble
                        value={val}
                        color={item.color}
                        selectedValue={selectedBubbles[item.id]}
                        disabled={isDisabled}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
