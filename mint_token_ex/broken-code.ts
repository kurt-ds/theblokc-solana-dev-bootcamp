import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'


const url = Web3.clusterApiUrl('devnet')
const connection = new Web3.Connection(url);
const publicKey = new Web3.PublicKey("3chLbWQgVyyFV3yUVqhp74NGH4JuVUDQzpySESCRjUZt");
const programId = new Web3.PublicKey("AVuMs3qsu7xpNs9L2cUk8HzTTFndpA7zs12yb5nr784a");
const PRIVATE_KEY = "4Vjs9jtdUKPQEMnj6aNPY2CC9MFtGB94dG8rvouF6y5sGXJjvuvHYHtY6CUNoSNH6buH9ioWsRUvdPtBi63KzZBc"
const decoded = base58.decode(PRIVATE_KEY) 


async function main() {
    const signer = Web3.Keypair.fromSecretKey(decoded);
    const transaction = new Web3.Transaction();
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId
    });

    transaction.add(instruction)

    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [signer],
    )

    console.log('SIGNATURE', signature)
}

main()
.then(() => process.exit(0))
.catch(err => {
    console.error(err)
});