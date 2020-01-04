import { VendingMachine } from "./vendingMachine";
import { CoinRepositoryInterface } from "./coinRepositoryInterface";
import { ItemRepositoryInterface } from "./itemRepositoryInterface";

describe("Vending Machine", () => {
    const MockItemRepository = jest.fn<ItemRepositoryInterface, []>(() => ({
        getBy: jest.fn(),
        load: jest.fn()
    }));
    const MockCoinRepo = jest.fn<CoinRepositoryInterface, []>(() => ({
        save: jest.fn()
    }));

    it('should accept deposits from customer in coins', () => {
        const mockItemRepository = new MockItemRepository();
        const mockCoinRepository = new MockCoinRepo();
        const items = ["cola", "chips", "candy"];
        const vendingMachine = new VendingMachine(items, mockCoinRepository, mockItemRepository);
        const amount = 100;

        vendingMachine.deposit(amount);

        expect(mockCoinRepository.save).toHaveBeenCalledWith(amount);
    });

    it('should allow customer to choose item', () => {
        const mockItemRepository = new MockItemRepository();
        const mockCoinRepository = new MockCoinRepo();
        const items = ["cola", "chips", "candy"];
        const itemName = "cola";
        const vendingMachine = new VendingMachine(items, mockCoinRepository, mockItemRepository);


        vendingMachine.choose("cola");

        expect(mockItemRepository.getBy).toHaveBeenCalledWith(itemName);
    });
})