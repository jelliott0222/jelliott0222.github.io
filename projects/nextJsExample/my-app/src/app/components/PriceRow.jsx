import React from "react";

export default function PriceRow({ label, description, price, dots }) {
  return (
    <div className="item">
      <div className="item-label-row">
        <span className="label">{label}</span>
        <span className="price">
          {price &&
            Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
        </span>
      </div>
      {description && <span className="item-desc">{description}</span>}
    </div>
  );
}
