import { CoinRepositoryInterface } from "./coinRepositoryInterface";
import { ItemRepositoryInterface } from "./itemRepositoryInterface";

export class VendingMachine {
    private coinRepository: CoinRepositoryInterface;
    private itemRepository: ItemRepositoryInterface;

    constructor(coinRepository: CoinRepositoryInterface, itemRepository: ItemRepositoryInterface) {
        this.itemRepository = itemRepository;
        this.coinRepository = coinRepository;
    }

    deposit(amount: number): void {
        this.coinRepository.save(amount)
    }

    choose(item: number): string {
        return this.itemRepository.getBy(item)
    }

    dispense() {
        throw new Error("Not implemented yet!");
    }
}