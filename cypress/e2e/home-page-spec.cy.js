describe('Home page testing', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://tune-spoon-db-v1.herokuapp.com/albums", {fixture: "albums.json"})
    cy.visit('http://localhost:3000/')    
  })

  it('should display a list of albums', () => {
    cy.get('img[alt="Unlimited Love"]')
      .should('have.attr', 'src', 'https://lastfm.freetls.fastly.net/i/u/770x0/07f19170333eb7221e6486b32d39da49.jpg#07f19170333eb7221e6486b32d39da49')
    
    cy.get('img[alt="No New World"]')
      .should('have.attr', 'src', 'https://lastfm.freetls.fastly.net/i/u/770x0/088fea2b4baa6f4ee55d9925a4aa9d8f.jpg#088fea2b4baa6f4ee55d9925a4aa9d8f')

    cy.get('img[alt="Brothers in Arms"]')
      .should('have.attr', 'src', 'https://lastfm.freetls.fastly.net/i/u/770x0/d3394952d369468ec64a7d5582c013cc.jpg#d3394952d369468ec64a7d5582c013cc')
  })
})