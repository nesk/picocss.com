import ThemePreview from "~/components/docs/ThemePreview";
import cssStyle from "~/styles/css/custom-themes/slate.css";
import { themeGeneratorDescription, themeGeneratorTitle } from "~/utils";

const colorName = "Slate";

export const meta = () => [
  { title: themeGeneratorTitle(colorName) },
  {
    name: "description",
    content: themeGeneratorDescription(colorName),
  },
];

export function links() {
  return [{ rel: "stylesheet", href: cssStyle }];
}

export default function Customization() {
  return <ThemePreview title={colorName} />;
}