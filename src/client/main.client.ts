import Iron, { WorldObjectModelAsset } from "@rbxts/iron";
import { InputAction } from "@rbxts/iron/out/lib/System/Client";

Iron.Client.PlacementManager.set("FramesObject");

const worldObjects = ["FramesObject", "FramesRedObject", "FramesBlueObject", "FramesGreenObject"];
const switchObject = new InputAction([Enum.KeyCode.E]);

let c = 0;

switchObject.Event.Connect(() => {
	c += 1;
	if (c >= worldObjects.size()) {
		c = 0;
	}
	Iron.Client.PlacementManager.set(worldObjects[c]);
});
