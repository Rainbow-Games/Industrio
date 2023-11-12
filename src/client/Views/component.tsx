import { TechTree } from "@rbxts/iron";
import { Bin } from "@rbxts/iron/out/lib/bin";
import { ViewBase } from "@rbxts/iron/out/lib/tech-tree/view";
import { WorldObjectBase, WorldObjectComponentBase } from "@rbxts/iron/out/lib/tech-tree/world-object/types";
import Roact from "@rbxts/roact";

const component = TechTree.getInstance().get(TechTree.getInstance().Types.View, "Component") as ViewBase;
component.render = new Bin<(props: Map<string, unknown> | undefined) => Roact.Element>((props) => {
	const componentBase = props?.get("base") as WorldObjectComponentBase;
	return (
		<frame
			Key={componentBase.display}
			Size={new UDim2(0.5, 0, 0.6, 0)}
			Position={new UDim2(0.25, 0, 0.2, 0)}
			Active={true}
		>
			<textlabel
				Text={componentBase.display}
				Size={new UDim2(0.5, 0, 0, 20)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			></textlabel>
			<textlabel
				Text={componentBase.discription}
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
				Text={`Status: ${props?.get("status") as string}`}
				Size={new UDim2(1, 0, 0, 20)}
				Position={new UDim2(0, 0, 0, 40)}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextScaled={true}
			></textlabel>
			<textlabel
				Text={`Object: ${(props?.get("object") as WorldObjectBase).display}`}
				Size={new UDim2(1, 0, 0, 20)}
				Position={new UDim2(0, 0, 0, 60)}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextScaled={true}
			></textlabel>
			<textlabel
				Text={`Last Moo: ${math.round(
					(DateTime.now().UnixTimestampMillis - (props?.get("LastMoo") as number)) / 1000,
				)} seconds ago`}
				Size={new UDim2(1, 0, 0, 20)}
				Position={new UDim2(0, 0, 0, 80)}
				TextXAlignment={Enum.TextXAlignment.Left}
				TextScaled={true}
			></textlabel>
		</frame>
	);
});
