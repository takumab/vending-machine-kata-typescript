import { CoinRepositoryInterface } from "./coinRepositoryInterface";
import { ItemRepositoryInterface } from "./itemRepositoryInterface";
import { VmConsole } from "./vmConsole";

export class VendingMachine {
    private coinRepository: CoinRepositoryInterface;
    private vmConsole: VmConsole;
    private itemRepository: ItemRepositoryInterface;

    constructor(coinRepository: CoinRepositoryInterface, itemRepository: ItemRepositoryInterface, vmConsole: VmConsole) {
        this.vmConsole = vmConsole;
        this.itemRepository = itemRepository;
        this.coinRepository = coinRepository;
    }

    deposit(amount: number): void {
        this.coinRepository.save(amount)
    }

    choose(item: number): void {
        let product = this.itemRepository.getBy(item);
        console.log("inside choose function " + product);
        this.vmConsole.vend(product);
    }
}