import Link from "next/link";
import React from "react";

const FooterLinksRenderer = ({
  section_title,
  links,
  ulClassNames = "",
  ...props
}) => {
  return (
    <div {...props}>
      <h6 className="text-sm mb-5 text-primary font-semibold">
        {section_title}
      </h6>
      <ul className={`text-base space-y-2 ${ulClassNames}`}>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.url}>
              <a className="inline-block hover:underline hover:text-primary text-[#666666]">
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksRenderer;
