export interface Settings {
    coreSettings: { [key: string]: string }
    pluginSettings: { [key: string]: { [key: string]: string } }
}
