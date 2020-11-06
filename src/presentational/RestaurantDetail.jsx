import React from 'react';

import MenuItems from 'presentational/MenuItems';

import Reviews from 'presentational/Reviews';
import ReviewForm from './ReviewForm';

export default function RestaurantDetail({ restaurant, accessToken = null }) {
  const {
    name, address, menuItems, reviews,
  } = restaurant;

  function handleChange() {
    // TODO
  }

  function handleClick() {

  }

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />

      <h3>리뷰</h3>

      {
        accessToken && (
          <ReviewForm
            score={10}
            description="test"
            onChange={handleChange}
            onClick={handleClick}
          />
        )
      }

      <Reviews reviews={reviews} />
    </div>
  );
}
