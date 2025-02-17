"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <header>
      <nav className={open ? "open" : ""}>
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="menu" onClick={() => setOpen(false)}>
          Menu
        </Link>
        <div className="logo">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="mfcLogoTp.png"
              alt="Mountain Fried Chicken logo"
              height={50}
              width={100}
              unoptimized
            />
          </Link>
        </div>
        <Link href="about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="contact" onClick={() => setOpen(false)}>
          Hours & Info
        </Link>
      </nav>
      <div className="mobile-menu">
        <Link href="/">
          <Image
            src="mfcLogoTp.png"
            alt="Mountain Fried Chicken logo"
            height={50}
            width={100}
            unoptimized
          />
        </Link>
        <div
          className={`mobile-menu-icon${open ? " open" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
