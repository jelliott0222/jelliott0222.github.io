import Image from "next/image";
import Link from "next/link";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import logo from "../../../public/mfcLogo.jpg";

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <div className="footer-row">
        <h2>Mountain Fried Chicken</h2>
      </div>
      <div className="footer-row">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Hours & Info</Link>
          <a
            className="facebook"
            href="https://www.facebook.com/MountainFriedChickenHickory"
            target="_blank"
          >
            <Icon icon={faFacebook} size="sm" />
          </a>
        </nav>
      </div>
      <div className="footer-row">
        ©{date.getFullYear()} Mountain Fried Chicken. All rights reserved.
      </div>
    </footer>
  );
}
