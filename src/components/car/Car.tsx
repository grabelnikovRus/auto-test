import Link from "next/link";
import Image from "next/image";
import { CarType } from "@/interfaces";
import { formatPrice, formatRun } from "@/src/helpers/format";

import s from "./Car.module.css"

export const Car = ({
  mark_id,
  folder_id,
  images,
  run,
  price
}: CarType)=> {
  return (
    <div className={s.root}>
      <Link href="/">На главную</Link>
      <Image
        className={s.img}
        src={images.image[0]}
        alt={`Фото ${mark_id} ${folder_id}`}
        style={{ width: "100%", height: "auto" }}
        width={650}
        height={500}
        sizes="(max-width: 600px) 350px, (max-width: 1200px) 450px, 650px"
      />
      <h2 className={s.title}>{`${mark_id} ${folder_id}`}</h2>
      <span>{`Цена: ${formatPrice.format(price)}`}</span>
      <span>{`Пробег: ${formatRun.format(+run)}км`}</span>
    </div>
  )
}