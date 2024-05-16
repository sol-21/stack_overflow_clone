"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface filtersProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}

const Filter: React.FC<filtersProps> = ({
  filters,
  otherClasses,
  containerClasses,
}) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} no-focus body-regular light-border background-light800_dark300 text-dark500_light700 cursor-pointer  px-5 py-2.5 shadow-none outline-none`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent className="background-light900_dark200  min-w-[120px] rounded border dark:border-dark-400 dark:bg-dark-300">
          {filters.map((filter) => (
            <SelectItem key={filter.value} value={filter.value}>
              {filter.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
