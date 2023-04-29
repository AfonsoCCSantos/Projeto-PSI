export interface Item {
    _id: string;
    name: string;
    description: string;
    plataform: string;
    languages: [string];
    price: number;
    classification: number;
    comments: [string];
    main_image: string;
    sec_image: [string];
    video_link: string;
}
