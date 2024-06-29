import React from "react";
import UserSelectionWarpper from "./Selectors";
import MissCallAlert from "./Misscall-alert";

export default function MainComponent() {
  return (
    <>
      <UserSelectionWarpper />
      <MissCallAlert />
    </>
  );
}
