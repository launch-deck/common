import { EventEmitter } from 'events';
import { Command } from "./command.interface";

export interface Plugin {
    ns?: string;
    events?: EventEmitter;

    handleCommand(command: Command): Promise<void>;
    getCommands(): Promise<Command[]>;

    getSettingsKeys?(): string[];
    loadSettings?(settings: { [key: string]: string; }): void;
}
