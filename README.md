# HyperMarket — EVM Prediction Market Demo | Prediction Market Contract & Frontend

**This is a demo** of an **EVM prediction market** built with a **prediction market contract** (Solidity) and **prediction market frontend** (React). Use it to see how an **EVM prediction market smart contract** and **prediction market frontend** work together. **We have a complete, production-ready version** — [**contact us**](#contact-us) to get the full **EVM prediction market** stack or have us **update it for you**.

---

## What Is This Demo?

A **prediction market** on EVM chains: peer-to-peer wagering, multi-sig escrow, and automatic payouts. This repo shows our **prediction market contract** and **prediction market frontend** architecture. It is **not the full product** — it’s a **demo to get clients** and showcase our **EVM prediction market** capabilities.

- **Prediction market contract**: Solidity, Hardhat — deployable **EVM prediction market smart contract**
- **Prediction market frontend**: React + TypeScript, Vite, wagmi/viem, MetaMask & WalletConnect

Need the **complete EVM prediction market** (backend, full features, customizations)? **We can build or update it for you** — [**contact us**](#contact-us).

---

## EVM Prediction Market — Features in This Demo

- Multi-sig escrow for holding funds
- P2P wagering — create and join wagers
- Auto payout to winners
- Polymarket integration for outcome resolution
- MetaMask and WalletConnect support
- Responsive **prediction market frontend** UI

---

## Project Structure

```
contracts/     # EVM prediction market smart contract (Solidity, Hardhat)
frontend/      # Prediction market frontend (React app)
```

---

## Quick Start (Demo)

Requires Node.js 18+ and npm. MetaMask extension recommended.

### Prediction Market Frontend

```bash
cd frontend
npm install
npm run dev
```

Add WalletConnect project ID to `.env` for WalletConnect support (optional).

### Prediction Market Contract (EVM)

```bash
cd contracts
npm install
npx hardhat run scripts/deploy.js --network mumbai
```

---

## Tech Stack

- **Prediction market frontend**: React + TypeScript, Vite, MUI, wagmi/viem
- **Prediction market contract**: Solidity, Hardhat — **EVM prediction market smart contract**
- **Network**: Polygon Mumbai (testnet)

---

## Demo Status

Frontend: done. Wallets: working (MetaMask + WalletConnect). **Prediction market contract**: written, tested (19/19 pass), ready to deploy. Backend: available in our **complete version** — [**contact us**](#contact-us).

---

## Contact Us — Get the Complete EVM Prediction Market

This repo is a **demo for clients**. We offer:

- **Complete EVM prediction market** (backend, APIs, full features)
- **Custom prediction market contract** and **prediction market frontend** development
- **Updates and maintenance** — we can **update it for you** for your chain or use case

**Contact us** to get the full **EVM prediction market smart contract** and **prediction market frontend** stack, or to have us **update this demo for you**.

---

*Keywords: prediction market, prediction market contract, prediction market frontend, evm prediction market, evm prediction market smart contract*
