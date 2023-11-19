import Iron, { WorldObjectModelAsset } from "@rbxts/iron";
import { ServerStorage } from "@rbxts/services";

const model = new WorldObjectModelAsset(
	"FramesRedObject",
	Iron.Enum.AssetType.WorldObjectModel,
	ServerStorage.assets.WorldObjects.FramesRed.DefaultModel,
);

Iron.Server.AssetManager.registerAsset(model);
