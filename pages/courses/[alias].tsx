import { withDefaultLayout } from "../../layouts/DefaultLayout/DefaultLayout";
import axios from 'axios';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from "next";
import { IMenuItem } from "../../interfaces/menu.interface";
import { ITopLevelCategory, ITopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { IProductModel } from "../../interfaces/product.interface";
const firstCategory = 0;

const Course = ({ menu, page, products }: ICourseProps): JSX.Element => {

  return (
    <>
         {products && products.length}
    </>
  );
};


export default withDefaultLayout(Course);
// формирование url страниц
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    paths: menu.flatMap((m)=> m.pages.map((p)=> '/courses/' + p.alias)),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }
  const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  const { data: page } = await axios.get<ITopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
  const { data: products } = await axios.post<IProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  };
};

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: ITopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[]
}
