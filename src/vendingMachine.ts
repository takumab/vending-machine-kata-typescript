import { CoinRepository } from "./coinRepository";
import { CoinRepositoryInterface } from "./coinRepositoryInterface";

export class VendingMachine {
    private items: string[];
    private coinRepository: CoinRepositoryInterface;

    constructor(items: string[], coinRepository: CoinRepositoryInterface) {
        this.coinRepository = coinRepository;
        this.items = items;
    }

    deposit(amount: number): void {
        this.coinRepository.save(amount)
    }

    choose(_item: string) {
        throw new Error("Not implemented yet!");
    }

    dispense() {
        throw new Error("Not implemented yet!");
    }
}