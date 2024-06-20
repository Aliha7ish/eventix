/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import sprite from "../assets/spriteCategory.svg";

export default function GridContainer2R() {
  const categories = [
    {
      category: "educational",
      icon: `${sprite}#educational`,
    },
    {
      category: "talks",
      icon: `${sprite}#talks`,
    },
    {
      category: "entertainment",
      icon: `${sprite}#entertainment`,
    },
    {
      category: "personal development",
      icon: `${sprite}#personal development`,
    },
    {
      category: "news",
      icon: `${sprite}#news`,
    },
  ];
  return (
    <div className="grid-container">
      <div className="grid-container-inner grid-container-cat-inner-1r">
        {categories.map((cat) => (
          <div className="grid-category-item" key={cat}>
            <svg>
              <use xlinkHref={cat.icon} />
            </svg>
            <p>{cat.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
