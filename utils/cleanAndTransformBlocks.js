import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON));

  const assignId = (b) => {
    b.forEach((block) => {
      block.id = uuid();
      if (!block.attributes) {
        block.attributes = {};
      }
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(blocks);

  console.log("IDS: ", blocks);

  return blocks;
};
