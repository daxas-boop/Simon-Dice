const URL = "http://192.168.1.52:8080/";
it("Visita la pagina", () =>{
    cy.visit(URL)
    console.log("help")
})

it("Prueba el juego", () =>{
    cy.get("#Empezar").click();
})