const alchemyKey = "https://eth-rinkeby.alchemyapi.io/v2/PA0-cC5hD35TyuiKDzh4z8RNLV3pJYs9";
const contractABI = require("../contract-abi.json");
const contractAddress = "0xce935A144AcD1eAf030451b62eBa87a71Cbb6B82";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);


export const loadContract = () => {
  window.contract =  new web3.eth.Contract(contractABI, contractAddress);
  console.log(window.contract)
}



export const registerPatient = async (name, allergy, dob, gender) => {

      const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.contract.methods.PatientRegsister(name, allergy, dob, gender).encodeABI(),
      };
  
      try {
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        });
        return {
          success: true,
          status: "✅ Registered"
        };
      } catch (error) {
        return {
          success: false,
          status: "😥 Something went wrong: " + error.message,
        };
      }
    }

export const bookSlot = async (vaccineType, date) => {

      const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        data: window.contract.methods.VaccineRegister(1,  27051999).encodeABI(),
      };
  
      try {
        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        });
        return {
          success: true,
          status: "✅ Booked"
        };
      } catch (error) {
        return {
          success: false,
          status: "😥 Something went wrong: " + error.message,
        };
      }
    }

