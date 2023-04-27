import {Item} from "./Item";

export interface User {
    _id: string;
    user_name: string;
    password: string;
    image: ArrayBuffer;
    item_library?: [Item];
    wish_items?: [Item];
    followers_list?: [User];
    following_list?: [User];
}
