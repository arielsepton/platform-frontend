/// <reference types="vite-plugin-svgr/client" />

export const importComponent = async (path: string) => {
  const module = await import(path);
  const ImportedComponent = module.default;
  return <ImportedComponent />;
};
