"use client";
import Navbar from "@/components/Navbar";
import { homePage } from "@/lib/pageApi";
import { AboutTemplate } from "@/templates/AboutTemplate";
import _ from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function Home() {
  const infoSection = [
    {
      image: "/assets/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg",
      title: "Services",
      description:
        "Explore the variety of services that can be combined to create customized packages for each small business brand.",
      button: "I'm Interested",
    },
    {
      image: "/assets/luca-bravo-9l_326FISzk-unsplash.jpg",
      title: "Let’s work Together",
      description:
        "Ready to take the next step? Let’s chat to see how I can help!",
      button: "let's chat",
    },
  ];
  const [homeData, seHomeData] = useState([]);
  const [image, setImage] = useState("");
  useEffect(() => {
    homePage().then((result) => {
      seHomeData(result.fields);
      setImage(result.fields.homePagePicture.fields.file.url);
    });
  }, []);
  //TODO Add router checker
  return (
    <main className="">
      <div className="">
        <Image
          width={0}
          height={0}
          className="w-full h-auto"
          alt="image of adrine"
          unoptimized
          src={image}
        />
        <div className="flex flex-col items-center">
          <div className="p-4 text-center space-y-4">
            <h2 className="font-bold text-lg text-slate-800">
              {homeData.homePageTitle}
            </h2>
            <Markdown className="text-slate-700">
              {homeData.intoduction}
            </Markdown>
          </div>
          <button className="uppercase px-5 py-3 bg-black text-white rounded-3xl">
            tell me more
          </button>
        </div>
      </div>
      {_.map(infoSection, (item, i) => (
        <InfoSection key={i} data={item} />
      ))}
    </main>
  );
}

const InfoSection = ({ data, reverse }) => {
  return (
    <div
      className={`p-5 pt-8 space-y-4 flex flex-col items-center sm:flex-row sm:even:flex-row-reverse`}
    >
      <div className="basis-1/2">
        <Image
          width={0}
          height={0}
          alt={data.title}
          src={data.image}
          className="w-full"
          unoptimized
        />
      </div>

      <div className="flex flex-col items-center gap-5 basis-1/2">
        <div className="text-center space-y-3 ">
          <h2 className="uppercase text-slate-400 text-sm font-semibold">
            {data.title}
          </h2>
          <p className="text-sm px-4">{data.description}</p>
        </div>
        <button className="rounded-3xl uppercase bg-black text-white text-sm p-4 py-2 ">
          {data.button}
        </button>
      </div>
    </div>
  );
};
