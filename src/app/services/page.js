"use client";
import { servicePage, services } from "@/lib/pageApi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import _, { result } from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function Page() {
  const [serviceData, setServiceData] = useState([]);
  const [pageData, setPageData] = useState({});
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    services().then((result) => setServiceData(result.items));
    servicePage().then((result) => {
      setPageData(result.fields);
      setBgImage(result.fields.themeBackground.fields.file.url);
    });
  }, []);
  const richtext_options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="font-bold text-xl">{children}</h2>
      ),
    },
  };
  return (
    <div className="">
      <div className="relative w-screen">
        <Image
          src={bgImage}
          width={0}
          height={0}
          alt="sevices theme image"
          className="w-full h-auto sm:h-36 object-cover "
          unoptimized
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-end items-center px-8 lg:pr-72">
          <h2 className="text-white uppercase text-3xl font-semibold font-sans  ">
            Services
          </h2>
        </div>
      </div>
      <div className="py-10 px-4 md:px-8 lg:px-72 space-y-16">
        <div className=" leading-relaxed text-slate-600  space-y-4">
          {documentToReactComponents(
            pageData.introductionText,
            richtext_options
          )}
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-x-4  ">
          {_.map(serviceData, (data) => (
            <ServiceCard key={data.sys.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
const ServiceCard = ({ data }) => {
  const [readMore, setReadMore] = useState(false);
  const handleRead = () => {
    setReadMore(!readMore);
    setTimeout(() => {
      setReadMore(false);
    }, 5000);
  };
  const richtext_options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc px-5">{children}</ul>
      ),
    },
  };
  return (
    <div className="space-y-3">
      <div className="">
        <Image
          src={data.fields.image.fields.file.url}
          height={0}
          width={0}
          alt="sample "
          className="w-full h-56 object-cover"
          unoptimized
        />
      </div>
      <div
        className={`${!readMore ? "h-24 overflow-hidden" : ""} text-slate-600`}
      >
        <h2 className="uppercase font-bold">{data.fields.title}</h2>
        {documentToReactComponents(
          data.fields.serviceDescription,
          richtext_options
        )}
      </div>
      <button
        onClick={!readMore ? handleRead : () => setReadMore(false)}
        className="uppercase bg-black text-white w-fit p-2 rounded-xl font-sans leading-relaxed"
      >
        read {readMore ? "less" : "more"}
      </button>
    </div>
  );
};
export default Page;
