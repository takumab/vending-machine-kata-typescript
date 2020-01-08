import { VendingMachine } from "./vendingMachine";
import { CoinRepositoryInterface } from "./coinRepositoryInterface";
import { ItemRepositoryInterface } from "./itemRepositoryInterface";
import { VmConsole } from "./vmConsole";

describe("Vending Machine", () => {
    const MockItemRepository = jest.fn<ItemRepositoryInterface, []>(() => ({
        getBy: jest.fn(() => "cola"),
    }));
    const MockCoinRepo = jest.fn<CoinRepositoryInterface, []>(() => ({
        save: jest.fn()
    }));

    const MockVmConsole = jest.fn<VmConsole, []>(() => ({
        vend: jest.fn()
    }));

    const mockVmConsole = new MockVmConsole();

    it('should accept deposits from customer in coins', () => {
        const mockItemRepository = new MockItemRepository();
        const mockCoinRepository = new MockCoinRepo();
        const vendingMachine = new VendingMachine(mockCoinRepository, mockItemRepository, mockVmConsole);
        const amount = 100;

        vendingMachine.deposit(amount);

        expect(mockCoinRepository.save).toHaveBeenCalledWith(amount);
    });

    it('should allow customer to choose item and return item', () => {
        const mockItemRepository = new MockItemRepository();
        const mockCoinRepository = new MockCoinRepo();
        const itemNumber = 1;
        const vendingMachine = new VendingMachine(mockCoinRepository, mockItemRepository, mockVmConsole);


        vendingMachine.choose(itemNumber);

        expect(mockItemRepository.getBy).toHaveBeenCalledWith(itemNumber);
    });

    it('should return item', () => {
        const mockItemRepository = new MockItemRepository();
        const mockCoinRepository = new MockCoinRepo();
        const itemNumber = 1;
        const vendingMachine = new VendingMachine(mockCoinRepository, mockItemRepository, mockVmConsole);


        vendingMachine.choose(itemNumber);

        expect(mockVmConsole.vend).toHaveBeenCalledWith("cola");
    });
});