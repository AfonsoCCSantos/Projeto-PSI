import {Item} from "./Item";

export interface User {
    _id: string;
    name: string;
    password: string;
    image: string;
    item_library?: [Item];
    wish_items?: [Item];
    followers_list?: [User];
    following_list?: [User];
}
