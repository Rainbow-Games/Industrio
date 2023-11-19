import Iron from "@rbxts/iron";

import "./tree";

Iron.Config.PacketLogsCap = 10;

const objectState = Iron.Server.WorldObjectManager.create("FramesObject", [0, 0, 0, 0], "SERVER");

Iron.Server.WorldObjectManager.log.Print();

Iron.Server.AssetManager.log.Print();
