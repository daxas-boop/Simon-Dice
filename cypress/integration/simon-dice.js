const URL = "http://127.0.0.1:8080/";

it("Prueba el juego", () =>{
    cy.visit(URL)
    cy.get(".cuadro").should("have.css" ,"opacity", "0.3")
    cy.get("#Empezar").click();




cy.get('.cuadro')
  .should(($div) => {
    expect($div).to.have.css("opacity", "1")
  })
});