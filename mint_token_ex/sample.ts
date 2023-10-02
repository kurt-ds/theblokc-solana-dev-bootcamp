import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
const PRIVATE_KEY = '<PRIVATE_KEY>'
async function main() {
    const signer = Web3.Keypair.fromSecretKey(base58.decode(PRIVATE_KEY))
    const transaction = new Web3.Transaction()
    const sendSolTransaction = Web3.SystemProgram.transfer({
        fromPubkey: new Web3.PublicKey('5Eh25gUPJDoNtTd3v6vpZ5VAwmjUUrxN28MpJDCfR2xA'),
        toPubkey: new Web3.PublicKey('92UqzKy29rQaUG27ZoQt7cU8XNkpscnRkj9cn7b6FzgQ'),
        lamports: 0.1 * Web3.LAMPORTS_PER_SOL,
    });
    transaction.add(sendSolTransaction)
    const txHash = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [signer]
    )
    console.log('txHash / txSignature', txHash)
}
main()