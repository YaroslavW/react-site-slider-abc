import React from 'react';
import Zoom from "react-reveal/Zoom";
import MyButton from '../Utils/myButton';

const Pricing = () => {
  const data = [
    {
      prices: 100,
      positions: "Balcony",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts",
      linkto: "https://twitter.com/JroslavK",
      delay: 500
    },
    {
      prices: 150,
      positions: "Medium",
      desc:
        "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      linkto:
        "https://www.facebook.com/Yaroslav-Web-Master-1446556072148794/?modal=admin_todo_tour",
      delay: 0
    },
    {
      prices: 250,
      positions: "Star",
      desc:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      linkto:
        "https://www.facebook.com/groups/1786288918273718/?ref=bookmarks",
      delay: 500
    }
  ];

    const showBoxes = () =>
      data.map((item, i) => (
        <Zoom delay={item.delay} key={i}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>${item.prices}</span>
                <span>{item.positions}</span>
              </div>
              <div className="pricing_description">
                {item.desc}
              </div>
              <div className="pricing_buttons">
                <MyButton
                  text="Purchase"
                  bck="#ffa800"
                  color="#ffffff"
                  link={item.linkto}
                />
              </div>
            </div>
          </div>
        </Zoom>
      ));
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>

        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;