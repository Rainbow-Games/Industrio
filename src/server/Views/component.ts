import { TechTree } from "@rbxts/iron";
import { ViewBase } from "@rbxts/iron/out/lib/tech-tree/view";

class component implements ViewBase {
	name = "Component";
	layer = 100;
	render = false;
}

TechTree.getInstance().add(TechTree.getInstance().Types.View, new component());
