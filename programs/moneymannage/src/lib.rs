use anchor_lang::prelude::*;
use instructions::*;
use crate::errors::ErrorCode;

pub mod errors;
pub mod instructions;
pub mod state;

declare_id!("A7zNPvGup3CLHhgghEDPRWRhNwJJz2QkyEXnvABMDpQ8");

#[program]
pub mod moneymannage {
    use super::*;
    pub fn create_main_account(
        ctx: Context<Create>,
        amount: u64
    ) -> Result<()> {
        instructions::create_main_account::create_main_account(
            ctx,
            amount
        )
    }
    pub fn add_account(
        ctx: Context<AddAccount>,
        amount: u64
    ) -> Result<()> {
        instructions::add_account::add_account(
            ctx,
            amount
        )
    }
}