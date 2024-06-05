import { BreadcrumbItem } from "./Breadcrumb";

export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [];
  const pathSegments = pathname.split("/").filter((segment) => segment);

  if (pathSegments.length === 1) {
    return [{ text: "Projects overview" }];
  }

  if (pathSegments.length > 1) {
    breadcrumbs.push({ text: pathSegments[1], isDropdown: true });
    if (pathSegments.length > 3) {
      breadcrumbs.push({ text: pathSegments[3], shouldAddDivider: true });
    }
  }

  return breadcrumbs;
};
