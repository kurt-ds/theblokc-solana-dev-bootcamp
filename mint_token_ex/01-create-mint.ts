import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import base58 from 'bs58'
import * as token from '@solana/spl-token'


const url = Web3.clusterApiUrl('devnet')
const connection = new Web3.Connection(url)
const publicKey = new Web3.PublicKey('3chLbWQgVyyFV3yUVqhp74NGH4JuVUDQzpySESCRjUZt')
const decoded = base58.decode(process.env.PRIVATE_KEY as any) 
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main() {
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publicKey,
        publicKey,
        9
    )

    console.log(tokenMint.toBase58())
}

main()