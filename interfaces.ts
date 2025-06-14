export interface CarType {
  mark_id: string
  folder_id: string
  price: number
  unique_id: number
  updated_at: string
  run: string
  images: {
    image: string[]
  }
}

export interface MetaType {
  page: number
  count: number
  last_page: number
  limit: number
}

export interface PageResponseType {
  data: CarType[]
  meta: MetaType
}