import { InputAction } from "@rbxts/iron";

const action1 = new InputAction([Enum.KeyCode.E]);

action1.Event.Connect(() => print("E - Pressed!"));

action1.Event.Once(() => print("E - Pressed. That is all."));

print(action1.Event.id);

const action2 = new InputAction([Enum.KeyCode.Tab, Enum.KeyCode.E]);

action2.Event.Connect(() => print("TAB (OR) E - Pressed!"));

print(action2.Event.id);
