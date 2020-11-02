export type TVariant = 'up' | 'down'

export interface IThumbsButton {
  variant?: TVariant
  selected?: boolean
  readOnly?: boolean
  onClick?(): void
}
