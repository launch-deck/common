declare module 'launchdeck-common/index' {
  export * from 'launchdeck-common/models/agent-data.interface';
  export * from 'launchdeck-common/models/agent-state.interface';
  export * from 'launchdeck-common/models/command.interface';
  export * from 'launchdeck-common/models/plugin.interface';
  export * from 'launchdeck-common/models/settings.interface';
  export * from 'launchdeck-common/models/tile.interface';

}
declare module 'launchdeck-common/models/agent-data.interface' {
  import { Command } from "launchdeck-common/models/command.interface";
  import { Settings } from "launchdeck-common/models/settings.interface";
  import { Tile } from "launchdeck-common/models/tile.interface";
  export interface AgentData {
      serverAddress: string;
      agentCode: string;
      tiles: Tile[];
      settings: Settings;
      tileOrder: string[];
      commands: Command[];
  }

}
declare module 'launchdeck-common/models/agent-state.interface' {
  export interface AgentState {
      coreState: {
          [key: string]: any;
      };
      pluginState: {
          [key: string]: {
              [key: string]: any;
          };
      };
  }

}
declare module 'launchdeck-common/models/command.interface' {
  export interface Command {
      class?: string;
      type: number;
      name?: string;
      data?: {
          [key: string]: string;
      };
      commandInputs?: {
          [key: string]: CommandInput;
      };
  }
  export interface CommandInput {
      name: string;
      type: "value" | "text" | "number" | "select" | "suggest";
      selectionOptions?: CommandInputSelectionOption[];
      multiple?: boolean;
  }
  export interface CommandInputSelectionOption {
      name: string;
      data: string;
  }

}
declare module 'launchdeck-common/models/plugin.interface' {
  /// <reference types="node" />
  import { EventEmitter } from 'events';
  import { Command } from "launchdeck-common/models/command.interface";
  export interface Plugin {
      ns?: string;
      events?: EventEmitter;
      handleCommand(command: Command): Promise<void>;
      getCommands(): Promise<Command[]>;
      getSettingsKeys?(): string[];
      loadSettings?(settings: {
          [key: string]: string;
      }): void;
  }

}
declare module 'launchdeck-common/models/settings.interface' {
  export interface Settings {
      coreSettings: {
          [key: string]: string;
      };
      pluginSettings: {
          [key: string]: {
              [key: string]: string;
          };
      };
  }

}
declare module 'launchdeck-common/models/tile.interface' {
  import { Command } from "launchdeck-common/models/command.interface";
  export interface Tile {
      id: string;
      name: string;
      processName?: string;
      icon?: string;
      color?: string;
      commands: Command[];
      parentId?: string;
      hasChildren?: boolean;
  }

}
declare module 'launchdeck-common' {
  import main = require('launchdeck-common/index');
  export = main;
}