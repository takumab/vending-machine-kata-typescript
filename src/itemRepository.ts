import { ItemRepositoryInterface } from "./itemRepositoryInterface";

export class ItemRepository implements ItemRepositoryInterface {
    private initialItems: object = {1: ["cola", 100], 2: ["chips", 50], 3: ["candy", 50] };

    getBy(itemNumber: number): string {
        console.log(this.initialItems[itemNumber][0]);
        return this.initialItems[itemNumber][0];
    }
}