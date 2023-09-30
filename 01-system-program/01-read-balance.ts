import * as Web3 from '@solana/web3.js'

async function main() {
    const publicKey = '3chLbWQgVyyFV3yUVqhp74NGH4JuVUDQzpySESCRjUZt'
    const URL = Web3.clusterApiUrl('devnet')
    const connection = new Web3.Connection(URL)

    const balance = await connection.getBalance(new Web3.PublicKey(publicKey));
    const solBalance = balance / Web3.LAMPORTS_PER_SOL
    console.log('balance', solBalance);
}

main()