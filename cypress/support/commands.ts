/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    selectYear(year: number): Chainable<void>;
    selectMonth(monthIndex: number): Chainable<void>;
    selectDay(day: number): Chainable<void>;
    setMinSales(value: number): Chainable<void>;
    setMaxSales(value: number): Chainable<void>;
    clearFilters(): Chainable<void>;
    generateNewSales(): Chainable<void>;
    checkChartVisibility(): Chainable<void>;
  }
}

Cypress.Commands.add('selectYear', (year: number) => {
  cy.get('input[type="number"]').first().clear().type(year.toString());
});

Cypress.Commands.add('selectMonth', (monthIndex: number) => {
  cy.get('select').select(monthIndex.toString());
});

Cypress.Commands.add('selectDay', (day: number) => {
  cy.get('input[type="number"]').eq(1).clear().type(day.toString());
});

Cypress.Commands.add('setMinSales', (value: number) => {
  cy.get('input[type="number"]').eq(2).clear().type(value.toString());
});

Cypress.Commands.add('setMaxSales', (value: number) => {
  cy.get('input[type="number"]').eq(3).clear().type(value.toString());
});

Cypress.Commands.add('clearFilters', () => {
  cy.contains('Limpiar Filtros').click();
});

Cypress.Commands.add('generateNewSales', () => {
  cy.contains('Generar Nuevas Ventas').click();
});

Cypress.Commands.add('checkChartVisibility', () => {
  cy.get('canvas').should('be.visible');
});
