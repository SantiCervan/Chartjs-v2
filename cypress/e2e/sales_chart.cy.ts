describe('SalesChart Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('loads and displays the chart', () => {
    cy.get('canvas').should('be.visible');
  });

  it('should display the chart', () => {
    cy.checkChartVisibility();
  });

  it('should apply filters correctly', () => {
    cy.selectYear(2022);
    cy.selectMonth(6);
    cy.selectDay(15);
    cy.setMinSales(5000);
    cy.setMaxSales(10000);
    cy.checkChartVisibility();
  });

  it('should clear filters', () => {
    cy.clearFilters();
    cy.checkChartVisibility();
  });

  it('should generate new sales', () => {
    cy.generateNewSales();
    cy.checkChartVisibility();
  });
});
