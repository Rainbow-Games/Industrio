import Iron, { WorldObjectModelAsset } from "@rbxts/iron";
import { ServerStorage } from "@rbxts/services";

const model = new WorldObjectModelAsset(
	"FramesGreenObject",
	Iron.Enum.AssetType.WorldObjectModel,
	ServerStorage.assets.WorldObjects.FramesGreen.DefaultModel,
);

Iron.Server.AssetManager.registerAsset(model);
