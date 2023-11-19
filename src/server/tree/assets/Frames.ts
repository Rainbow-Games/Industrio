import Iron, { WorldObjectModelAsset } from "@rbxts/iron";
import { ServerStorage } from "@rbxts/services";

const model = new WorldObjectModelAsset(
	"FramesObject",
	Iron.Enum.AssetType.WorldObjectModel,
	ServerStorage.assets.WorldObjects.Frames.DefaultModel,
);

Iron.Server.AssetManager.registerAsset(model);
