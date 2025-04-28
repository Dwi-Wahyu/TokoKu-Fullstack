"use client";

import { parseAsIsoDateTime, useQueryState } from "nuqs";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";

type DateFilterProps = {
  title: string;
  key: string;
};

export default function DateFilter({ title, key }: DateFilterProps) {
  const querySearch = useQueryState(key, {
    shallow: false,
  });

  function handleChange() {}

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"outline"} className="border-dashed">
          <CalendarIcon />
          {title}
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Calendar initialFocus mode="single" />
      </PopoverContent>
    </Popover>
  );
}
