import { Photo } from './photo.model';

export interface Album{
    userId: string,
    id: string,
    title: string,
    isActive: boolean,
    photos: Photo[]
}

export class AlbumClass implements Album {
    userId: string;
    id: string;
    title: string;
    isActive: boolean;
    photos: Photo[];

}