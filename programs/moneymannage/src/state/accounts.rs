use anchor_lang::prelude::*;

#[account]
pub struct MainAccount { 
    pub bump_original: u8,              // 1
    pub vec_keys: Vec<Pubkey>,          // 4 + 32 + 32
    pub vec_ammount: Vec<u64>,          // 4 + 8 + 8
    pub total_ammount: u64,             // 8
}

impl MainAccount {
    pub const SIZE: usize =  1 + 4 + 32 + 32 + 4 + 8 + 8 + 8;
}
