describe("Template", () => {
  beforeEach(() => {
    cy.visit("test");
  });

  it("Should highlight object on hover", () => {
    cy.get("div").contains("Template app");
  });
});
