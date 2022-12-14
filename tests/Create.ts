import * as anchor from "@project-serum/anchor";
import { Moneymannage } from "../target/types/moneymannage";
import { wallet } from "../tests/Account";
import { PublicKey } from '@solana/web3.js';

describe("Creating PDA", () => {
  const program = anchor.workspace.Moneymannage as anchor.Program<Moneymannage>;
  it("Created", async () => {
    const [mainAccount, _bump] = await PublicKey
      .findProgramAddress(
        [
          anchor.utils.bytes.utf8.encode("Main Account"),
        ],
        program.programId
      )
    const tx = await program.methods.createMainAccount(
      new anchor.BN(6000)
    )
      .accounts({
        mainAccount: mainAccount,
        user: wallet.publicKey,
        mainAccountInfo: mainAccount,
        systemProgram: anchor.web3.SystemProgram.programId,
      }).rpc();
    const MainAccount = await program.account.mainAccount.fetch(mainAccount);
    console.log("---------------------------------------------")
    console.log("Your transaction signature", tx);
    console.log("---------------------------------------------")
    console.log("PDA: ", mainAccount.toBase58());
    console.log("---------------------------------------------")
    console.log("Bump: ", MainAccount.bumpOriginal.toString());
    console.log("---------------------------------------------")
    console.log("Vec Pubkeys: ", MainAccount.vecKeys);
    console.log("---------------------------------------------")
    console.log("Vec Amount: ", MainAccount.vecAmmount);
    console.log("---------------------------------------------")
    console.log("Total Ammount: ", MainAccount.totalAmmount.toString());
    console.log("---------------------------------------------")
  });
})