import Github from "../components/Logo/Github";
import LinkedIn from "../components/Logo/LinkedIn";
import Twitter from "../components/Logo/Twitter";

function Footer() {
  return (
    <footer>
      <h1 id="contact">rejoingez moi</h1>
      <div className="footer-logo">
        <Github />
        <Twitter />
        <LinkedIn />
      </div>
      <p>© 2024 Zidane Portfolio</p>
    </footer>
  );
}
export default Footer;
