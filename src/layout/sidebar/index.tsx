import { useState } from "react"
import { GET_APP_SIDEBAR, TSidebar } from './sidebar.const'
import { useNavigate } from 'react-router-dom'
import { COLOR } from "@/data/color.const"

export default function SideBar() {
  const navigate = useNavigate()
  const [SIDE_MENU, SET_SIDE_MENU] = useState(GET_APP_SIDEBAR({}))
  // const SIDE_MENU = useMemo(() => , [])
  const handleNav = (selectedMenu: Record<string, any>) => {

    const tempArray = SIDE_MENU.map(m => ({
      ...m,
      isActive: selectedMenu?.path === m?.path ? true : false
    }))
    SET_SIDE_MENU(tempArray)
    navigate(selectedMenu.path)

  }
  return (
    <div className="h-full rounded-lg w-full">
      <nav className="relative top-5 w-full flex flex-1 flex-col justify-center gap-8 p-2">
        {
          SIDE_MENU.map((menu: TSidebar, i: number) => (
            <div className={`w-full p-4 flex flex-1 justify-center rounded-sm hover:cursor-pointer ${menu.isActive ? 'border-l-4 border-l-green-500': 'hover:bg-gradient-to-r from-green-400 to-green-100 transition-colors duration-500'}`} onClick={() => {
              handleNav(menu)
            }} key={i}>
              <span className="">
                <menu.icon className=""
                  size={`1rem`}
                  style={{ color: menu.isActive ? '#22c55e' : COLOR.white, }}
                />
              </span>
            </div>
          ))
        }
      </nav>
    </div>
  )
}
