import { useMemo } from "react"
import { GET_APP_SIDEBAR, TSidebar } from './sidebar.const'

export default function SideBar() {
  const SIDE_MENU = useMemo(() => GET_APP_SIDEBAR({}), [])
  return (
    <div className="bg-orange-700">{
      SIDE_MENU.map((menu: TSidebar) => (
        <div>{menu.name}</div>
      ))
    }</div>
  )
}
