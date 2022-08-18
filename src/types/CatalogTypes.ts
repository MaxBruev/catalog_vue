enum ECategory {
  'sneakers',
  'hoodie'
}

export type TCategory = keyof typeof ECategory

enum EPrice {
  'high',
  'low'
}

export type TPrice = keyof typeof EPrice

export interface IDataFilterProducts {
  search?: string
  price?: TPrice
  category?: TCategory
}
