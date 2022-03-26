import React from 'react';
import { customerSideBarItems } from "./routes";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const NavBar = () => {
    return (
        <>
            <Sidebar sideBarItems={customerSideBarItems} />
        </>
    );
};
export default NavBar;