// loading custom fonts in satori
// https://github.com/orgs/vercel/discussions/1343

const fontWeight = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900,
} as const;

type FontWeight = typeof fontWeight;
type FontWeightString = keyof FontWeight;
type FontWeightNumber = FontWeight[FontWeightString];

const fontWeightString = Object.keys(fontWeight) as FontWeightString[];
const fontWeightNumber = Object.values(fontWeight) as FontWeightNumber[];

const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

/**
 * Load an Inter font from the public fonts directory
 * @param weight Font weight (as a string)
 * @returns Font data required by satori
 */
export const loadFont = async (weight: FontWeightString) => {
  return {
    name: "Inter",
    data: await fetch(new URL(`/fonts/Inter-${weight}.ttf`, getBaseUrl())).then(
      (res) => res.arrayBuffer()
    ),
    weight: fontWeightNumber[fontWeightString.indexOf(weight)],
  };
};

export const loadFonts = (...weights: FontWeightString[]) =>
  Promise.all(weights.map(loadFont));
