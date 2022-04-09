import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri"

import Profile from "../Pages/Profile/Profile";
import Orders from "../Pages/Order/Order";
import Taxes from "../Pages/Taxes/Taxes";
import ShippingCost from "../Pages/ShippingCost/ShippingCost";
import Coupons from "../Pages/Coupons/Coupons";
import CreateCoupons from "../Pages/Coupons/CreateCoupons/CreateCoupons";
import Categories from "../Pages/Categories/Categories";
import Attributes from "../Pages/Attributes/Attributes";
import Products from "../Pages/Products/Product";
import CreateProduct from "../Pages/Products/CreateProduct/CreateProduct";
import CreateUser from "../Pages/CreateUser/CreateUser";
import Role from "../Pages/Role/Role";
import CreateRole from "../Pages/Role/CreateRole/CreateRole";
import EditMenu from "../Pages/EditMenu/EditMenu";
import PictureApproval from "../Pages/PictureApproval/PictureApproval";
import ReviewApproval from "../Pages/ReviewApproval/ReviewApproval";
import Slider from "../Pages/Slider/Slider";
import Seo from "../Pages/SEO/Seo";
import EditPages from "../Pages/EditPages/EditPages";
import EditCategory from '../Pages/Categories/CreateCategory/CreateCategory';
import CreateAttribute from '../Pages/Attributes/CreateAttribute/CreateAttribute';
import AllUsers from '../Pages/AllUsers/AllUsers'
import Dispute from "../Pages/Dispute/Dispute";
import {CgProfile} from 'react-icons/cg'
import {HiReceiptTax} from 'react-icons/hi'
import {FaSlidersH,FaUserEdit,FaCriticalRole} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'


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
        path: '/admin/coupons',
        component: <Coupons/>,
    },
    {
        path: '/admin/create-coupon',
        component: <CreateCoupons/>,
    },
    {
        path: '/admin/edit-coupon/:id',
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
        path: '/admin/create-categories',
        component: <EditCategory/>,
    },
    {
        path: '/admin/create-categories/:id',
        component: <EditCategory/>,
    },
    {
        path: '/admin/attributes',
        component: <Attributes/>,
    },
    {
        path: '/admin/create-attributes',
        component: <CreateAttribute/>,
    },
       {
        path: '/admin/create-attributes/:id',
        component: <CreateAttribute/>,
    },
    {
        path: '/admin/products',
        component: <Products/>,
    },
    {
        path: '/admin/edit-product/:id',
        component: <CreateProduct/>,
    },
    {
        path: '/admin/create-product',
        component: <CreateProduct/>,
    },
    {
        path: '/admin/create-user',
        component: <CreateUser/>,
    },
    {
        path: '/admin/role',
        component: <Role/>,
    },
    {
        path: '/admin/create-role',
        component: <CreateRole/>,
    },
    {
        path: '/admin/edit-role/:id',
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
    {
        path: '/admin/edit-pages',
        component: <EditPages/>,
    },
    {
        path: '/admin/all-users',
        component: <AllUsers/>,
    },
    {
        path: '/admin/dispute',
        component: <Dispute/>,
    },
]

export const adminSideBarItems: SideBarAdminRoutes[] = [
    {
        path: '/admin/profile',
        icon: <CgProfile/>,
        title: 'Profile',
    },
    {
        path: '/admin/edit-pages',
        icon: <MdIcons.MdEditNote/>,
        title: 'Edit Pages',
    },
    {
        path: '/admin/orders',
        icon: <MdIcons.MdOutlineViewHeadline/>,
        title: 'View Orders',
    },
    {
        path: '/admin/coupons',
        icon: <RiIcons.RiCoupon3Line/>,
        title: 'Coupons',
    },
    {
        path: '/admin/shipping-cost',
        icon: <RiIcons.RiPriceTag3Fill/>,
        title: 'Shipping Cost',
    },
    {
        path: '/admin/taxes',
        icon: <HiReceiptTax/>,
        title: 'Taxes',
    },
    {
        path: '/admin/products',
        icon: <RiIcons.RiProductHuntFill/>,
        title: 'Products',
    },
    {
        path: '/admin/categories',
        icon: <MdIcons.MdCategory/>,
        title: 'Categories',
    },
    {
        path: '/admin/attributes',
        icon: <MdIcons.MdEditAttributes/>,
        title: 'Attributes',
    },
    {
        path: '/admin/picture-approval',
        icon: <MdIcons.MdOutlineApproval/>,
        title: 'Picture Approval',
    },
    {
        path: '/admin/review-approval',
        icon: <MdIcons.MdOutlineReviews/>,
        title: 'Review Approval',
    },
    {
        path: '/admin/edit-menu',
        icon: <MdIcons.MdEditNote/>,
        title: 'Edit Menu',
    },
    {
        path: '/admin/slider',
        icon: <FaSlidersH/>,
        title: 'Slider',
    },{
        path: '/admin/seo',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'SEO',
    },
    {
        path: '/admin/create-user',
        icon: <FaUserEdit/>,
        title: 'Create User',
    },
    {
        path: '/admin/role',
        icon: <FaCriticalRole/>,
        title: 'Role',
    },
    {
        path: '/admin/all-users',
        icon: <FiUsers/>,
        title: 'All Users',
    },
    {
        path: '/admin/dispute',
        icon: <MdIcons.MdOutlineCategory/>,
        title: 'Dispute',
    },

]
