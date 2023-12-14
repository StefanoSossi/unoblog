describe("write e2e", () => {
	it("write redireciton and posting", () => {
		cy.setCookie(
			"next-auth.session-token",
			"08175a8cd47a57a6497db19d8375cd001fdea7b4813ad9552cff313f46fb55bf%7C967538faccb415d74e9ae1499161c0abaa59abe58daf1ffa6ea422e9081802e1"
		);
		cy.visit("http://localhost:3000");

		cy.get('[data-testid="writeLink"]').click();
		cy.get('[data-testid="writeTitleInput"]').type("Live automated post test");
		cy.get('[data-testid="writeSelectCat"]').select(1);
		cy.get('[data-testid="writeTextArea"] .ql-editor.ql-blank p').type(
			"this is an automated live test"
		);
		cy.get('[data-testid="writePublishBtn"]').click();

		cy.url().should("include", "/live-automated-post-test");
		cy.get('[data-testid="postsTitle"]').contains("Live automated post test");
	});
});
