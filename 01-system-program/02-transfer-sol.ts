import * as Web3 from '@solana/web3.js'
import base58 from 'bs58';
import dotenv from 'dotenv';

dotenv.config();



const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
const PRIVATE_KEY = '3chLbWQgVyyFV3yUVqhp74NGH4JuVUDQzpySESCRjUZt';
const PUBLIC_KEY = '4Vjs9jtdUKPQEMnj6aNPY2CC9MFtGB94dG8rvouF6y5sGXJjvuvHYHtY6CUNoSNH6buH9ioWsRUvdPtBi63KzZBc';

async function main() {
    //GET KEY
    const signer = Web3.Keypair.fromSecretKey(base58.decode(PRIVATE_KEY))
    const transaction = new Web3.Transaction();

    const sendSolTransaction  = Web3.SystemProgram.transfer({
        fromPubkey: new Web3.PublicKey(PUBLIC_KEY),
        toPubkey: new Web3.PublicKey('JBgi3Aj5CnEp9zHwxjKg6EuCeJHCkJ3kwsQP2tPB3G6V'),
        lamports: 1 * Web3.LAMPORTS_PER_SOL
    })

    transaction.add(sendSolTransaction);
    const txHash = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [signer]
    )

    console.log('txHash / txSignature', txHash);
}

main()