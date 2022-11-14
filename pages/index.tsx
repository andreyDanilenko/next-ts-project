import { useState } from "react";
import { HTag, Button, PTag, Tag, Rating } from "../components";
import { withDefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import axios from 'axios';
import { GetStaticProps } from "next";
import { IMenuItem } from "../interfaces/menu.interface";
import { ITopLevelCategory } from "../interfaces/page.interface";

const Home = ({menu}: IHomeProps):JSX.Element => {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <HTag tag="h3">Text</HTag>
      <PTag>Description</PTag>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Green</Tag>
      <Button appearance="primary" arrow="right">Click</Button>
      <Button appearance="ghost" arrow="down">Click</Button>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};


export default withDefaultLayout(Home);

export const getStaticProps: GetStaticProps = async() => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
       menu, 
       firstCategory
    }
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: ITopLevelCategory;
}
