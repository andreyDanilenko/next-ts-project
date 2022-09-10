import { useState } from "react";
import { HTag, Button, PTag, Tag, Rating } from "../components";

export default function Home() {
  const [rating, setRating] = useState<number>(4)
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
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}
