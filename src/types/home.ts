
export interface CartType {
    ageCategory ?: string,
    sessions ?: number | string,
    price ?: number,
    name : string,
    details : string,
    image : string
    cls ?: string
    category : string
    offPrice ?: number
    votesAverage : number
    votes : number
}

export interface teachersInfoType {
    name : string,
    details : string,
    image : string,
    telegramId ?: string,
    githubId ?: string,
    instagramId ?: string,
    infoUrl ?: string
}

export interface sentencesType {
    name : string,
    job : string,
    sentence : string,
    image : string,
}