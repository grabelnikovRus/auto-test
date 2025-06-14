import { Metadata } from "next";
import { getPage } from "@/src/api";
import { Card } from "@/src/components/card";
import { Pagination } from "@/src/components/pagination";
import { Sorting } from "@/src/components/sorting";

import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Каталог автомобилей",
  description: "Покупка авто",
};

export default async function CarListPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; order?: string; sort?: string }>
}) {
  const { page = "1", order, sort } = await searchParams;

  const response = await getPage({ page, order, sort });

  if (!response) return null;

  const { data, meta } = response;

  return (
    <div className={s.root}>
      <Sorting />
      <ul className={s.container}>
        {data.map((car) => (<Card key={car.unique_id} page={page} {...car}/>))}
      </ul>
      <Pagination meta={meta}/>
    </div>
  );
}
