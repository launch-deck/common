export interface ClientSettings {
    theme?: 'light' | 'dark'
    backgroundImageUrl?: string
    tileBlur?: number
    tileAlpha?: number
}

export interface Settings {
    coreSettings: { [key: string]: string }
    pluginSettings: { [key: string]: { [key: string]: string } }
    clientSettings: ClientSettings
}
