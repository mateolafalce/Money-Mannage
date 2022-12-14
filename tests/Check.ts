import * as anchor from "@project-serum/anchor";
import { Moneymannage } from "../target/types/moneymannage";
import { MainAccount } from "../tests/Account";

describe("Check", () => {
    const program = anchor.workspace.Moneymannage as anchor.Program<Moneymannage>;
    it("...", async () => {
        const mainAccount = await program.account.mainAccount.fetch(MainAccount);
        console.log("---------------------------------------------")
        console.log("PDA: ", MainAccount.toBase58());
        console.log("---------------------------------------------")
        console.log("Bump: ", mainAccount.bumpOriginal.toString());
        console.log("---------------------------------------------")
        console.log("Vec Pubkeys: ", mainAccount.vecKeys[0].toBase58());
        console.log("---------------------------------------------")
        console.log("Vec Amount: ", mainAccount.vecAmmount[0].toString());
        console.log("---------------------------------------------")
        console.log("Total Ammount: ", mainAccount.totalAmmount.toString());
        console.log("---------------------------------------------")
    });
})