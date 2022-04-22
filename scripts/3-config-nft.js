import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xc9B2362d007A44998712f251Ad964a152230f35C");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Free Pass",
        description: "This NFT will give you access to IdeaFair3 DAO!",
        image: readFileSync("scripts/assets/pic2.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();