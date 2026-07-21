export const getInitials = (name?: string | null): string => {
  if (!name) return "";

  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};
