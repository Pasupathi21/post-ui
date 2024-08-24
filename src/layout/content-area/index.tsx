
import { Outlet } from 'react-router-dom'
export default function ContentArea() {
  return (
    <div className="flex flex-1 w-full h-full p-2">
      <Outlet />
    </div>
  )
}
