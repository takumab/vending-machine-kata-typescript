import { VendingMachine } from "./vendingMachine";
import { CoinRepositoryInterface } from "./coinRepositoryInterface";
import { ItemRepositoryInterface } from "./itemRepositoryInterface";
import { VmConsole } from "./vmConsole";

describe("Vending Machine", () => {
    const MockCoinRepo = jest.fn<CoinRepositoryInterface, []>(() => ({
        save: jest.fn()
    }));


    it('should accepts valid coins', () => {
        const mockCoinRepository = new MockCoinRepo();
        const vendingMachine = new VendingMachine(mockCoinRepository);
        const quarter = 25;

        vendingMachine.insertCoin(quarter);

        expect(mockCoinRepository.save).toHaveBeenCalledWith(quarter);
    });

     it('should not accept invalid coins', () => {
        const mockCoinRepository = new MockCoinRepo();
        const vendingMachine = new VendingMachine(mockCoinRepository);
        const INVALID_COIN = "Invalid coin";
        const penny = 1;

         expect(() => vendingMachine.insertCoin(penny)).toThrowError(INVALID_COIN);
    });
});