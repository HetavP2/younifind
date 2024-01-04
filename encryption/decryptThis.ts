

const decryptThis = (encryptedText: any) => {
  let key: any = "hello"
  let result = "";
  for (let i = 0; i < encryptedText.length; i++) {
    const encryptedChar = encryptedText.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);
    const decryptedChar = String.fromCharCode(encryptedChar ^ keyChar);
    result += decryptedChar;
  }

  console.log("result is", result, " after decrypting the text", encryptedText);

  return result;

};

export default decryptThis;
