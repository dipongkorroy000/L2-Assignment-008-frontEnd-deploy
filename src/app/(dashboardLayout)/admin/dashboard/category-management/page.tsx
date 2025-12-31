import CategoryManagement from "@/src/components/modules/admin/category/CategoryManagement";
import CategoryTable from "@/src/components/modules/admin/category/CategoryTable";
import {getCategories} from "@/src/services/public/category.service";
import React from "react";

const CategoryManagementPage = async () => {
  const categories = await getCategories();

  return (
    <section className="max-w-7xl mx-auto">
      <CategoryManagement></CategoryManagement>

      <CategoryTable categories={categories.data}></CategoryTable>
    </section>
  );
};

export default CategoryManagementPage;
