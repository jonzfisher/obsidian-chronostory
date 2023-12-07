import { StrictMode } from "react";
import { ItemView, WorkspaceLeaf, EditorSelection } from "obsidian";
import { Root, createRoot } from "react-dom/client";
import React from 'react';
import StoryClock from "./clock/StoryClock";
// import React from "react";

export const STORYCLOCK_VIEW = "storyclock-view";

export class StoryView extends ItemView {
	root: Root | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return STORYCLOCK_VIEW;
	}

	getDisplayText() {
		return "Example view";
	}

	async onOpen() {
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<StrictMode>
				<StoryClock />
			</StrictMode>
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}