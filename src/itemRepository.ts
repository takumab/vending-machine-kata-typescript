import { ItemRepositoryInterface } from "./itemRepositoryInterface";

export class ItemRepository implements ItemRepositoryInterface {
    load(items: string[]): void {
        throw new Error("Not implemented yet!");
    }

    getBy(itemName: string): string {
        return undefined;
    }
}