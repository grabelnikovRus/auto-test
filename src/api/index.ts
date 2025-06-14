import { PageResponseType } from "@/interfaces";

export const baseUrl = "https://testing-api.ru-rating.ru";

export const getPage = async (
  { page, limit = 12, order = "", sort = "" }: { page: string, limit?: number, sort?: string, order?: string }
): Promise<PageResponseType | undefined> => {
  try {
    const data = await fetch(
      `${baseUrl}/cars?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`
    );

    return await data.json();
  } catch (e) {
    console.log(e);
  }
}
