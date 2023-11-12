import { TechTree } from "@rbxts/iron";
import { Bin } from "@rbxts/iron/out/lib/bin";
import { ViewBase } from "@rbxts/iron/out/lib/tech-tree/view";
import { ClonedWorldObjectInterface, WorldObjectBase } from "@rbxts/iron/out/lib/tech-tree/world-object/types";
import { ServerStorage } from "@rbxts/services";

class Cow implements WorldObjectBase {
	icon = "rbxassetid://6372755229";
	model = ServerStorage.WaitForChild("Cow") as Model;
	name = "Cow";
	display = "Cow!";
	discription = "I like grass!";
	components = ["Moo"];
	view = TechTree.getInstance().get(TechTree.getInstance().Types.View, "Object") as ViewBase | undefined;
	tick(dt: number, object: ClonedWorldObjectInterface) {
		if (math.random(1, 50) === 1) {
			object.vars.get("number")?.set(math.random(1, 1000000));
		}
	}
	destroy(object: ClonedWorldObjectInterface) {}
	initialize(object: ClonedWorldObjectInterface) {
		object.vars.set("number", new Bin<number>(0));
		const bin = object.vars.get("number");
		if (!bin) return;
		bin.syncToView = true;
		object.vars.get("number")?.set(math.random(1, 1000000));
	}
}

TechTree.getInstance().add(TechTree.getInstance().Types.WorldObject, new Cow());
