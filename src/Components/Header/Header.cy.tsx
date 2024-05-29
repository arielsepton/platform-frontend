import "src/index.css";
import { BreadcrumbItem } from "./Breadcrumb/Breadcrumb";
import Header from "./Header";
import { APP_NAME } from "src/common/consts";

describe("Header Component", () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { text: "Home", isDropdown: false, shouldAddDivider: false },
    { text: "Dashboard", isDropdown: false, shouldAddDivider: false },
  ];
  const user = "Israel Israeli";

  it("renders header with breadcrumbs and user info", () => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);

    cy.contains(APP_NAME).should("be.visible");
    cy.contains("Home").should("be.visible");
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Israel Israeli").should("be.visible");
  });

  it("renders user thumbnail", () => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);

    cy.get("svg").should("have.length", 3); // AppIcon, ArrowDown, and user thumbnail
  });

  it("renders breadcrumbs correctly", () => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);

    cy.get("nav").within(() => {
      cy.contains("Home").should("be.visible");
      cy.contains("Dashboard").should("be.visible");
    });
  });

  it("loads and displays user thumbnail dynamically", () => {
    cy.mount(<Header breadcrumbs={breadcrumbs} user={user} />);

    cy.get(".relative").within(() => {
      cy.get("svg").should("exist");
    });
  });
});
