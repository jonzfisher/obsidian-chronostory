// import { App, Editor, MarkdownView, Modal, Plugin, WorkspaceLeaf } from 'obsidian';
import { Plugin } from 'obsidian';
import { CodeBlockProcessor } from './src/CodeBlockProcessor';
// import { StoryView, STORYCLOCK_VIEW } from './storyclockView'

// Remember to rename these classes and interfaces!

// interface StoryclockPluginSettings {
// 	mySetting: string;
// }

// const DEFAULT_SETTINGS: StoryclockPluginSettings = {
// 	mySetting: 'default'
// }

export default class StoryClockPlugin extends Plugin {
	// settings: StoryclockPluginSettings;

	async onload() {
		// await this.loadSettings();

		// this.registerView(
    //   STORYCLOCK_VIEW,
    //   (leaf) => new StoryView(leaf)
    // );

		this.registerMarkdownCodeBlockProcessor("storyclock", (source, el) => {
			const processor = new CodeBlockProcessor(this.app);
			processor.run(source, el);
    });


		// This creates an icon in the left ribbon.
		// For Storyclock, it would be nice to highlight the text
		// const ribbonIconEl = this.addRibbonIcon('dice', 'Storyclock', (evt: MouseEvent) => {
		// Bring in the highlighted text in Editor


			// Called when the user clicks the icon.
			// this.activateStoryView();

		// });

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		// const statusBarItemEl = this.addStatusBarItem();
		// statusBarItemEl.setText('Status Bar Text');

		// This adds a simple command that can be triggered anywhere
		// this.addCommand({
		// 	id: 'open-sample-modal-simple',
		// 	name: 'Open sample modal (simple)',
		// 	callback: () => {
		// 		new SampleModal(this.app).open();
		// 	}
		// });
		// This adds an editor command that can perform some operation on the current editor instance
		// this.addCommand({
		// 	id: 'text-to-clock',
		// 	name: 'Create storyclock from selected text',
		// 	editorCallback: (editor: Editor, view: MarkdownView) => {
		// 		const editorText = editor.getSelection();
		// 		console.log(editorText);
		// 		this.activateStoryView();
		// 		// editor.replaceSelection('Sample Editor Command');
		// 	}
		// });

		// This adds a settings tab so the user can configure various aspects of the plugin
		// this.addSettingTab(new SampleSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		// this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
		// 	console.log('click', evt);
		// });

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		// this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {
		
	}

	// async loadSettings() {
	// 	this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	// }

	// async saveSettings() {
	// 	await this.saveData(this.settings);
	// }

	// Pass the highlighted obsidian text
	// 1. process it into a js object
	// 2. pass that js object into StoryView
// 	async activateStoryView() {
// 		let { workspace }  = this.app;
	
// 		let leaf: WorkspaceLeaf | null = null;
// 		let leaves = workspace.getLeavesOfType(STORYCLOCK_VIEW);
	
// 		if (leaves.length > 0) {
// 			// A leaf with our view already exists, use that
// 			leaf = leaves[0];
// 		} else {
// 			// Our view could not be found in the workspace, create a new leaf
// 			// in the right sidebar for it
// 			let leaf = workspace.getRightLeaf(false);
// 			await leaf.setViewState({ type: STORYCLOCK_VIEW, active: true });
// 		}
	
// 		// "Reveal" the leaf in case it is in a collapsed sidebar
// 			workspace.revealLeaf(leaf);
// 		}
}

// class SampleModal extends Modal {
// 	constructor(app: App) {
// 		super(app);
// 	}

// 	onOpen() {
// 		const {contentEl} = this;
// 		contentEl.setText('Woah!');
// 	}

// 	onClose() {
// 		const {contentEl} = this;
// 		contentEl.empty();
// 	}
// }

// class SampleSettingTab extends PluginSettingTab {
// 	plugin: StoryClockPlugin;

// 	constructor(app: App, plugin: StoryClockPlugin) {
// 		super(app, plugin);
// 		this.plugin = plugin;
// 	}

// 	display(): void {
// 		const {containerEl} = this;

// 		containerEl.empty();

// 		new Setting(containerEl)
// 			.setName('Setting #1')
// 			.setDesc('It\'s a secret')
// 			.addText(text => text
// 				.setPlaceholder('Enter your secret')
// 				.setValue(this.plugin.settings.mySetting)
// 				.onChange(async (value) => {
// 					this.plugin.settings.mySetting = value;
// 					await this.plugin.saveSettings();
// 				}));
// 	}
// }
