import { WorldObjectBase } from "@rbxts/iron/out/lib/tech-tree/world-object/types";
import Roact from "@rbxts/roact";

export function CreateTooltip(object: WorldObjectBase, pos: UDim2): Roact.Element {
	print(object.name);
	return (
		<frame
			Key="ToolTip"
			Size={new UDim2(0, 75, 0, 75)}
			Position={pos}
			Transparency={0.5}
			BackgroundColor3={Color3.fromRGB(0, 0, 0)}
			BorderColor3={Color3.fromRGB(200, 200, 200)}
			BorderSizePixel={3}
			LayoutOrder={10}
		>
			<uiaspectratioconstraint AspectRatio={1.5}></uiaspectratioconstraint>
			<textlabel
				Key="ObjectName"
				Text={`${object.display}:`}
				TextTransparency={0.2}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Size={new UDim2(1, 0, 0.5, 0)}
				BackgroundTransparency={1}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			></textlabel>
			<textlabel
				Key="Action-E"
				Text={`E - Inspect`}
				TextTransparency={0.2}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Size={new UDim2(1, 0, 0.5, 0)}
				BackgroundTransparency={1}
				Position={new UDim2(0, 0, 0.5, 0)}
				TextScaled={true}
				TextXAlignment={Enum.TextXAlignment.Right}
			></textlabel>
		</frame>
	);
}
