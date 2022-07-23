import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const Option = ({ href, label, router, className }) => {
  let isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <Link href={href}>
      <option
        className={`${className ? className : ""} `}
        selected={isCurrentPath ? "selected" : ""}
        value={href}
      >
        {label}
      </option>
    </Link>
  );
};

export default withRouter(Option);
