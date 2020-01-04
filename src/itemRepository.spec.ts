import { ItemRepository } from "./itemRepository";

describe('Item Repository', function () {
    it('should retrieve an item to dispense/vend', function () {
        const itemRepository = new ItemRepository();
        const itemName = "cola";

        const items = ["cola", "candy", "chips"];
        itemRepository.load(items);
        expect(itemRepository.getBy(itemName)).toEqual("cola")
    });
});