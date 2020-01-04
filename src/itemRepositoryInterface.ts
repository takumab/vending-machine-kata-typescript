export interface ItemRepositoryInterface {
    getBy(item: string): string
    load(items: string[]): void
}