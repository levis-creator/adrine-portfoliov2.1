"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowRightSFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import _ from "lodash";
import { menulist } from "@/data/menuitems";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const handleMenu = () => {
    setIsopen(true);
  };
  const handleClose = () => {
    setIsopen(false);
  };
  const handlePopup = () => {
    setOpenPopup(!openPopup);
    setTimeout(() => {
      setOpenPopup(false);
    }, 4000);
  };
  return (
    <header>
      <MenuModal open={isOpen} close={handleClose} />
      <nav className="px-3 py-4 bg-white shadow-sm lg:px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={0}
              height={0}
              className="h-8 lg:h-12 w-auto"
              unoptimized
            />
          </Link>
          <ul className="hidden lg:flex uppercase font-semibold justify-between gap-6">
            {_.map(menulist, (navItem) => (
              <li key={navItem.id} className="relative">
                <Link
                  href={!_.isArray(navItem.path) ? navItem.path : ""}
                  aria-expanded={_.isArray(navItem.path) ? true : ""}
                  aria-haspopup={_.isArray(navItem.path) ? true : ""}
                  id={_.isArray(navItem.path) ? "about" : ""}
                  onClick={_.isArray(navItem.path) ? handlePopup : ""}
                >
                  {navItem.item}
                  {_.isArray(navItem.path) && (
                    <PopUp
                      data={_.isArray(navItem.path) ? navItem.path : ""}
                      isOpen={openPopup}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleMenu}
            className="text-gray-600 text-2xl lg:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

const MenuModal = ({ open, close }) => {
  const [dispList, setDispList] = useState(false);
  return (
    <>
      {open && (
        <div
          className="fixed bg-black w-full h-full bg-opacity-50 flex justify-end z-10 "
          onClick={close}
        >
          <div
            className="bg-white h-full w-3/5 px-4 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={close} className="text-xl text-gray-600">
              <AiOutlineClose />
            </button>
            <ul className="uppercase font-semibold text-sm space-y-3">
              {_.map(menulist, (item, i) => {
                if (_.isArray(item.path)) {
                  return (
                    <div key={item.id}>
                      <li
                        className="flex items-center cursor-pointer"
                        onClick={() => setDispList(!dispList)}
                      >
                        {item.item}{" "}
                        {dispList ? <MdArrowDropDown /> : <RiArrowRightSFill />}
                      </li>
                      {dispList && (
                        <ul className="pl-3 font-normal">
                          {_.map(item.path, (item, i) => (
                            <li key={item.id}>
                              <Link href={item.path} onClick={close}>
                                {item.item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <li key={item.id}>
                      <Link href={item.path} onClick={close}>
                        {item.item}
                      </Link>
                    </li>
                  );
                }
              })}
              <li>
                <button className="uppercase border-2 border-black p-2">
                  Let&lsquo;s work together
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
const PopUp = ({ data, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="absolute bg-white p-2 shadow-md rounded-md w-32 z-20"
          role="menu"
          aria-labelledby="about"
          aria-orientation="vertical"
          tabIndex="-1"
        >
          <div role="none">
            <ul>
              {_.map(data, (item) => (
                <li key={item.id} className="hover:border  w-full">
                  <Link href={item.path} className="text-sm ">
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
