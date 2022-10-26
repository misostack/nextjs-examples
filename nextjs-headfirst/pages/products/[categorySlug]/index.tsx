// pages/products/[categoryId]/index.tsx

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import type { NextPage } from "next";

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
