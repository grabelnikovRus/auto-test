import Image from "next/image";
import { CarType } from "@/interfaces";
import { formatPrice, formatRun } from "@/src/helpers/format";
import Link from "next/link";

import s from "./Card.module.css";

export const Card = ({ 
  mark_id, 
  folder_id,
  unique_id,
  price,
  run,
  page,
  images: { image }
}: CarType & { page: string}) => {
  return (
    <div className={s.root}>
      <Image 
        className={s.img}
        src={image[0]} 
        alt={`Фото ${mark_id} ${folder_id}`}
        style={{ width: "100%", height: "auto" }}
        width={250}
        height={200}
        sizes="(max-width: 600px) 200px, (max-width: 1200px) 230px, 250px"
      />
      <span className={s.title}>{`${mark_id} ${folder_id}`}</span>
      <span>{`Цена: ${formatPrice.format(price)}`}</span>
      <span>{`Пробег: ${formatRun.format(+run)}км`}</span>
      <Link href={`/${page}/${unique_id}`} className={s.link}>Подробнее</Link>
    </div>
  )
}
