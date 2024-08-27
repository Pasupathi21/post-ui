// import PropTypes from 'prop-types'
import SideBar from '@/layout/sidebar'
import ContentArea from '@/layout/content-area'
import TopBar from '@/layout/topbar'

function Layout() {
    return (
        <div className={`w-[70%] h-full grid grid-rows-8 gird-flow-col gap-2 rounded-2xl bg-[#1E201E] backdrop-blur-0 p-5 bg-opacity-100`}>
            <div className="  row-span-1 rounded-xl">
                <TopBar />
            </div>
            <div className="row-span-7 flex flex-1 gap-4">
                <div className={`bg-[#161616] w-[10%] rounded-xl`}>
                    <SideBar />
                </div>
                <div className={`bg-[#161616] w-[90%] rounded-xl`}>
                    <ContentArea />
                </div>
            </div>
        </div>
    )

}
export default Layout
