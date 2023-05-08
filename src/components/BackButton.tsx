import Image from "next/image";
import backButon from "../../public/assets/icons/back.svg";
import Link from "next/link";

const BackButton = () => {
    return (
            <Link href={'/'}>
                <div className="flex">
                    <Image 
                    src={backButon}
                    className="inline-block"
                    alt="Back Button"
                    />
                    <span className="self-center">Back to Users</span>
                </div>
            </Link>
    );
}
 
export default BackButton;