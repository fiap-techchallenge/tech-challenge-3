export const classToString = (cls: TemplateStringsArray | string): string => {
  return cls
    .toString()
    .replace(/\n/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
};
