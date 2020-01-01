import { CoinRepository } from "./coinRepository";

export class VendingMachine {
    private items: string[];
    private coinRepository: CoinRepository;

    constructor(items: string[], coinRepository: CoinRepository) {
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