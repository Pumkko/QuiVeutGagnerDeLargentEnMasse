describe('Game Page', () => {
  it('Shows the initial game page', () => {
    cy.visit('/')
    cy.contains('Qui veut gagner de l\'argent en Masse');
    cy.get('.questionTitre');

    cy.get('input').should('have.length', 4);
  });

  it('Runs an animation when we click without specifying an answer', () => {
    cy.get('button').click();
    cy.get('button').should('have.class', 'shake-horizontal');

    // Cypress will wait for at least 4 seconds before failing that condition,
    // Given that the animation will only last 0.8s we're good 
    cy.get('button').should('not.have.class', 'shake-horizontal');
  });

  it('Should display a Good Answer Text', {
    defaultCommandTimeout: 6000
  }, () => {

    cy.get('input').first().click();
    cy.get('button').click();

    cy.get('#rightAnswer');
    cy.get('.nextQuestionLabel');

    cy.get('#rightAnswer').should('not.be.visible');
    cy.get('.nextQuestionLabel').should('not.be.visible');
  });
})
