/* =============== Block Service =================
|         Class to access Blockchain             |
|===============================================*/

const BlockChain = require('../models/Blockchain');

class BlockService {

    constructor() {
        this.blockchain = null;
    }
    // Initializes the Blockchain
    async initBlockchain() {
        if (this.blockchain === null) {
            this.blockchain = await BlockChain.initBlockchain();
            return this.blockchain;
        }
        return this.blockchain;
    }

    // Get the Blockchain instance
    async getBlockchain() {
        return await this.initBlockchain();
    }
    // Look up for the block by index
    async getBlockByIndex(index) {
        let block = {};
        let bc = await this.getBlockchain();
        block = await bc.getBlock(index);
        return BlockChain.getBlockFromString(block);
    }

    // Creates a new Block
    async addNewBlock(block) {
        let newBlock = {};
        try {
            let bc = await this.getBlockchain();
            newBlock = await bc.addBlock(block);
        } catch (e) {
            throw new Error(e);
        }
        return BlockChain.getBlockFromString(newBlock);
    }
}

module.exports = BlockService;