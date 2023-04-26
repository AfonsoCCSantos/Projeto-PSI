export interface Item {
    _id: string;
    name: string;
    description: string;
    plataform: string;
    languages: [string];
    price: number;
    classification: number;
    comments: [String];
    main_image: ArrayBuffer;
    sec_image: [ArrayBuffer];
    video_link: String;
}
