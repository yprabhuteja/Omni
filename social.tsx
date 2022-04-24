import Image from "next/image";
import social1 from "../public/svg/social1.svg";
import social2 from "../public/svg/social2.svg";
import social3 from "../public/svg/social3.svg";
import social4 from "../public/svg/social4.svg";

export default function Social(): JSX.Element {
  return (
    <div className="social">
      <Image src={social1} alt="instagram" width={80} height={80}></Image>
      <Image src={social2} alt="facebook" width={80} height={80}></Image>
      <Image src={social3} alt="skype" width={80} height={80}></Image>
      <Image src={social4} alt="twitter" width={80} height={80}></Image>
    </div>
  );
}
