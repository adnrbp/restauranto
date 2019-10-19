import React from 'react';
import RestaurantListPage from './components/RestaurantListPage';
import {
  Col,
  Row,
} from 'react-materialize';

export default class App extends React.Component {
  render() {
    return (
      <div> 
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <h1 id="title" >Welcome to Restauranto!</h1>
            <RestaurantListPage />
          </Col>
        </Row>
      </div>
    );
  }
}
