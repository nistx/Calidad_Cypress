describe("Index", () => {
  it("Abrir Aplicación Correctamente", () => {
    cy.visit("https://www.github.com");
    cy.contains("Sign up").should("be.visible");
  });
});
describe("Repositorio", () => {
  beforeEach(() => {
    cy.visit("https://www.github.com");
    cy.wait(1000);
    cy.get(".js-details-target > .Button-content > .Button-label").click();
    cy.get(".header-search-wrapper > .form-control").type("hyperblog{enter}");
  });
  it("Buscar repositorio", () => {
    cy.get(".repo-list li").should("have.length", 10);
  });
  it("Filtrar Commits", () => {
    cy.get('.menu > [href="/search?q=hyperblog&type=commits"]').click({
      force: true,
    });
    cy.wait(1000);
    cy.get(".select-menu-list a").eq(2).click({ force: true });
  });
});
