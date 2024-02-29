import { RouteNames } from "src/lib/enum/routes"

export interface NavigaionTab {
  type: 'icon' | 'image',
  name: RouteNames,
  src: string
  path: string
  color?: string,
}
