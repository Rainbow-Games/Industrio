import Iron, { Link, ViewManager, WorldObjectManager } from "@rbxts/iron";

Iron.Initialize();

ViewManager.getInstance();

import "./Views";
import "./components";
import "./world-objects";

const cow = WorldObjectManager.getInstance().create("Cow");
WorldObjectManager.getInstance().relocate(cow, new Vector3(0, 0, 10), 1);
WorldObjectManager.getInstance().initialize(cow);
