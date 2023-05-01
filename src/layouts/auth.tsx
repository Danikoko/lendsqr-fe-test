import styles from "@/styles/layouts/auth.module.scss";
import Image from "next/image";
import logo from "../../public/assets/images/auth/logo.svg";
import pabloSignin from "../../public/assets/images/auth/pablo-signin.svg";

const AuthLayout = ({ children }: any) => {
    return (
        <main>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 hidden lg:block p-10 lg:p-20 h-screen relative">
                    <div>
                        <Image src={logo} alt="Lendsqr Logo" />
                    </div>
                    <div className={`${styles.imageContainer} absolute flex`}>
                        <div className={`self-center ${styles.imageHolder}`}>
                            <Image src={pabloSignin} alt="Auth Pages Image" />
                        </div>
                    </div>
                </div>
                <div className={`${styles.formSection} w-full lg:h-auto lg:w-1/2 p-10 lg:p-20`}>
                    <div className="block lg:hidden">
                        <Image className="mx-auto" src={logo} alt="Lendsqr Logo" />
                    </div>
                    { children }
                </div>
            </div>
        </main>
    );
}
 
export default AuthLayout;