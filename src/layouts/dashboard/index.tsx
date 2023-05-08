import layoutStyles from "@/styles/layouts/dashboard.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/images/dashboard/logo.svg";
import TopSection from "./components/TopSection";
import SideNavSection from "./components/SideNavSection";
import { useState } from "react";

const DashboardLayout = ({ children, fetching }: any) => {
    const [showingMenu, setShowingMenu] = useState(false);
    return (
        <main className={layoutStyles.mainDashboard}>
            {
                fetching
                ?   <div className="flex loader-div">
                        <Image
                        className="text-center mx-auto animate-pulse w-1/3"
                        src={logo}
                        alt="Logo"
                        />
                    </div>
                :   <>
                        <TopSection 
                        showingMenu={showingMenu}
                        setShowingMenu={setShowingMenu} 
                        logo={logo} />
                        <div className="flex flex-wrap z-0">
                            <SideNavSection 
                            showingMenu={showingMenu} 
                            />
                            { 
                                showingMenu === false
                                &&
                                children 
                            }
                        </div>
                    </>
            }
        </main>
    );
}
 
export default DashboardLayout;