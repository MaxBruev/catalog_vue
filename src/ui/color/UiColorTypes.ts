enum EColorTypes {
  'accent',
  'normal',
  'text-1',
  'text-2',
  'text-3',
  'text-4',
  'bg-1',
  'bg-2'
}

export type TColorTypes = keyof typeof EColorTypes
