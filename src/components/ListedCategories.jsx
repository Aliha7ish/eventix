/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import sprite from "../assets/spriteCategory.svg";
import styles from "../modules/ListedCategories.module.css";

export default function ListedCategories({ list }) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listContainerInner}>
        {list.map((cat) => (
          <div className={styles.categoryItem} key={cat}>
            <svg>
              <use xlinkHref={`${sprite}#${cat.category}`} />
            </svg>
            <p>{cat.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
