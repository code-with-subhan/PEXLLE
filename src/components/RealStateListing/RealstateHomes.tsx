"use client";
import React from "react";
import RealStateHousesCategory from "./RealStateHousesCategory";
import MyGoogleMap from "./RealStateMap";

const RealstateHomes = () => {
  return (
    <div>
      <div className="relative w-full flex justify-center items-center">
        <img
          src="https://www.google.com/search?q=apartment+beautiful+&sca_esv=a980cca8ef080035&rlz=1C1GCEU_enPK1162PK1162&udm=2&biw=1242&bih=583&sxsrf=AHTn8zolS8Lk3q8Hl3Jjo1cuWv2sxAv9kw%3A1747288630573&ei=NoIlaKnbItfj7_UPqs70yQU&ved=0ahUKEwipzpSx5aSNAxXX8bsIHSonPVkQ4dUDCBA&uact=5&oq=apartment+beautiful+&gs_lp=EgNpbWciFGFwYXJ0bWVudCBiZWF1dGlmdWwgMgcQIxgnGMkCMgQQABgeMgQQABgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQABgIGB5IngVQlwNYlwNwAngAkAEAmAHkAaAB5AGqAQMyLTG4AQPIAQD4AQGYAgGgAvYBmAMAiAYBkgcDMi0xoAeiB7IHAzItMbgH9gE&sclient=img#vhid=qg-5_U0UKMp3LM&vssid=mosaic"
          alt=""
          className="w-full"
        />
        <h1 className="text-white absolute text-2xl">
          Find Your Dream Apartment
        </h1>
      </div>

      <div>
        <h2>Search Results (248)</h2>
        <div className="flex gap-2">
        <RealStateHousesCategory/>
        <MyGoogleMap/>
        </div>
      </div>
    </div>
  );
};

export default RealstateHomes;
