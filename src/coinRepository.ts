import { CoinRepositoryInterface } from "./coinRepositoryInterface";

export class CoinRepository implements CoinRepositoryInterface{
    save(amount: number): void {
        throw new Error("Not implemented yet!")
    }
}