import { VendingMachine } from "./vendingMachine";
import { VmConsole } from "./vmConsole";
import { CoinRepository } from "./coinRepository";
import { ItemRepository } from "./itemRepository";

describe('Vending Machine Acceptance', () => {
    it('should dispense selected product', () => {
        const coinRepository = new CoinRepository();
        const itemRepository = new ItemRepository();
        const vendingMachine = new VendingMachine(coinRepository, itemRepository);

        const MockVmConsole = jest.fn<VmConsole, []>(() => ({
            vend: jest.fn()
        }));
        const mockVmConsole = new MockVmConsole();

        vendingMachine.deposit(100);
        vendingMachine.choose(1);
        vendingMachine.dispense();


        expect(mockVmConsole.vend).toHaveBeenCalledWith("cola");
    });
});