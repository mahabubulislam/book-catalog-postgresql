export type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
    totalPage: number
  }
  data: T
}
