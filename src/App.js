import React from 'react';
import RestaurantListPage from './components/RestaurantListPage';

export default class App extends React.Component {
  render() {
    return (
      <div> 
        <h1 id="title" >Welcome to Restauranto!</h1>
        <div>
          <RestaurantListPage />
        </div>
      </div>
    );
  }
}
