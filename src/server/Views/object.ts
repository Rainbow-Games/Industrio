import { TechTree } from "@rbxts/iron";
import { ViewBase } from "@rbxts/iron/out/lib/tech-tree/view";

class WorldObject implements ViewBase {
	name = "Object";
	layer = 100;
	render = false;
}

TechTree.getInstance().add(TechTree.getInstance().Types.View, new WorldObject());
