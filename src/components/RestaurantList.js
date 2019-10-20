import React from 'react';
import {
  Collection,
  CollectionItem,
} from 'react-materialize';

const RestaurantList = ({ restaurants }) => (
  <Collection header="Restaurants">
    {
      restaurants.length === 0
        ? (
          <CollectionItem style={{ color: 'gray' }}>
            (None added Yet)
          </CollectionItem>
        )
        : (
          restaurants.map(restaurantName => (
            <CollectionItem key = {restaurantName}> 
              {restaurantName}
            </CollectionItem>
          ))
        )
    }
  </Collection>
);

export default RestaurantList;
