describe('Rental Buddy E2E', () => {
  it('loads home and shows core UI', () => {
    cy.visit('/');
    cy.contains('Rental Buddy');
    cy.findByLabelText(/address/i);
    cy.contains(/export csv/i);
  });
});
