import { CoinRepositoryInterface } from "./coinRepositoryInterface";

export class VendingMachine {
    private coinRepository: CoinRepositoryInterface;

    constructor(coinRepository: CoinRepositoryInterface) {
        this.coinRepository = coinRepository;
    }

    deposit(amount: number): void {
        this.coinRepository.save(amount)
    }

    // choose(item: number): void {
    // }
}