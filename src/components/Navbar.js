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
  const handleMenu = () => {
    setIsopen(true);
  };
  const handleClose = () => {
    setIsopen(false);
  };
  return (
    <header>
      <MenuModal open={isOpen} close={handleClose} />
      <nav className="px-3 py-4 bg-white shadow-sm">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={0}
              height={0}
              className="h-8 w-auto"
              unoptimized
            />
          </Link>
          <button onClick={handleMenu} className="text-gray-600">
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

export default Navbar;
