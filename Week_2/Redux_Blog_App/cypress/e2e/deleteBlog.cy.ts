/**
 * This test is for testing deletion of a blog
 * It must perform removal of a blog from the blog list seen.
 */

describe('Editing a blog', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("should edit a blog", () => {
    cy.getElement("trashBtn").first().click();

  });
})