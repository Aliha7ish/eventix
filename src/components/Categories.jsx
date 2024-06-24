/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Category from "./Category";
export default function Categories({ categories, filter }) {
  return (
    <div>
      {categories.map((category) => {
        return (
          <Category
            key={category.category}
            category={category.category}
            events={category.events}
            filteredType={filter}
          />
        );
      })}
    </div>
  );
}
