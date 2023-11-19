declare interface ServerStorage extends Instance {
	assets: Folder & {
		WorldObjects: Folder & {
			Frames: Folder & {
				DefaultModel: Model;
			};
			FramesRed: Folder & {
				DefaultModel: Model;
			};
			FramesBlue: Folder & {
				DefaultModel: Model;
			};
			FramesGreen: Folder & {
				DefaultModel: Model;
			};
		};
	};
}
