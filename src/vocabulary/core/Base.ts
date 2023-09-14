import type { context, id, type } from '../properties'

export interface Base {
  '@context'?: context
  type?: type
  id?: id
  [key: string]: any
}
