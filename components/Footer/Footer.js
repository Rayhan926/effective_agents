import React from "react";
import FooterLinksRenderer from "./components/FooterLinksRenderer/FooterLinksRenderer";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const footerLinks = {
  POPULAR_CITIES: {
    section_title: "POPULAR CITIES",
    links: [
      {
        text: "Atlanta",
        url: "#",
      },
      {
        text: "Austin",
        url: "#",
      },
      {
        text: "Boston",
        url: "#",
      },
      {
        text: "Chicago",
        url: "#",
      },
      {
        text: "Los Angeles",
        url: "#",
      },
      {
        text: "Miami",
        url: "#",
      },
      {
        text: "New York",
        url: "#",
      },
      {
        text: "Portland",
        url: "#",
      },
    ],
  },

  ALL_CITIES: {
    section_title: "ALL CITIES",
    links: [
      {
        text: "San Diego",
        url: "#",
      },
      {
        text: "San Francisco",
        url: "#",
      },
      {
        text: "Sarasota",
        url: "#",
      },
      {
        text: "Seattle",
        url: "#",
      },
    ],
  },
  GENERAL: {
    section_title: "GENERAL",
    links: [
      {
        text: "For Sellers",
        url: "#",
      },
      {
        text: "For Buyers",
        url: "#",
      },
      {
        text: "Why It Works",
        url: "#",
      },
      {
        text: "Resources",
        url: "#",
      },
    ],
  },
  ABOUT_US: {
    section_title: "ABOUT US",
    links: [
      {
        text: "Company",
        url: "#",
      },
      {
        text: "Stories",
        url: "#",
      },
      {
        text: "Press",
        url: "#",
      },
      {
        text: "Contact Us",
        url: "#",
      },
    ],
  },
  FOR_AGENTS: {
    section_title: "For Agents",
    links: [
      {
        text: "Agent Portal",
        url: "#",
      },
      {
        text: "For Agents",
        url: "#",
      },
      {
        text: "Become an Agent",
        url: "#",
      },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-white pt-[50px] lg:pt-[100px]">
      <div className="container">
        <div className="mb-[60px] flex flex-col lg:flex-row gap-y-7 text-center lg:text-left justify-between items-center">
          <h3 className="title_md">Find an Effective Agent Near You</h3>
          <button className="__button">FIND AN AGENT</button>
        </div>

        <div className="border-y-2 border-soft-gray py-[50px]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-0 lg:grid-cols-[33.32%,16.66%,16.66%,16.66%,16.66%]">
            <FooterLinksRenderer
              {...footerLinks.POPULAR_CITIES}
              ulClassNames="lg:columns-2"
            />
            <FooterLinksRenderer {...footerLinks.ALL_CITIES} />
            <FooterLinksRenderer {...footerLinks.GENERAL} />
            <FooterLinksRenderer {...footerLinks.ABOUT_US} />
            <FooterLinksRenderer {...footerLinks.FOR_AGENTS} />

            <div className="lg:hidden flex flex-col justify-between">
              <SocialIcons />
              <ul>
                <li>
                  <Link href={"#"}>
                    <a className="inline-block hover:underline hover:text-primary text-[#666666]">
                      Terms
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <a className="inline-block hover:underline hover:text-primary text-[#666666]">
                      Privacy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-between items-center py-[30px] lg:py-[55px]">
          <div className="flex items-center gap-8">
            <img src="/img/site_icon.png" alt="site_icon" />
            <p className="text-sm text-[#666666]">©2021, All rights Reserved</p>
            <div className="gap-2 text-[#666666] text-sm [&>a:hover]:underline [&>a:hover]:text-primary hidden lg:flex">
              <Link href={"#"}>
                <a>Terms</a>
              </Link>
              |
              <Link href={"#"}>
                <a>Privacy</a>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-5 lg:gap-[40px] [&>a]:scale-125 [&>a:hover]:scale-[1.4] [&>a]:duration-150 [&>a]:text-primary">
      <a href="#">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaLinkedinIn />
      </a>
    </div>
  );
};
