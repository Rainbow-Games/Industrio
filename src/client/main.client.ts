import Iron, { slices } from "@rbxts/iron";

Iron.Initialize({});

for (;;) {
	task.wait(1);
	print(slices.PlayerGuis.getState());
}
