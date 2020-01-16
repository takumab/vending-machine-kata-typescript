import { CoinRepositoryInterface } from "./coinRepositoryInterface";

export class CoinRepository implements CoinRepositoryInterface {
    private coins: Array<number> = [];

    save(amount: number): void {
        this.coins.push(amount);
    }
}