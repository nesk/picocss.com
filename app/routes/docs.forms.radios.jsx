import metaData from "~/data/meta";

import Content from "~/components/docs/Content";
import Header from "~/components/docs/Header";

const { titleSuffix } = metaData();

export const meta = () => ({
  title: `Radios ${titleSuffix}`,
  description: "Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur.",
});

export default function CheckboxesAndRadios() {
  return (
    <>
      {/* Header */}
      <Header
        title="Radios"
        description="Duis scelerisque nisi ligula, eget ornare lectus ornare efficitur."
      />

      {/* Content */}
      <Content />
    </>
  );
}