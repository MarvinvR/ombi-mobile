import { RequestActionType } from "./requests";

export interface Content {
    id: number,
    title: string,
    description: string,
    posterUrl?: string,
    request: {
        id: number,
        requested: boolean,
        approved: boolean,
        denied: boolean
    }
    available: boolean
}

export interface Movie extends Content {
    id: number,
    title: string,
    description: string,
    posterUrl: string,
    request: {
        id: number,
        requested: boolean,
        approved: boolean,
        denied: boolean
    }
    releaseDate: string,
    available: boolean
}

export interface TvShow extends Content {
    id: number,
    title: string,
    description: string,
    posterUrl?: string,
    request: {
        id: number,
        requested: boolean,
        approved: boolean,
        denied: boolean,
        type: {
            all: boolean,
            firstSeason: boolean,
            latestSeason: boolean,
        },
        seasons: number[],
    }
    network: string,
    status: string,
    aired: string,
    available: boolean,
    partlyAvailable: boolean
}

export interface Tag {
    color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger',
    text: string
}

export interface ContentClass {
    id: number,
    title: string,
    description: string,
    tags: Array<Tag>,
    available: boolean,
    requested: boolean,
    posterUrl: string,
    type: RequestActionType,
    disable: () => void
}