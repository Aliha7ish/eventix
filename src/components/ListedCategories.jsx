/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import sprite from "../assets/spriteCategory.svg";
import styles from "../modules/ListedCategories.module.css";
import { NavLink, useSearchParams } from "react-router-dom";

export default function ListedCategories() {
  const list = [
    {
      category: "educational",
      value: "educational",
    },
    {
      category: "talks",
      value: "talks",
    },
    {
      category: "entertainment",
      value: "entertainment",
    },
    {
      category: "news",
      value: "news",
    },
    {
      category: "personal development",
      value: "personal_development",
    },
  ];
  return (
    <div className={styles.listContainer}>
      <div className={styles.listContainerInner}>
        {list.map((cat) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeCategoryItem : ""
            }
            key={cat.category}
            to={`/discover/category?cat=${cat.value}`}
          >
            <div className={styles.categoryItem} key={cat}>
              <svg>
                <use xlinkHref={`${sprite}#${cat.category}`} />
              </svg>
              <p>{cat.category}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
