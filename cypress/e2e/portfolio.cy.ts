
describe('main test', () => {
  it('visit personal portfolio, section main', () => {
    cy.visit('http://localhost:5173/personal-portfolio/')

    cy.contains('knowMyStack()').should('exist').and('be.visible').click()

    cy.contains('seeMyProjects()').should('exist').and('be.visible').click()
    
    cy.contains('getInTouch()').should('exist').and('be.visible').click()

    cy.contains('readAboutMe()').should('exist').and('be.visible').click()

  })
})

describe('knowMyStack test', ()=>{
  it('visit menu knowMyStack', ()=>{
    cy.visit('http://localhost:5173/personal-portfolio/')
    cy.contains('knowMyStack()').should('exist').and('be.visible').click()
    // cy.get('.know-my-stack .content__item').each(($item)=>{
    //   cy.wrap($item).should('exist').and('be.visible');
    // })
    cy.get('[data-cy="know-my-stack"]').then(($el) => {
      console.log($el)
    })
      
  });
})