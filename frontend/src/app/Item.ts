export interface Item {
    _id: string;
    type: string;
    name: string;
    description: string;
    plataform: string;
    languages: [string];
    price: number;
    classification: number;
    comments: [string];
    main_image: string;
    sec_images: [string];
    video_link: string;
}
