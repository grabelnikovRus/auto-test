"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Select } from "../select/Select";
import { optionsSelect, ValueType } from "@/src/helpers/constants";

import s from "./Sorting.module.css";

export const Sorting = () => {
  const [value, setValue] = useState<ValueType>("");
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const newValue = e.target.value as ValueType;
    setValue(newValue);
  };

  useEffect(() => {
    if (["asc", "desc"].includes(value)) {
      params.set("sort", "price")
      params.set("order", value)
    } else {
      params.delete("sort")
      params.delete("order")
    }

    push(`/?${params.toString() }`)
  }, [value]);

  return (
    <header>
      <Select
        className={s.root}
        name="sort"
        onChange={onChange}
        value={value}
        options={optionsSelect} 
      />
    </header>
  )
}
