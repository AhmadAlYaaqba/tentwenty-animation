import Image from "next/image";
import MenuIcon from "../public/menu.svg";
import arrowRight from "../public/shape.svg";

const navigationItem = [
  {
    label: "About",
    link: "/about",
  },
  {
    label: "News",
    link: "/news",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Our Team",
    link: "/our-team",
  },
  {
    label: "Make Enquiry",
    link: "/enquiry",
  },
];

export const Header = () => {
  return (
    <header className="h-[81px] bg-white w-full fixed top-0 z-10 flex justify-between items-center pt-[15px] pb-[18px] pr-[24px] pl-[27.6px] md:top-[21px] md:w-auto md:left-5 md:right-5 md:pl-[39px]">
      {/* desktop */}
      <nav className="hidden md:flex text-sm leading-[140%] font-normal gap-5">
        {navigationItem.map((nav) => (
          <h1 key={nav.link}>{nav.label}</h1>
        ))}
      </nav>
      <button className="text-[16px] text-[#221F20] leading-[110%] flex justify-between items-center border border-[#000000] h-9 pt-[10px] pb-2 pl-[17.66px] pr-[13.25px] w-[163.93px]">
        Contact us
        <Image
          src={arrowRight.src}
          height={arrowRight.height}
          width={arrowRight.width}
          alt="arrow-contact-us"
        />
      </button>
      <div className="block md:hidden">
        <Image
          src={MenuIcon.src}
          height={MenuIcon.height}
          width={MenuIcon.width}
          alt="menu"
        />
        {/* <img src={MenuIcon} alt="menu" /> */}
      </div>
    </header>
  );
};
