describe('adding a restaurant', () => {
  it('display the restaurnat in the list', () => {
    const restaurantName = 'Delicious Food';
    cy.visit('http://localhost:3000');

    cy.get('[data-test="addRestaurantButton"]')
      .click();
    // Input
    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveRestaurantButton"]')
      .click();
    // Somewhere on the page
    cy.contains(restaurantName);
  });
});
