import { VendingMachine } from "./vendingMachine";
import { VmConsole } from "./vmConsole";
import { CoinRepository } from "./coinRepository";
import { ItemRepository } from "./itemRepository";

describe('Vending Machine Acceptance', () => {
    it('should accept valid coins', () => {
        // As a vendor
        // I want a vending machine that accepts coins
        // So that I can collect money from the customer
        //
        // The vending machine will accept valid coins (nickels, dimes, and quarters) and reject invalid ones (pennies).
        //     When a valid coin is inserted the amount of the coin will be added to the current amount and the display will be updated.
        //     When there are no coins inserted, the machine displays INSERT COIN. Rejected coins are placed in the coin return.
        //
        // NOTE: The temptation here will be to create Coin objects that know their value.
        //     However, this is not how a real vending machine works.
        //     Instead, it identifies coins by their weight and size and then assigns a value to what was inserted.
        //     You will need to do something similar. This can be simulated using strings, constants, enums, symbols,
        //     or something of that nature.
        // Weight of coins = penny: 2.5g, nickle: 5g, dime: 2.3g, quarter: 5.7g
        // Size of coins (diameter) = penny: 0.75in, nickle: 0.84in dime: 0.71in, quarter: 0.96in
        // AT THIS STAGE WE ONLY CARE THAT WE CAN INSERT VALID COINS
        // NOT THE SUM OF ALL THE COINS INSERTED
        const coinRepository = new CoinRepository();
        const vendingMachine = new VendingMachine(coinRepository);

        vendingMachine.insertCoins()

    });

    it.skip('should dispense selected product', () => {
        const MockVmConsole = jest.fn<VmConsole, []>(() => ({
            vend: jest.fn()
        }));
        const mockVmConsole = new MockVmConsole();
        const coinRepository = new CoinRepository();
        const vendingMachine = new VendingMachine(coinRepository);


        vendingMachine.deposit(100);

        expect(mockVmConsole.vend).toHaveBeenCalledWith("cola");
    });
});