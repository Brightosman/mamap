import FormHeader from "@/components/backoffice/FormHeader";
import NewProductForm from "@/components/backoffice/NewProductForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewProduct() {
  //Categories and Farmers
  const categoriesData = await getData("categories");
  const usersData = (await getData("users")) ?? [];
  if(!categoriesData || !usersData){
    return <div>Loading...</div>;
  }
  console.log("usersData", usersData)
  console.log(typeof usersData) 
  const farmersData = usersData.filter((user) => user.role === "FARMER") ?? [];
  console.log("farmersData", farmersData)
  const farmers = farmersData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    };
  });
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader title="New Product" />
      <NewProductForm categories={categories} farmers={farmers} />
    </div>
  );
}
