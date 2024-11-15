const Moralis = require("moralis").default;
require("dotenv").config();

// Verifica che la chiave API sia caricata correttamente
console.log("Moralis API Key:", process.env.MORALIS_API_KEY);

// Initialize Moralis
Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
});

exports.getBalance = async (req, res) => {
  try {
    const address = req.params.address;
    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      chain: process.env.CHAIN_ID,
      address: address,
    });
    const balance = response.raw;
    console.log(`Balance of ${address}:`, balance);
    res.status(200).json({ balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch balance" });
  }
};
