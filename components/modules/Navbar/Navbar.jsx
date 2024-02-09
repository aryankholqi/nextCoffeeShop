import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const searchHanlder = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  const searchHanlderWithEnter = (e) => {
    if (e.key === "Enter") {
      if (search.trim()) {
        router.push(`/search?q=${search}`);
      }
    }
  };

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link
          href="/"
          className={`${styles.navbar_brand} ${styles.nav_link} px-lg-4 m-0`}
        >
          <h1 className="m-0 display-4 text-uppercase text-white">
            Next-Coffee
          </h1>
        </Link>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          onKeyDown={searchHanlderWithEnter}
          className="bg-transparent text-white border-0 outline-0 border-bottom"
        />
        <FontAwesomeIcon
          className="text-white"
          icon={faSearch}
          onClick={searchHanlder}
        />
        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className={`collapse ${styles.navbar_collapse} justify-content-end`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              className={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              Home
            </Link>
            <Link href="/about" className={`${styles.nav_link}`}>
              About
            </Link>
            <Link href="/services" className={`${styles.nav_link}`}>
              Service
            </Link>
            <Link href="/menu" className={`${styles.nav_link}`}>
              Menu
            </Link>
            <div className={`${styles.dropdown}`}>
              <Link
                href="/"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </Link>
              <div className={`${styles.dropdown_menu} text-capitalize`}>
                <Link href="/reservation" className={`${styles.dropdown_item}`}>
                  Reservation
                </Link>
                <Link href="/testimonial" className={`${styles.dropdown_item}`}>
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" className={`${styles.nav_link}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
