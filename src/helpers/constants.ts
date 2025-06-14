const Value = {
  Desc: "desc",
  Asc: "asc",
  Empty: "",
} as const;

export type ValueType = typeof Value[keyof typeof Value];

export const optionsSelect = [
  { value: Value.Desc, title: "По убыванию цены"},
  { value: Value.Asc, title: "По возрастанию цены" },
  { value: Value.Empty, title: "Без сортировки" },
];
