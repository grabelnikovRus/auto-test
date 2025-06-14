import { getPage } from "@/src/api";
import { getObjPage } from "@/src/helpers/getObjPage";
import { Car } from "@/src/components/car";

type CarPageType = Promise<{ id: string, page: string }>;

export async function generateStaticParams(): Promise<{ id: string, page: string }[]> {
  const limit = 50
  const list: Array<{ id: string, page: string } >= [];
  const response = await getPage({ page: "1", limit});
  
  if (!response) throw Error("Ошибка в generateStaticParams - нет данных");;

  const { data, meta: { last_page } } = response
  list.push(...data.map(({ unique_id }) => (
    { page: "1", id: unique_id.toString() }
  )) ?? []);

  const arrArg = new Array(last_page).fill(null);

  for (let i = 2; arrArg.length > i; i++) {
    const resultResponse = await getPage({ page: i.toString(), limit });
    const result = resultResponse?.data.map(({ unique_id }) => (
      { page: i.toString(), id: unique_id.toString()}
    )) ?? [];
    list.push(...result);
  }

  return list;
}

export async function generateMetadata(props: { params: CarPageType }) {
  const { id, page } = await props.params
  const response = await getPage({ page });

  if (!response) return null;

  const info = getObjPage(response, id);

  if (!info) return null;

  const { mark_id, folder_id, run, price } = info;

  return {
    title: `${mark_id} ${folder_id}`,
    description: `Пробег: ${run}, цена: ${price} рублей`,
  }
}

export default async function CarPage(props: { params: CarPageType }) {
  const { id, page } = await props.params;
  const response = await getPage({ page });

  if (!response) return null;

  const info = getObjPage(response, id);

  if (!info) return null;

  return (<Car {...info}/>)
}
