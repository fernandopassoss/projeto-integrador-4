import CryptoJS from "crypto-js";

export const encrypt = (senha: string) => {
	let crypto = CryptoJS.SHA256(senha);
	return crypto.toString(CryptoJS.enc.Base64);
};