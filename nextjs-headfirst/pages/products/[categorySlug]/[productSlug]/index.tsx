// pages/products/[productId]/index.tsx

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface productDetailPageProps {
  product: {
    productSlug: string;
    name: string;
  };
}

const productDetailPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { product } = props;
  const router = useRouter();
  const goback = useCallback(() => {
    router.push(`/products/${router.query["categorySlug"]}`);
  }, [product]);
  return (
    <>
      <h1>{product.name}</h1>
      <p>{`Category: ${router.query["categorySlug"]}`}</p>
      <p>{product.productSlug}</p>
      <button
        className="bg-green-700 py-4 px-8 text-white"
        onClick={() => {
          goback();
        }}
      >
        Back
      </button>
    </>
  );
};

export default productDetailPage;

export const getServerSideProps: GetServerSideProps<
  productDetailPageProps
> = async (context) => {
  const productSlug = context.query.productSlug as string;
  const product = {
    productSlug,
    name: `product [${productSlug}]`,
  };
  return {
    props: {
      product,
    },
  };
};
