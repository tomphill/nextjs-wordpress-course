import { getPageByUri } from "utils/getPageByUri";
import { getPageSeo } from "utils/getPageSeo";
import { BlockRenderer } from "components/BlockRenderer";

export default async function Page({ params }) {
  const data = await getPageByUri(params.slug.join("/"));
  return <BlockRenderer blocks={data.blocks} />;
}
export async function generateMetadata({ params }) {
  const seo = await getPageSeo(params.slug.join("/"));
  return {
    title: seo.title || "",
    description: seo.metaDesc || "",
  };
}
