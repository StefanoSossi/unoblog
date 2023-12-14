describe("about e2e", () => {
	it("about redirection", () => {
		cy.setCookie(
			"next-auth.session-token",
			"08175a8cd47a57a6497db19d8375cd001fdea7b4813ad9552cff313f46fb55bf%7C967538faccb415d74e9ae1499161c0abaa59abe58daf1ffa6ea422e9081802e1"
		);

		cy.visit("http://localhost:3000");

		cy.get('[data-testid="aboutLink"]').click();

		cy.url().should("include", "/about");
		cy.get('[data-testid="aboutTitle"]').contains("About Us");
	});
});
