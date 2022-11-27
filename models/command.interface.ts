export interface Command {
    class?: string;
    type: number;
    name?: string;
    data?: { [key: string]: string };
    commandInputs?: { [key: string]: CommandInput };
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
