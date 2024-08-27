
import { COLOR } from '@/data/color.const'
import { Bell } from 'lucide-react'
import { useState } from 'react'
export default function TopBar() {
  const [hoverBell, setHoverBell] = useState<boolean>(false)
  return (
    <div className="flex flex-1 w-full h-full p-2 items-center justify-between">
      <div>
        <h2 className="text-base text-white font-bold">Hello, User</h2>
      </div>
      <div>
        <div className={`hover:bg-[${COLOR.secondary_background}] p-4 rounded-full`}>
          <Bell  style={{ color: hoverBell ? COLOR.green : COLOR.white}} onMouseEnter={() => setHoverBell(true)} onMouseLeave={()=> setHoverBell(false)}/>
        </div>
      </div>
    </div>
  )
}
