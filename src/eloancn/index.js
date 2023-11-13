const CryptoJs = require("crypto-js")


function  encryptByDES(plaintext){
    const DESKey = "e9284d45-cf2a-4e46-9367-f122413ca6b0"
    const KEY = CryptoJs.enc.Utf8.parse(DESKey)
    const cfg = {
        mode: CryptoJs.mode.ECB,
        padding:CryptoJs.pad.Pkcs7
    }
    const cipher = CryptoJs.DES.encrypt(plaintext,KEY,cfg)
    return cipher.toString()
}

function decyptByDES(ciphertext){
    const DESKey = "e9284d45-cf2a-4e46-9367-f122413ca6b0"
    const KEY = CryptoJs.enc.Utf8.parse(DESKey)
    const cfg = {
        mode: CryptoJs.mode.ECB,
        padding:CryptoJs.pad.Pkcs7
    }
    const cipher = CryptoJs.DES.decrypt(ciphertext,KEY,cfg)
    return cipher.toString(CryptoJs.enc.Utf8)
}

const password = "111111111";
const cipherText = encryptByDES(password)
console.log(cipherText)
console.log(decyptByDES(cipherText))