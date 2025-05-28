
import { COLOR } from '@/data/color.const'
import { Bell } from 'lucide-react'
import { useState } from 'react'

import { Lottie } from '@/components/lottie/index'
import fireAnimation from '@/components/lottie/Animation - 1748369840836.json'

export default function TopBar() {
  const [hoverBell, setHoverBell] = useState<boolean>(false)
  return (
    <div className="flex flex-1 w-full h-full p-2 items-center justify-between">
      <div className='flex '>
        <h2 className="text-base text-white font-bold z-40">Hello, Pasupathi</h2>
        <div className=''><Lottie animationData={fireAnimation} className='h-[15px] w-[15px]'/></div>
      </div>
      <div>
        <div className={`hover:bg-[${COLOR.secondary_background}] p-4 rounded-full`}>
          <Bell  style={{ color: hoverBell ? COLOR.green : COLOR.white}} onMouseEnter={() => setHoverBell(true)} onMouseLeave={()=> setHoverBell(false)}/>
        </div>
      </div>
    </div>
  )
}
