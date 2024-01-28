import { useState, useEffect } from "react";
import "./index.css";
import TBCLOGO from "../../assets/header/tbc-logo.png";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stickyThreshold = 100;

      setIsSticky(scrollY > stickyThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-wrapper ${isSticky ? "sticky" : ""}`}>
      <header className="header">
        <img src={TBCLOGO} alt="LOGO" className="header-logo" />
        <nav className="header-nav">
          <li>მთავარი</li>
          <li>TBC IT</li>
          <li className="active">TBC x USAID</li>
          <li>რისკები</li>
        </nav>
      </header>
    </div>
  );
}
