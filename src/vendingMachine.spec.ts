import { VendingMachine } from "./vendingMachine";
import { CoinRepository } from "./coinRepository";

describe("Vending Machine", () => {
    it('should accept deposits from customer in coins', () => {
        const MockCoinRepo = jest.fn<CoinRepository, []>(() => ({
            save: jest.fn()
        }));
        const mockCoinRepository = new MockCoinRepo();
        const items = ["cola", "chips", "candy"];
        const vendingMachine = new VendingMachine(items, mockCoinRepository);
        const amount = 100;

        vendingMachine.deposit(amount);

        expect(mockCoinRepository.save).toHaveBeenCalledWith(amount);
    });
})