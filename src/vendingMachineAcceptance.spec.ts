import { VendingMachine } from "./vendingMachine";
import { VmConsole } from "./vmConsole";
import { CoinRepository } from "./coinRepository";
import { ItemRepository } from "./itemRepository";

describe('Vending Machine Acceptance', () => {


    it('should dispense selected product', () => {
        const MockVmConsole = jest.fn<VmConsole, []>(() => ({
            vend: jest.fn()
        }));
        const mockVmConsole = new MockVmConsole();
        const coinRepository = new CoinRepository();
        const itemRepository = new ItemRepository();
        const vendingMachine = new VendingMachine(coinRepository, itemRepository, mockVmConsole);


        vendingMachine.deposit(100);
        vendingMachine.choose(1);

        expect(mockVmConsole.vend).toHaveBeenCalledWith("cola");
    });
});