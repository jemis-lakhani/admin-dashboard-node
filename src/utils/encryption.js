import crypto from "crypto";

const AESEncryption = {
  key: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEF", // must be 32 characters
  iv: "ABCDEFGHIJKLMNOP", // must be 16 characters

  encrypt: function (message) {
    const keyBuffer = Buffer.from(AESEncryption.key, "utf-8");
    const ivBuffer = Buffer.from(AESEncryption.iv, "utf-8");
    const cipher = crypto.createCipheriv("aes-256-cbc", keyBuffer, ivBuffer);

    let encryptedBuffer = cipher.update(message, "utf-8", "base64");
    encryptedBuffer += cipher.final("base64");

    return encryptedBuffer;
  },

  decrypt: function (encryptedText) {
    const keyBuffer = Buffer.from(AESEncryption.key, "utf-8");
    const ivBuffer = Buffer.from(AESEncryption.iv, "utf-8");
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      keyBuffer,
      ivBuffer
    );

    let decryptedBuffer = decipher.update(encryptedText, "base64", "utf-8");
    decryptedBuffer += decipher.final("utf-8");

    return decryptedBuffer;
  },
};

export default AESEncryption;
