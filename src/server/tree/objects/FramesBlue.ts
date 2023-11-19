import Iron, {
	TickableWorldObject,
	DefaultTickableWorldObjectState,
	TickableWorldObjectState,
	DefaultTickableWorldObject,
} from "@rbxts/iron";
import { DebugPacket } from "@rbxts/iron/out/lib/Utility/console";

const StorageObjectState: ObjectState = {
	...DefaultTickableWorldObjectState,
	log: Iron.Console.Debug("WorldObject: Frames Object"),
	count: 0,
};

declare interface ObjectState extends TickableWorldObjectState {
	count: number;
	log: DebugPacket;
}

const Object: TickableWorldObject<ObjectState> = {
	...DefaultTickableWorldObject,
	name: "FramesBlueObject",
	display: "Frames",
	discription: "A spot to walk.",
	defaultState: StorageObjectState,
	initialize: (state) => {
		state.log.Log(`FramesObject ID #${state.id} has initialized!`, "FramesObject.initialize()");
		return true;
	},
	tick: (dt, state) => {
		state.count += 1;
		state.log.Log(`Object has ticked ${state.count} times.`, "FramesObject.tick()");
	},
	destroy: (state) => {
		state.log.Log(`FramesObject ID #${state.id} has been removed.`, "FramesObject.destroy()").Print().close();
		return true;
	},
};

Iron.TechTree.add(Iron.Enum.TechTreeType.WorldObject, Object);
