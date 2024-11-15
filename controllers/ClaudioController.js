const Moralis = require("moralis").default;
require("dotenv").config();

// Initialize Moralis
Moralis.start({
  apiKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRhZmRmMDYyLTFhZjItNDkzNi1hOGVkLTEyN2M2MmE5OTVkMCIsIm9yZ0lkIjoiNDE2MTg3IiwidXNlcklkIjoiNDI3NzY2IiwidHlwZUlkIjoiMmY3MmViZWMtZGNkOS00M2VhLTgyOWMtNTVjZWIzM2ZmOWFhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzE2Mzg1MTIsImV4cCI6NDg4NzM5ODUxMn0.8aRgrltRRDXerjUjBvKOz2x5B5BJvXTsTVifyDOTxZ0",
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
