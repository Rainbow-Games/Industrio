import Iron, { TechTree, slices } from "@rbxts/iron";
import {
	ClonedWorldObjectComponentInterface,
	WorldObjectBase,
	WorldObjectComponentBase,
} from "@rbxts/iron/out/lib/tech-tree/world-object/types";
import { TechTreeTypes } from "@rbxts/iron/out/lib/tech-tree/t";
import { ServerStorage } from "@rbxts/services";

class MooingComponent implements WorldObjectComponentBase {
	name: string = "MooingComponent";
	display: string = "Moo Moo";
	discription: string = "Cows go moo so do I!";
	icon: string = "";
	tick = (dt: number, object: ClonedWorldObjectComponentInterface) => {
		let count = object.vars.get("Count") as number;
		print(`dt:${dt} | Moo #${count}!`);
		count += 1;
		object.vars.set("Count", count);
	};
	initialize = (object: ClonedWorldObjectComponentInterface) => {
		object.vars.set("Count", 0);
	};
	destroy = () => {};
}

class CowObject implements WorldObjectBase {
	components: string[] = ["MooingComponent"];
	name: string = "Cow";
	display: string = "Cow";
	discription: string = "I eat grass!";
	icon: string = "";
	model: Model = ServerStorage.FindFirstChild("Cow") as Model;
	tick = () => {};
	initialize = () => {
		print("I'm alive!");
	};
	destroy = () => {
		print("I died :C");
	};
}

TechTree.add(TechTreeTypes.WorldObjectComponent, new MooingComponent());
TechTree.add(TechTreeTypes.WorldObject, new CowObject());

Iron.Initialize({ FPS: 20 });
let c = 0;
for (;;) {
	const id = Iron.WorldObjectManager.create("Cow");
	Iron.WorldObjectManager.relocate(id, new Vector3(5, 1, 0), 0);
	Iron.WorldObjectManager.initialize(id);
	task.wait(10);
	Iron.WorldObjectManager.destroy(id);
	task.wait(0.2);
	if (c % 155 === 0) slices.PlayerGuis.addButton(c, { link: `WorldObjectView/${id}/satus`, icon: "N/A" });
	c += 1;
}
