import Iron, { WorldObjectModelAsset } from "@rbxts/iron";
import { ServerStorage } from "@rbxts/services";

const model = new WorldObjectModelAsset(
	"FramesBlueObject",
	Iron.Enum.AssetType.WorldObjectModel,
	ServerStorage.assets.WorldObjects.FramesBlue.DefaultModel,
);

Iron.Server.AssetManager.registerAsset(model);
