import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import base58 from 'bs58'
import * as token from '@solana/spl-token'

const url = Web3.clusterApiUrl('devnet')
const connection = new Web3.Connection(url)
const publicKey = new Web3.PublicKey('3chLbWQgVyyFV3yUVqhp74NGH4JuVUDQzpySESCRjUZt')
const decoded = base58.decode(process.env.PRIVATE_KEY as any) 
const keyPair = Web3.Keypair.fromSecretKey(decoded)


const tokenMint = new Web3.PublicKey('Cm8uxYVoZ77xhh57xKKouDnJdAv2tRLw3RD3cnDFfKej');

async function main() {
    const tokenAccount = await token.createAccount(
            connection,
            keyPair,
            tokenMint,
            publicKey
    )

    console.log(tokenAccount.toBase58());
}

main()