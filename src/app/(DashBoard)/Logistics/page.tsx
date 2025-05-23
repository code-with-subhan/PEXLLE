import React from "react";
import Shipments from "@/components/Logictics/Shipments";
import EachShipmentData from "@/components/Logictics/EachShipmentData";
import ExportEdit from "@/components/Logictics/ExportEdit";

const page = () => {
  return (
    <div className=" p-4 flex gap-7 justify-between">
      <Shipments/>
      <EachShipmentData/>
      <ExportEdit/>
    </div>
  );
};

export default page;
