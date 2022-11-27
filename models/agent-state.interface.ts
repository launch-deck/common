export interface AgentState {
    coreState: { [key: string]: any }
    pluginState: { [key: string]: { [key: string]: any } }
}
