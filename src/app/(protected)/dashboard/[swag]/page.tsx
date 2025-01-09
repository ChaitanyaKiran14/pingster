//this is going to look like a gradinet cards page
import React from "react";

type Props = {
  params: { swag: string };
};

const Page = ({ params }: Props) => {
  return (
    <div>
      <h1>Swag Page</h1>
      <p>ID: {params.swag}</p>
    </div>
  );
};

export default Page;
