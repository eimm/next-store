import React, { FC } from "react";

import Container from "@/components/ui/Container";

import Cart from "./Cart";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-slate-200">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-slate-800">Your Cart</h1>
          <Cart />
        </div>
      </Container>
    </div>
  );
};

export default page;
