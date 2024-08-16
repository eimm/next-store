"use client";

import React, { FC } from "react";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/models";

import GalleryTab from "./GalleryTab";

interface indexProps {
  images: ImageType[];
}

const Gallery: FC<indexProps> = ({ images }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((i) => (
            <GalleryTab key={i.id} image={i} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((i) => (
          <TabPanel key={i.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image fill src={i.url} alt="Image" />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
