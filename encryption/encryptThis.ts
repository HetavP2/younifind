"use server";

const encryptThis = (text: any) => {
  let result = "";
  let key: any = "hello";
  for (let i = 0; i < text.length; i++) {
    const textChar = text.charCodeAt(i);
    const keyChar = key.charCodeAt(i % key.length);
    const encryptedChar = String.fromCharCode(textChar ^ keyChar);
    result += encryptedChar;
  }
  console.log(" original is: ", text, " BUT result is ", result);

  return result;
};

export default encryptThis;
