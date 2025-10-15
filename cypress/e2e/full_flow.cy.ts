describe('Rental Buddy E2E', () => {
  it('loads home and shows core UI', () => {
    cy.visit('/');
    cy.contains('Rental Buddy');
    cy.findByLabelText(/address/i);
    cy.contains(/export csv/i);
  });

  it('submits search, calls API, and renders results', () => {
    const mockResponse = {
      input: {
        resolved_address: '123 Main St, Austin, TX',
        latitude: 30.2672,
        longitude: -97.7431,
        bedrooms: 2,
        bathrooms: 1.5,
        radius_miles: 5.0,
        days_old: '*:270',
      },
      comps: [
        {
          id: 'c1',
          address: '789 Pine St, Austin, TX 78703',
          city: 'Austin',
          state: 'TX',
          zip_code: '78703',
          county: 'Travis',
          longitude: -97.75,
          latitude: 30.27,
          price: 2300,
          bedrooms: 2,
          bathrooms: 1.5,
          square_footage: 900,
          distance_miles: 1.0,
        },
      ],
    };

    cy.intercept('POST', '**/api/v1/comps', mockResponse).as('postComps');
    cy.visit('/');
    cy.findByLabelText(/address/i).type('123 Main St');
    cy.findByRole('button', { name: /search/i }).click();

    cy.wait('@postComps').its('request.body').should((body) => {
      expect(body.radius_miles).to.be.a('number');
    });

    cy.contains(/789 Pine St/i).should('be.visible');
    cy.contains('2300').should('be.visible');
  });
});
