"use client";

import React, { FC, MouseEventHandler } from "react";
import { BackpackIcon, EnterIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

import useCart from "@/hooks/useCart";
import usePreviewModal from "@/hooks/usePreviewModal";
import { Product } from "@/models";

import ButtonIcon from "./ButtonIcon";
import Money from "./Money";

interface ProductCardProps {
  item: Product;
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const handleOpenProduct = () => {
    router.push(`/product/${item.id}`);
  };
  const handlePreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    previewModal.onOpen(item);
  };
  const handleCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.add(item);
  };
  return (
    <div
      onClick={handleOpenProduct}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 "
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={item?.images?.[0]?.url}
          alt={`${item.name} image`}
          fill
          className="aspect-square object-cover rounded-sm"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <ButtonIcon
              onClick={handlePreview}
              icon={<EnterIcon />}
            ></ButtonIcon>
            <ButtonIcon
              onClick={handleCart}
              icon={<BackpackIcon />}
            ></ButtonIcon>
          </div>
        </div>
      </div>
      <div>
        <p className="font-light text-lg">{item.name}</p>
        <p className="font-light text-sm text-slate-700">
          {item.category?.name}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Money value={item.price} />
      </div>
    </div>
  );
};

export default ProductCard;
