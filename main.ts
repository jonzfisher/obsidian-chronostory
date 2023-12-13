// import { App, Editor, MarkdownView, Modal, Plugin, WorkspaceLeaf } from 'obsidian';
import { Plugin } from 'obsidian';
import { CodeBlockProcessor } from './src/CodeBlockProcessor';

export default class StoryClockPlugin extends Plugin {

	async onload() {
		this.registerMarkdownCodeBlockProcessor("storyclock", (source, el) => {
			const processor = new CodeBlockProcessor(this.app);
			processor.run(source, el);
    });
	}

	onunload() {
		
	}
}