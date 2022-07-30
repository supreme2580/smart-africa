export interface NavItems {
    _id: string,
    segment_name: string
}

export interface Result {
    _id: string,
    description: string,
    given: number,
    reward: number,
    segments: string,
    thumbnail: {
        _type: string,
        asset: {
            _ref: string,
            _type: string
        }
    },
    title: string,
    url: string
}