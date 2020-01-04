import { VendingMachine } from "./vendingMachine";
import { VmConsole } from "./vmConsole";
import { CoinRepository } from "./coinRepository";
import { ItemRepository } from "./itemRepository";

describe('Vending Machine Acceptance', function () {
    it('should dispense chosen product', () => {
        const items = ["cola", "chips", "candy"];
        const coinRepository = new CoinRepository();
        const itemRepository = new ItemRepository();
        const vendingMachine = new VendingMachine(items, coinRepository, itemRepository);

        const MockVmConsole = jest.fn<VmConsole, []>(() => ({
            vend: jest.fn()
        }));
        const mockVmConsole = new MockVmConsole();

        vendingMachine.deposit(100);
        vendingMachine.choose("cola");
        vendingMachine.dispense();


        expect(mockVmConsole.vend).toHaveBeenCalledWith("cola");
    });
});