import { gql } from "@apollo/client";
import client from "client";
import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = async (blocksJSON) => {
  const { data } = await client.query({
    query: gql`
      query ExtraDataQuery {
        pages {
          nodes {
            uri
            databaseId
          }
        }
        mediaItems {
          nodes {
            databaseId
            mediaDetails {
              height
              width
            }
          }
        }
      }
    `,
  });
  console.log("all pages: ", data);
  const blocks = JSON.parse(blocksJSON);
  const deleteKeys = [
    "attributesType",
    "blockType",
    "dynamicContent",
    "originalContent",
    "saveContent",
    "postId",
    "get_parent",
    "order",
  ];

  const cleanBlocks = (b) => {
    b.forEach((block) => {
      block.id = uuid();
      deleteKeys.forEach((deleteKey) => {
        delete block[deleteKey];
      });
      if (block.name === "acf/ctabutton") {
        const associatedPage = data.pages.nodes.find(
          (page) => page.databaseId === block.attributes.data.destination
        );
        if (associatedPage) {
          block.attributes.data.destination = associatedPage.uri;
        }
      }
      if (block.name === "core/image") {
        const associatedMediaItem = data.mediaItems.nodes.find(
          (mediaItem) => mediaItem.databaseId === block.attributes.id
        );
        if (associatedMediaItem) {
          block.attributes.originalHeight =
            associatedMediaItem.mediaDetails.height;
          block.attributes.originalWidth =
            associatedMediaItem.mediaDetails.width;
        }
      }
      if (block.innerBlocks?.length) {
        cleanBlocks(block.innerBlocks);
      } else {
        delete block.innerBlocks;
      }
    });
  };

  cleanBlocks(blocks);

  return blocks;
};
