import { Command } from "./command.interface";

export interface Tile {
    id: string,
    name: string;
    processName?: string;
    icon?: string;
    color?: string;
    commands: Command[];
    parentId?: string;
    hasChildren?: boolean;
}
