"use client";
import React from "react";
import { UserProfileCards } from "./UserProfileCard";

const UserProfileProducts = () => {
  return (
    <div>
      <div className="mt-2 ">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <div className="grid lg:grid-cols-4 gap-5 mt-4 grid-cols-1">
          {...[1, 2, 3, 4].map((e) => <main key={e}><UserProfileCards /></main>)}
        </div>
      </div>
      <div className="mt-7 ">
        <h1 className="text-2xl mb-5 font-bold">More Products</h1>
        <div className="grid lg:grid-cols-3 gap-3 grid-cols-1">
          {...[1, 2, 3, 4 , 5 ,6].map((e) => <main key={e}><UserProfileCards /></main>)}
        </div>
      </div>
    </div>
  );
};

export default UserProfileProducts;
