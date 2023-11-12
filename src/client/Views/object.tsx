import { TechTree } from "@rbxts/iron";
import { Bin } from "@rbxts/iron/out/lib/bin";
import { ViewBase } from "@rbxts/iron/out/lib/tech-tree/view";
import { WorldObjectBase, WorldObjectComponentBase } from "@rbxts/iron/out/lib/tech-tree/world-object/types";
import Roact from "@rbxts/roact";

const obj = TechTree.getInstance().get(TechTree.getInstance().Types.View, "Object") as ViewBase;
obj.render = new Bin<(props: Map<string, unknown> | undefined) => Roact.Element>((props) => {
	const objBase = props?.get("base") as WorldObjectBase;
	return (
		<frame
			Key={objBase.display}
			Size={new UDim2(0.5, 0, 0.6, 0)}
			Position={new UDim2(0.25, 0, 0.2, 0)}
			Active={true}
		>
			<textlabel
				Text={objBase.display}
				Size={new UDim2(0.5, 0, 0, 20)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			></textlabel>
			<textlabel
				Text={objBase.discription}
				Size={new UDim2(0.5, 0, 0, 20)}
				TextScaled={true}
				Position={new UDim2(0.5, 0, 0, 0)}
				TextXAlignment={Enum.TextXAlignment.Right}
			></textlabel>
			<textlabel
				Text={`Enabled: ${(() => {
					if (props?.get("enabled") as boolean) {
						return "True";
					} else {
						return "false";
					}
				})()}`}
				Size={new UDim2(1, 0, 0, 20)}
				Position={new UDim2(0, 0, 0, 20)}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextScaled={true}
			></textlabel>
			<textlabel
				Text={`Components: ${(() => {
					let s = "";
					for (const c of props?.get("components") as WorldObjectComponentBase[]) {
						if (s === "") {
							s = c.display;
							continue;
						}
						s = s + ", " + c.display;
					}
					return s;
				})()}`}
				Size={new UDim2(1, 0, 0, 20)}
				Position={new UDim2(0, 0, 0, 40)}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextScaled={true}
			></textlabel>
			<textlabel
				Text={`Number: ${props?.get("number") as number}`}
				Size={new UDim2(1, 0, 0, 20)}
				Position={new UDim2(0, 0, 0, 60)}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextScaled={true}
			></textlabel>
		</frame>
	);
});
