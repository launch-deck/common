import { Command } from "./command.interface";
import { Settings } from "./settings.interface";
import { Tile } from "./tile.interface";

export interface AgentData {
    serverAddress: string;
    agentCode: string;
    tiles: Tile[];
    settings: Settings;
    tileOrder: string[];
    commands: Command[];
}
