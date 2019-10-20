import React from 'react';
import {
  Collection,
  CollectionItem,
} from 'react-materialize';

const RestaurantList = ({ restaurants }) => (
  <Collection header="Restaurants">
    <RestaurantItems restaurants= { restaurants } />
  </Collection>
);

const RestaurantItems = ({ restaurants }) => (
  restaurants.length === 0
    ? <NoRestaurantItems />
    : <SomeRestaurantItems restaurants={ restaurants } />
);

const NoRestaurantItems = () => (
  <CollectionItem style={{ color: 'gray' }}>
    (None added Yet)
  </CollectionItem>
);

const SomeRestaurantItems = ({ restaurants }) => (
  restaurants.map(restaurantName => (
    <CollectionItem key = {restaurantName}> 
      {restaurantName}
    </CollectionItem>
  ))
);

export default RestaurantList;
