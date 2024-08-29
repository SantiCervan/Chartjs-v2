/* eslint-disable prettier/prettier */
describe('Sales Chart', () => {
  it('loads and displays the chart', () => {
    cy.visit('http://localhost:3000');
    cy.get('canvas').should('be.visible');
    // cy.contains('Ventas por Mes').should('be.visible');
  });

  // it('allows filtering by year', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('input[type="number"]').first().clear().type('2022');
  //   cy.contains('Ventas 2022').should('be.visible');
  // });
});
