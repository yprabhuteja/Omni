import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import logo from "../public/svg/logo.svg";
import menu from "../public/svg/menu.svg";
import themeIcon from "../public/svg/theme-icon.svg";

export default function Header({
  onThemeChange,
}: {
  onThemeChange: () => void;
}): JSX.Element {
  const [nav, setNav] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    setNav(false);
  }, [asPath]);

  return (
    <>
      <header>
        <Image src={logo} alt="none" />

        <h4>
          <span className="highlight">Omnified</span>
          <br />
          Connections
        </h4>
        <nav>
          <Links />
        </nav>
        <span className="theme-icon">
          <Image onClick={onThemeChange} alt="error" src={themeIcon}></Image>
        </span>
        <span className="menu" onClick={() => setNav(!nav)}>
          <Image alt="error" src={menu}></Image>
        </span>
      </header>
      <nav
        className="topnav"
        style={nav ? { height: "100%" } : { height: "0" }}
      >
        <Links>
          <a onClick={() => setNav(false)}>&times;</a>
        </Links>
      </nav>
    </>
  );
}

const Links = ({ children }: { children?: ReactNode }) => {
  const { asPath } = useRouter();
  return (
    <>
      {children}
      <Link href="/">
        <a className={asPath === "/" ? "highlight" : ""}>Home</a>
      </Link>
      <Link href="/about-us">
        <a className={asPath === "/about-us" ? "highlight" : ""}>About Us</a>
      </Link>
      <a href="">Services</a>
      <a href="">Portfolio</a>
      <a href="">Blog</a>
      <Link href="/about-us#contact-us">
        <a className={asPath === "/about-us#contact-us" ? "highlight" : ""}>
          Contact Us
        </a>
      </Link>
      <Link href="/about-us#contact-us">
        <a className="lets-talk">Let&apos;s Talk</a>
      </Link>
    </>
  );
};
