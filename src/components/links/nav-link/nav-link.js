import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const NavLink = ({ href, hrefChild, label, router, children, className }) => {
  let isCurrentPath = router.pathname === href || router.asPath === href;
  if (children) {
    let child = hrefChild.find(
      (c) => c.href === router.pathname || c.href === router.asPath
    );
    if (child) {
      isCurrentPath = true;
    }
  }
  return (
    <Link href={href}>
      <li
        className={`${className ? className : ""} ${
          !children && isCurrentPath ? "active-link" : ""
        }`}
      >
        <a
          className={`${children && isCurrentPath ? "active-folder" : ""}`}
          role="button"
        >
          {label}
        </a>
        {children ? (
          <div className="subnav">
            <ul>{children}</ul>
          </div>
        ) : (
          ""
        )}
      </li>
    </Link>
  );
};

export default withRouter(NavLink);
