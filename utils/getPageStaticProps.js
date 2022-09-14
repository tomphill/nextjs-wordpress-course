import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  return {
    props: {
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      callToActionLabel:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination:
        data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks,
    },
  };
};
