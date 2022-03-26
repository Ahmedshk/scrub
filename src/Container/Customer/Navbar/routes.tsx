import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi"
import * as RiIcons from "react-icons/ri"
import * as FcIcons from "react-icons/fc"
import * as FiIcons from "react-icons/fi"

import Profile from "../Pages/Profile/Profile";
import Orders from "../Pages/Orders/Orders";
import Support from "../Pages/Support/Support";

export interface RoutesLink {
    component: JSX.Element,
    path: string,
}

export interface SideBarCustomerRoutes {
    icon: JSX.Element,
    path?: string,
    title: string,
}

export const customerRoutes: RoutesLink[] = [
    {
        path: '/customer/dashboard',
        component: <Profile/>,
    },
    {
        path: '/customer/orders',
        component: <Orders/>,
    },
    {
        path: '/customer/support',
        component: <Support/>,
    },
]

export const customerSideBarItems: SideBarCustomerRoutes[] = [
    {
        path: '/customer/dashboard',
        icon: <AiIcons.AiFillDashboard/>,
        title: 'Dashboard',
    },
    {
        path: '/customer/orders',
        icon: <RiIcons.RiProductHuntFill/>,
        title: 'Product',
    },
    {
        path: '/customer/support',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Category',
    }
]
