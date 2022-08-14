export interface PaginatedQueryResponse<Data> {
  data: Array<Data>;
  page: number;
  totalItems: number;
  totalPages: number;
}
