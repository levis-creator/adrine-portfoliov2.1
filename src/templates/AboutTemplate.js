"use client";

import { menulist } from "@/data/menuitems";
import _ from "lodash";
import Link from "next/link";
import { useParams } from "next/navigation";

export const AboutTemplate = ({ children }) => {
  const sideBar = menulist[2];
  const pathname = useParams();
  // this checks for activities
  return (
    <div className="sm:flex  w-full justify-between pt-8 md:px-6 lg:px-56">
      <div className="hidden sm:flex flex-col w-full pl-4 text-slate-600 basis-1/4">
        <h2 className="font-semibold text-2xl uppercase text-slate-600">
          {sideBar.item}
        </h2>
        <ul className="uppercase ">
          {_.map(sideBar.path, (item) => (
            <li>
              <Link
                href={item.path}
                className={`${
                  item.path.substring(1) == pathname.about ? "text-black" : ""
                }`}
              >
                {item.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-3/4">{children}</div>
    </div>
  );
};
