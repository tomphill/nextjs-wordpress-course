import { getPageByUri } from "utils/getPageByUri";
import { getPageSeo } from "utils/getPageSeo";
import { BlockRenderer } from "components/BlockRenderer";

export default async function Page() {
  const data = await getPageByUri("/");
  return <BlockRenderer blocks={data.blocks} />;
}

export async function generateMetadata() {
  const seo = await getPageSeo("/");
  return {
    title: seo.title,
    description: seo.metaDesc,
  };
}
