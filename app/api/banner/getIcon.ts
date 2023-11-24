import * as icons from "simple-icons";

// supports any icon from simple-icons
// https://simpleicons.org/

type Icon = keyof typeof icons;

/**
 * Retrieve an icon from package given a partial icon name
 *
 * @param partialIconKey Partially correct package icon name (without si and capitalization)
 * @returns SVG string of the icon (or null, if not found)
 */
export const getIcon = (partialIconKey: string): string | null => {
  const iconKey = `si${toCapitalize(partialIconKey)}` as Icon;
  const icon = icons[iconKey]?.svg;

  return icon ?? null;
};

const toCapitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
