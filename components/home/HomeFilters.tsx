"use client";
import React from "react";
import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "recommended";
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3 max-md:hidden">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          className={`body-medium  rounded-lg border-none px-6 py-3 capitalize shadow-none 
          ${active === filter.value ? "background-light700_dark300 text-primary-500" : "background-light800_dark300 text-light-500"}`}
          onClick={() => {}}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
