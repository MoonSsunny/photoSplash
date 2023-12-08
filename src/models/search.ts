export interface SearchItem {
  id: string;
  url: string;
}

export interface Result {
  total: number;
  total_pages: number;
  results: Object[];
}
