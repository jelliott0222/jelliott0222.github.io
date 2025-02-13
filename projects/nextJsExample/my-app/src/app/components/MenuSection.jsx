import React from "react";
import PriceRow from "./PriceRow";

export default function MenuSection({ section }) {
  const { id, title, list, img, description, items } = section;
  return (
    <section id={id}>
      <h4>{title}</h4>
      {list && (
        <div className="list">{list.map((l, lKey) => l.label).join(" | ")}</div>
      )}
      {img && (
        <div className="img-container">
          <img src={img} />
        </div>
      )}
      {description && <div className="description">{description}</div>}
      <div className="items">
        {items.map((i, iKey) =>
          i.subItems ? (
            <div key={iKey} className="subItems">
              <h6 key={iKey}>{i.label}</h6>
              {i.subItems.map((si, siKey) => (
                <React.Fragment key={siKey}>
                  <PriceRow
                    label={si.label}
                    description={si.description}
                    price={si.price}
                    dots={false}
                  />
                </React.Fragment>
              ))}
            </div>
          ) : (
            <React.Fragment key={iKey}>
              <PriceRow
                label={i.label}
                description={i.description}
                price={i.price}
                dots={false}
              />
            </React.Fragment>
          )
        )}
      </div>
    </section>
  );
}
