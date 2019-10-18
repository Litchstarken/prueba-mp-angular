export interface IForm {
    name: string,
    topLevelDomain: [
    string
    ],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: [
    string
    ],
    capital: string,
    altSpellings: [
    string,
    string,
    string,
    string
    ],
    region: string,
    subregion: string,
    population: number,
    latlng: [
    number,
    number
    ],
    demonym: string,
    area: number,
    gini: null,
    timezones: [
        string
    ],
    borders: [ ];
    nativeName: string;
    numericCode: string;
    currencies: [
    {
    code: string,
    name: string,
    symbol: string
    }
    ],
    languages: [
    {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
    }
    ],
    translations: {
    de: string,
    es: string,
    fr: string,
    ja: string,
    it: string,
    br: string,
    pt: string,
    nl: string,
    hr: string,
    fa: string
    },
    flag: string;
    regionalBlocs: [
    {
    acronym: string,
    name: string,
    otherAcronyms: [ ],
    otherNames: [ ]
    }
    ],
    cioc: ''
}