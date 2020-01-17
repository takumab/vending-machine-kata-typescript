import { VendingMachine } from "./vendingMachine";
import { CoinRepositoryInterface } from "./coinRepositoryInterface";
import { ItemRepositoryInterface } from "./itemRepositoryInterface";
import { VmConsole } from "./vmConsole";

describe("Vending Machine", () => {
    const MockCoinRepo = jest.fn<CoinRepositoryInterface, []>(() => ({
        save: jest.fn()
    }));
    const mockCoinRepository = new MockCoinRepo();
    const vendingMachine = new VendingMachine(mockCoinRepository);


    it('should accept valid coins', () => {
        const quarter = 25;

        vendingMachine.insertCoin(quarter);

        expect(mockCoinRepository.save).toHaveBeenCalledWith(quarter);
    });

     it('should not accept invalid coins', () => {
        const INVALID_COIN = "Invalid coin";
        const penny = 1;

         expect(() => vendingMachine.insertCoin(penny)).toThrowError(INVALID_COIN);
    });

    it('should add to current amount when valid coins are inserted', () => {
        const dime = 10;

        vendingMachine.insertCoin(dime);
        vendingMachine.insertCoin(dime);
    });
});