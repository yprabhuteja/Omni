import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Social from "../components/social";
import "../styles/globals.scss";

enum Theme {
  LIGHT = "theme-light",
  DARK = "theme-dark",
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>(
    Theme.LIGHT
  );
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || Theme.LIGHT);
  }, []);
  const changeTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <main className={theme}>
      <Social></Social>
      <Header onThemeChange={changeTheme}></Header>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
export default MyApp;
