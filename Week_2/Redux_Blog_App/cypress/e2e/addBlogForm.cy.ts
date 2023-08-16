/**
 * This test is for adding a new blog.
 * It must perform additong of a blog with dummy title and content
 */

describe('Add blog from works ', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("should add a new blog", () => {
    const title = "Test Blog Title";
    const content = "Test Blog Content";

    cy.get("#blogTitle").type(title);
    cy.get("#blogContent").type(content);

    cy.get("button").contains("Save Blog").click();

    cy.contains("h3", title).should("be.visible");
    cy.contains("p", content).should("be.visible");
  });
})