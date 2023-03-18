import React from "react";

const Menu = (item) => {
  const { items } = item;
  return (
    <main className="foods_container">
      {items.map((element) => {
        const { id, title, img, desc, price } = element;

        return (
          <div className="card">
            <div className="img_container">
              <img src={img} alt="" width={200} height={200} />
            </div>

            <div className="info_container">
              <div className="top_cont">
                <div>{title}</div> <p>${price} </p>
              </div>
              <div className="bottom_cont"> {desc} </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Menu;
