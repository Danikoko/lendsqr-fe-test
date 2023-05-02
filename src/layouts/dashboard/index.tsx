import styles from "@/styles/layouts/dashboard.module.scss";
import Image from "next/image";
import logo from "../../../public/assets/images/dashboard/logo.svg";
import TopSection from "./components/TopSection";

const DashboardLayout = ({ children }: any) => {
    return (
        <main className={styles.mainDashboard}>
            <TopSection logo={logo} />
            { children }
        </main>
    );
}
 
export default DashboardLayout;