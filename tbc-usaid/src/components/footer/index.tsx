import "./index.css";
import FBLOGO from "../../assets/footer/fb-logo.png";
import TBCLOGO from "../../assets/footer/tbc-white-logo.png";
import YOUTUBELOGO from "../../assets/footer/youtube-logo.png";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-logo-section">
          <img className="footer-logo" src={TBCLOGO} alt="TBC LOGO" />
          <div className="footer-copyright">
            <p>© 2023 ყველა უფლება დაცულია</p>
            <p>წესები და პირობები</p>
          </div>
        </div>
        <div className="footer-social-section">
          <div className="footer-social-icons">
            <img
              className="footer-social-icon"
              src={FBLOGO}
              alt="Facebook Logo"
            />
            <img
              className="footer-social-icon"
              src={YOUTUBELOGO}
              alt="YouTube Logo"
            />
          </div>
          <button className="footer-contact-us-button">მოგვწერეთ</button>
        </div>
      </footer>
    </div>
  );
}
