"use client"
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PaginationProps } from "./types";
import { Button } from "../button/Button";

import s from "./Pagination.module.css";

export const Pagination = ({ 
  meta: {
    page,
    last_page
  }
}: PaginationProps) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const setPage = (newPage: number) => {
    
    params.set("page", String(newPage));

    push(`/?${params.toString()}`);
  };

  useEffect(() => {
    const page = searchParams.get("page");

    if (!page) {
      params.set("page", "1");
    }
  
    push(`/?${params.toString()}`);
  }, [])

  return (
    <div className={s.root}>
      {page > 1 && <>
        <Button onClick={() => setPage(1)}>{"<"}</Button>
        <Button onClick={() => setPage(page - 1)}>{page - 1}</Button>
      </>}
      <Button theme="second" disabled>{page}</Button>
      {page < last_page && <>
        <Button onClick={() => setPage(page + 1)}>{page + 1}</Button>
        <Button onClick={() => setPage(last_page)}>{">"}</Button>
      </>}
    </div>
  )
}