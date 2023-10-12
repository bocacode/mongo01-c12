import { addAFish,getAllFish, deleteOneFish, updateOneFish } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";

// await addAFish();
await deleteOneFish();
await getAllFish();
await updateOneFish();

closeClient();
