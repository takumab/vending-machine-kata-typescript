import { VendingMachine } from "./vendingMachine";
import { CoinRepositoryInterface } from "./coinRepositoryInterface";
import { ItemRepositoryInterface } from "./itemRepositoryInterface";

describe("Vending Machine", () => {
    const MockItemRepository = jest.fn<ItemRepositoryInterface, []>(() => ({
        getBy: jest.fn(),
    }));
    const MockCoinRepo = jest.fn<CoinRepositoryInterface, []>(() => ({
        save: jest.fn()
    }));

    it('should accept deposits from customer in coins', () => {
        const mockItemRepository = new MockItemRepository();
        const mockCoinRepository = new MockCoinRepo();
        const vendingMachine = new VendingMachine(mockCoinRepository, mockItemRepository);
        const amount = 100;

        vendingMachine.deposit(amount);

        expect(mockCoinRepository.save).toHaveBeenCalledWith(amount);
    });

    it('should allow customer to choose item', () => {
        const mockItemRepository = new MockItemRepository();
        const mockCoinRepository = new MockCoinRepo();
        const itemNumber = 1;
        const vendingMachine = new VendingMachine(mockCoinRepository, mockItemRepository);


        vendingMachine.choose(itemNumber);

        expect(mockItemRepository.getBy).toHaveBeenCalledWith(itemNumber);
    });
});