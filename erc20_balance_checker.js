const { ethers } = require("ethers");

// Настройка провайдера
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"); // Замените на ваш URL Infura

// Адрес контракта токена и ABI
const tokenAddress = "TOKEN_CONTRACT_ADDRESS"; // Замените на адрес токена ERC-20
const walletAddress = "WALLET_ADDRESS"; // Замените на адрес кошелька
const abi = [
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)"
];

async function getTokenBalance(tokenAddress, walletAddress) {
  try {
    // Проверка входных данных
    if (!ethers.isAddress(tokenAddress)) {
      throw new Error("Указан некорректный адрес контракта токена.");
    }
    if (!ethers.isAddress(walletAddress)) {
      throw new Error("Указан некорректный адрес кошелька.");
    }

    // Создание экземпляра контракта
    const tokenContract = new ethers.Contract(tokenAddress, abi, provider);

    // Получение баланса и количества десятичных знаков
    const [balance, decimals] = await Promise.all([
      tokenContract.balanceOf(walletAddress),
      tokenContract.decimals()
    ]);

    // Форматирование баланса
    const formattedBalance = ethers.formatUnits(balance, decimals);

    console.log(`Баланс токенов на кошельке ${walletAddress}: ${formattedBalance}`);
    return formattedBalance;
  } catch (error) {
    console.error("Ошибка при получении баланса токенов:", error.message);
  }
}

// Вызов функции
getTokenBalance(tokenAddress, walletAddress);


#123213asd2

#123213asd2

#123213asd2

123213asd2

123213asd2

123213asd2

123213asd2
