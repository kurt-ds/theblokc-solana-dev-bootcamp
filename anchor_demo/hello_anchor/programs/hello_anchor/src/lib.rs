use anchor_lang::prelude::*;

declare_id!("2UhX4XZyTHMyXcJCdem33HNjftdc5GEkPLNsoobtMN8a");

#[program]
pub mod hello_anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
