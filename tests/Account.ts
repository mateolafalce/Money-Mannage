import * as anchor from "@project-serum/anchor";
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);
export const wallet = provider.wallet as anchor.Wallet;

export const MainAccount = new anchor.web3.PublicKey(
    "9We1ooqGWhY5NdTJknsnRpoyynT8exrB7YggJZeTEEJR"
);