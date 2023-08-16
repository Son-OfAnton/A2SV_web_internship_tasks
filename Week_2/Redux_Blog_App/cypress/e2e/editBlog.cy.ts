/**
 * This test is for testing editing a blog's title and content
 * It must perform clearance of old values and substitute them with new ones
 */


describe('Editing a blog', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("should edit a blog", () => {
    const editedTitle = "Edited title"
    const editedContent = "Edited content"
    const oldTitle =  cy.getElement("blogTitle").first()
    const oldContent = cy.getElement("blogContent").first()

    cy.getElement("editBtn").first().click()

    cy.getElement("editedTitleField").first().clear().type(editedTitle)
    cy.getElement("editedContentField").first().clear().type(editedContent)
    
    cy.getElement("checkBtn").first().click();

    cy.getElement("blogTitle").first().should("not.contain", oldTitle)
    cy.getElement("blogContent").first().should("not.contain", oldContent)

  });
})