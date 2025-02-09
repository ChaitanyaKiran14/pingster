"use client";
import React from "react";
import { SidebarDemo } from "@/components/sidebar";
import { usePaths } from "@/hooks/user-nav";

type Props = {
  children: React.ReactNode;
  params: { swag: string }; // we are getting the id of the page
  page : string
};

//Using React Query,first create the query client and then we're going to prefetch some user information and pass them down into our into components 

const Layout = ({ children, params }: Props) => {
  const { page } = usePaths()
  if (!params.swag) {
    return <div>No `swag` parameter provided!</div>;
  }

  return (
    <div>
     <SidebarDemo swag ={params.swag}  page={page}/>
    </div>
  );
};

export default Layout;



//accessing dynamic route parameters :

// const Products = async ({params} : {params : {id: string}}) => {
//   const {id} = await params
//   return (       
//       <div>
//           <h1>Hey id :  {id} </h1>
//       </div>
//   )
// }
// export default Products