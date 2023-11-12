import Iron, { TechTree, ViewManager } from "@rbxts/iron";
import { ToolTip } from "@rbxts/iron/out/lib/systems/selection";

Iron.Initialize();

ViewManager.getInstance().load();
print(TechTree.getInstance().getAll(TechTree.getInstance().Types.View));

import "./Views";
print(TechTree.getInstance().getAll(TechTree.getInstance().Types.View));

import { CreateTooltip } from "./ToolTip";
new ToolTip([Enum.KeyCode.F], CreateTooltip);

import "./input-test";
