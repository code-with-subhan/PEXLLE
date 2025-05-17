"use client";
import { Download, Pen, PenLine, Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Indicator } from "./indicatorData";
import StepIndicator from "./StepIndicator";
import { CardDescription, CardTitle } from "../ui/card";

const ExportEdit = () => {
  return (
    <div>
      <div>
        <Button>
          <Download /> Export
        </Button>
        <Button>
          <Pen /> Edit
        </Button>
      </div>
      <div>
        <h2>Stops</h2>
        <Button size="icon">
          <Plus />
        </Button>
        <Button size="icon">
          <PenLine />{" "}
        </Button>
      </div>
      <div>
        {Indicator.map((e) => (
          <div key={e.id}>
            <StepIndicator />
            <div>
              <CardTitle>{e.title}</CardTitle>
              <CardTitle>{e.id}</CardTitle>
              <CardDescription>{e.subtitle}</CardDescription>
            </div>
          </div>
        ))}
      </div>
      <div className="border border-[#F5F5F5]">
        <div className="flex justify-between items-center">
          <CardTitle>Note</CardTitle>
          <PenLine />
        </div>
        <CardDescription>
          Please ensure that all goods are in a safe and secure condition before
          departure. Pay attention to meeting the delivery deadlines and
          familiarize yourself with the route to avoid any delays.
        </CardDescription>
        <CardDescription>
          In case of any questions or setbacks, please contact us immediately.
          Our support team is available 24/7 to assist you with any concerns
          regarding the shipment, route, or delivery requirements.
        </CardDescription>
      </div>
    </div>
  );
};

export default ExportEdit;
