import * as anchor from "@project-serum/anchor";
import { Moneymannage } from "../target/types/moneymannage";
import { wallet, MainAccount } from "../tests/Account";

describe("Creating PDA", () => {
    const program = anchor.workspace.Moneymannage as anchor.Program<Moneymannage>;
    it("Created", async () => {
        const tx = await program.methods.addAccount(
            new anchor.BN(6000)
        )
            .accounts({
                mainAccount: MainAccount,
                user: wallet.publicKey,
                mainAccountInfo: MainAccount,
                systemProgram: anchor.web3.SystemProgram.programId,
            }).rpc();
        const mainAccount = await program.account.mainAccount.fetch(MainAccount);
        console.log("---------------------------------------------")
        console.log("Your transaction signature", tx);
        console.log("---------------------------------------------")
        console.log("PDA: ", MainAccount.toBase58());
        console.log("---------------------------------------------")
        console.log("Bump: ", mainAccount.bumpOriginal.toString());
        console.log("---------------------------------------------")
        console.log("Vec Pubkeys: ", mainAccount.vecKeys);
        console.log("---------------------------------------------")
        console.log("Vec Amount: ", mainAccount.vecAmmount);
        console.log("---------------------------------------------")
        console.log("Total Ammount: ", mainAccount.totalAmmount.toString());
        console.log("---------------------------------------------")
    });
})