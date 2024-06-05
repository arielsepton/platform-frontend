import "@index.css";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("renders children correctly", () => {
    const childText = "Test Child";
    cy.mount(<Modal>{childText}</Modal>);
    cy.contains(childText).should("exist");
  });

  it("closes modal on Escape key press if closeOnEscape prop is true", () => {
    const closeModalMock = cy.stub().as("closeModal");
    const childText = "Test Child";
    cy.mount(
      <Modal setShowModal={closeModalMock} closeOnEscape>
        {childText}
      </Modal>
    );
    cy.get("@closeModal").should("not.have.been.called");
    cy.get("body").trigger("keydown", { key: "Escape" });
    cy.get("@closeModal").should("have.been.calledOnceWith", false);
  });

  it("does not close modal on Escape key press if closeOnEscape prop is false", () => {
    const closeModalMock = cy.stub().as("closeModal");
    const childText = "Test Child";
    cy.mount(
      <Modal setShowModal={closeModalMock} closeOnEscape={false}>
        {childText}
      </Modal>
    );
    cy.get("@closeModal").should("not.have.been.called");
    cy.get("body").trigger("keydown", { key: "Escape" });
    cy.get("@closeModal").should("not.have.been.called");
  });
});
