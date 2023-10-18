"use client";
import { menulist } from "@/data/menuitems";
import { aboutPage } from "@/lib/pageApi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function Page() {
  let listitem = _.filter(menulist, (list) => list.item == "About");
  const pathname = usePathname();
  const [menuItems, setmenuItem] = useState([]);
  const [checkPath, setcheckPath] = useState(false);
  const [checkPath2, setcheckPath2] = useState(false);
  const [hideItem, sethideItems] = useState(true);
  const extPath = pathname.substring(1).split("-").join(" ").toLowerCase();
  const [aboutContent, setAboutContent] = useState([]);
  const [themeImage, setThemeImage] = useState("");
  const renderAsset = (node, children) => {
    return (
      <Image
      src={`https://${node.data.target.fields.file.url}`}        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
        alt={node.data.target.fields.description}
      />
    );
  };
  // this sets font attributes
  const richtext_options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className=" font-serif text-slate-800 pb-5 leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="font-serif text-2xl font-light text-slate-800 sm:text-3xl">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="uppercase font-sans text-xl text-slate-800 pb-3 pt-8 sm:text-2xl">
          {children}
        </h4>
      ),
      [BLOCKS.HR]:(node,children)=>(<hr className="my-10 sm:hidden"/>),
      [BLOCKS.EMBEDDED_ASSET]: renderAsset,
    },
  };

  // this hook is checking if the route is active
  const menufun = useCallback(() => {
    setmenuItem(
      _.filter(listitem[0].path, (item) => extPath != item.item.toLowerCase())
    );
  }, [listitem, extPath]);

  useEffect(() => {
    if (!checkPath) {
      menufun();
      setcheckPath(true);
    }
  }, [menufun, checkPath]);

  // this is fetching data according to the route
  useEffect(() => {
    if (!checkPath2) {
      _.map(listitem[0].path, (item) => {
        if (item.path == pathname) {
          aboutPage(pathname.substring(1)).then((res) => {
            setcheckPath2(true);
            setThemeImage(res.items[0].fields.themeImage.fields.file.url);
            return setAboutContent(res.items[0].fields);
          });
        }
      });
    }
  }, [listitem, pathname, checkPath2]);

  return (
    <div>
      <div className="relative z-0">
        <Image
          width={0}
          height={0}
          alt={aboutContent.title}
          src={themeImage}
          className="w-full h-auto sm:h-36 object-cover"
          unoptimized
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
          <h2 className="font-semibold uppercase text-lg ">
            {aboutContent.title}
          </h2>
        </div>
      </div>
      <div className="w-full py-8 flex flex-row-reverse justify-between items-start px-4">
        <div
          className="w-full flex justify-end  text-xl font-extralight cursor-pointer "
          onClick={() => sethideItems(!hideItem)}
        >
          +
        </div>
        {console.log(aboutContent)}
        {!hideItem && (
          <ul className="w-full">
            {_.map(menuItems, (item) => (
              <li key={item.id} className="uppercase">
                {item.item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="px-4 flex flex-col items-center gap-5 ">
        {/* //TODO add richtext to mark down */}
        <div>
          {documentToReactComponents(aboutContent.body, richtext_options)}
        </div>
        <button className="uppercase px-5 py-3 bg-black text-white rounded-3xl w-fit">
          tell me more
        </button>
      </div>
    </div>
  );
}

export default Page;
