// pages/products/[categoryId]/index.tsx

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import type { NextPage } from "next";
import Link from "next/link";

interface productCategoryPageProps {
  category: {
    categorySlug: string;
    name: string;
  };
}

const productCategoryPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { category } = props;
  return (
    <>
      <h1>{category.name}</h1>
      <p>{category.categorySlug}</p>
      <ul>
        {Array.from(new Array(5)).map((_, index) => (
          <li key={index + 1}>
            <Link
              href={`/products/${category.categorySlug}/product-${index + 1}`}
            >{`Product ${index + 1}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default productCategoryPage;

export const getServerSideProps: GetServerSideProps<
  productCategoryPageProps
> = async (context) => {
  const categorySlug = context.query.categorySlug as string;
  const category = {
    categorySlug,
    name: `Category [${categorySlug}]`,
  };
  return {
    props: {
      category,
    },
  };
};
