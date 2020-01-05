import { ItemRepository } from "./itemRepository";

describe('Item Repository', () => {
    it('should retrieve an item to dispense/vend', () => {
        const itemRepository = new ItemRepository();
        const itemNumber = 1;

        expect(itemRepository.getBy(itemNumber)).toEqual("cola")
    });
});