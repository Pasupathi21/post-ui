// import PropTypes from 'prop-types'
import SideBar from '@/layout/sidebar'
import ContentArea from '@/layout/content-area'
import TopBar from '@/layout/topbar'

function Layout() {
    return (
        <div className="w-[70%] h-full grid grid-rows-6 gird-flow-col gap-2 rounded-2xl bg-[#1E201E] backdrop-blur-0 p-5 bg-opacity-100">
            <div className=" bg-red-600 row-span-1">
                <TopBar />
            </div>
            <div className="bg-green-700 row-span-5">
                <div>
                    <SideBar />
                </div>
                <div>
                    <ContentArea />
                </div>
            </div>
        </div>
    )

}
export default Layout
