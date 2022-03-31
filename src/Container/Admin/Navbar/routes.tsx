import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri"

import Profile from "../Pages/Profile/Profile";
import Orders from "../Pages/Order/Order";
import Taxes from "../Pages/Taxes/Taxes";
import ShippingCost from "../Pages/ShippingCost/ShippingCost";
import CreateCoupons from "../Pages/CreateCoupons/CreateCoupons";
import Categories from "../Pages/Categories/Categories";
import Attributes from "../Pages/Attributes/Attributes";
import Products from "../Pages/Products/Product";
import CreateProduct from "../Pages/Products/CreateProduct/CreateProduct";
import CreateUser from "../Pages/CreateUser/CreateUser";
import CreateRole from "../Pages/CreateRole/CreateRole";
import EditMenu from "../Pages/EditMenu/EditMenu";
import PictureApproval from "../Pages/PictureApproval/PictureApproval";
import ReviewApproval from "../Pages/ReviewApproval/ReviewApproval";
import Slider from "../Pages/Slider/Slider";
import Seo from "../Pages/SEO/Seo";

export interface RoutesLink {
    component: JSX.Element,
    path: string,
}

export interface SideBarAdminRoutes {
    icon: JSX.Element,
    path?: string,
    title: string,
}

export const adminRoutes: RoutesLink[] = [
    {
        path: '/admin/profile',
        component: <Profile/>,
    },
    {
        path: '/admin/orders',
        component: <Orders/>,
    },
    {
        path: '/admin/taxes',
        component: <Taxes/>,
    },
    {
        path: '/admin/create-coupons',
        component: <CreateCoupons/>,
    },
    {
        path: '/admin/shipping-cost',
        component: <ShippingCost/>,
    },
    {
        path: '/admin/categories',
        component: <Categories/>,
    },
    {
        path: '/admin/attributes',
        component: <Attributes/>,
    },
    {
        path: '/admin/products',
        component: <Products/>,
    },
    {
        path: '/admin/edit-products',
        component: <CreateProduct/>,
    },
    {
        path: '/admin/create-user',
        component: <CreateUser/>,
    },
    {
        path: '/admin/create-role',
        component: <CreateRole/>,
    },
    {
        path: '/admin/edit-menu',
        component: <EditMenu/>,
    },
    {
        path: '/admin/picture-approval',
        component: <PictureApproval/>,
    },
    {
        path: '/admin/review-approval',
        component: <ReviewApproval/>,
    },
    {
        path: '/admin/slider',
        component: <Slider/>,
    },
    {
        path: '/admin/seo',
        component: <Seo/>,
    },
]

export const adminSideBarItems: SideBarAdminRoutes[] = [
    {
        path: '/admin/profile',
        icon: <AiIcons.AiFillDashboard/>,
        title: 'Profile',
    },
    {
        path: '/admin/orders',
        icon: <RiIcons.RiProductHuntFill/>,
        title: 'View Orders',
    },
    {
        path: '/admin/create-coupons',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Create Coupons',
    },
    {
        path: '/admin/shipping-cost',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Shipping Cost',
    },
    {
        path: '/admin/taxes',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Taxes',
    },
    {
        path: '/admin/products',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Products',
    },
    {
        path: '/admin/categories',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Categories',
    },
    {
        path: '/admin/attributes',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Attributes',
    },
    {
        path: '/admin/picture-approval',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Picture Approval',
    },
    {
        path: '/admin/review-approval',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Review Approval',
    },
    {
        path: '/admin/edit-menu',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Edit Menu',
    },
    {
        path: '/admin/slider',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Slider',
    },{
        path: '/admin/seo',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'SEO',
    },
    {
        path: '/admin/create-user',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Create User',
    },
    {
        path: '/admin/create-role',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Create Role',
    },

]
