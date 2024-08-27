import { APP_ROUTES } from '@/routes/route.const'
import { Frame, ImagePlus }from 'lucide-react'

export type TSidebar = {
    name: string;
    icon: any;
    path: string;
    isActive: boolean;
}
const SIDEBAR_MENU: TSidebar[] = [
    {
        name: 'home',
        icon: Frame,
        path: APP_ROUTES.HOME.path,
        isActive: true
    },
    {
        name: 'upload',
        icon: ImagePlus,
        path: APP_ROUTES.UPLOAD.path,
        isActive: false
    }
]

export const GET_APP_SIDEBAR = (_props: any) => {
    return SIDEBAR_MENU
}