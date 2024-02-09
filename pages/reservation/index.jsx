import Header from "@/components/modules/Header/Header";
import ReservationDetails from "@/components/templates/Reservation/ReservationDetails";
import React from "react";

export default function Reservation() {
  return (
    <>
      <Header title={"Reservation"} />
      <ReservationDetails />
    </>
  );
}
