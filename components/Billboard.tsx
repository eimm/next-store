'use client';

import React, { FC } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import { Billboard as Type } from '@/models';

interface BillboardProps {
  data: Type;
}

const Billboard: FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <ParallaxBanner
        layers={[{ image: data?.imageUrl, speed: 20 }]}
        className="aspect-square md:aspect-[3/1] rounded-xl"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl sm:max-w-xl max-w-xs">
            {data?.label}
          </h1>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Billboard;
