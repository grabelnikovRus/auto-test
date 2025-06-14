import { PageResponseType } from "@/interfaces";

export const getObjPage = (
  arr: PageResponseType, 
  id: string
) => arr.data.find((elem) => id === elem.unique_id.toString());
