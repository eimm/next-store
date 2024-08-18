'use client';

import React, { FC } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Sticky from 'react-stickynode';

import { useSizes } from '@/hooks/useSizes';
import { Billboard } from '@/models';

interface ParallaxBillboard2Props {
  data: Billboard;
}

const ParallaxBillboard: FC<ParallaxBillboard2Props> = ({ data }) => {
  const isMobile = useSizes('md');
  return (
    <Sticky enabled={isMobile} top="#header" bottomBoundary="#footer">
      <div className="m-4 sm:m-6 lg:m-8 rounded-xl overflow-hidden">
        <ParallaxBanner
          layers={[{ image: data?.imageUrl, speed: -20 }]}
          className="aspect-square md:aspect-[2/3] md:mb-48 rounded-xl"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl text-white font-thin">{data?.label}</h1>
          </div>
        </ParallaxBanner>
      </div>
    </Sticky>
  );
};

export default ParallaxBillboard;
