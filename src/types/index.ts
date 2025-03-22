export interface ImageType {
    original: string;
    small: string;
    medium: string;
    large: string;
}

export interface GeneralInfo {
    bathrooms: number;
    name: string;
    province: string;
    coordinates: { latitude: number; longitude: number };
    price: number;
    type: string;
    rooms: string;
    size: number;
    terrace: number;
    living_area: number;
}

export interface Project {
    _id: string;
    generalInfo: GeneralInfo;
    images: ImageType[];
}
