export interface Result {
  id: number;
  image: string;
  imageType: string;
  title: string;
}

export interface TypesData {
  number: number;
  offset: number;
  results: Result[] | [];
  totalResults: number;
}
