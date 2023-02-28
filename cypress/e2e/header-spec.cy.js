describe('Header testing', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://tune-spoon-db-v1.herokuapp.com/albums", {fixture: "albums.json"})
    cy.visit('http://localhost:3000/')    
  })

  it('should have a title', () => {
    cy.contains('Tune Spoon')
  })

  it('should send the user to the favorites page when favorites is clicked', () => {
    cy.get('button').contains('Favorites')
      .click()
      .url().should('include', '/favorites')
  })

  it('should send the user to the home page when home is clicked', () => {
    cy.visit('http://localhost:3000/27')
    cy.get('button').contains('Home')
      .click()
      .url().should('include', '/')
  })
})