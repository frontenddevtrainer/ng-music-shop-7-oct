export interface Song {
    name: string,
    singer: string[],
    duration: number
}

export interface Album {
    name: string,
    singers: string[],
    songs: Song[],
    price: number,
    albumArt: {
        thumbnail: string
    },
    isPurchasedByUser?: boolean,
    newRelesedDate?: Date | string // string = timestamp
}