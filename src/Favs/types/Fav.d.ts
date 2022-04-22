export interface FavList {
  id?: string;
  name: string;
  items?: Fav[];
  owner: string;
}

export interface Fav {
  title: string;
  description: string;
  link: string;
}
