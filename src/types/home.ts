
export interface CartType {
    type : string
    ageCategory ?: string,
    sessions : number | string,
    price : number,
    name : string,
    details : string,
    image : string
    category : string
    offPrice ?: number
    votesAverage : number
    votes : number
    href : string
}

export interface Cart2Type {
    subject : string,
    name : string,
    image : string
    cls ?: string
    category : string
    date : string
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