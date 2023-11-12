import { TechTree } from "@rbxts/iron";
import { Bin } from "@rbxts/iron/out/lib/bin";
import { ViewBase } from "@rbxts/iron/out/lib/tech-tree/view";
import {
	ClonedWorldObjectComponentInterface,
	WorldObjectComponentBase,
} from "@rbxts/iron/out/lib/tech-tree/world-object/types";

class Moo implements WorldObjectComponentBase {
	name = "Moo";
	icon = "10677632538";
	view = TechTree.getInstance().get(TechTree.getInstance().Types.View, "Component") as ViewBase | undefined;
	display = "Moo!";
	discription = "Some things just go moo!";
	tick(dt: number, component: ClonedWorldObjectComponentInterface) {
		if (math.random(1, 500) === 1) {
			component.vars.get("LastMoo")?.set(DateTime.now().UnixTimestampMillis);
			print("Moo!");
		}
	}
	initialize(component: ClonedWorldObjectComponentInterface) {
		component.vars.set("LastMoo", new Bin<number>(DateTime.now().UnixTimestampMillis));
		const bin = component.vars.get("LastMoo");
		if (!bin) return;
		bin.syncToView = true;
		print("Moo!");
	}
	destroy(component: ClonedWorldObjectComponentInterface) {}
}

TechTree.getInstance().add(TechTree.getInstance().Types.WorldObjectComponent, new Moo());
