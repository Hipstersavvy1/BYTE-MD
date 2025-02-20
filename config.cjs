const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"wAi22uYmOhCx4gUt558KRiiEaUpf1/arGVqzvBF5F2A="},"public":{"type":"Buffer","data":"CoL7zF5gocaLp8v4eech5RZ/lSRmT/vpdmkGtwlnBhs="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4NN0L3/cwXfkFFdHqG1Fj4K+xckWtQUpQCCAJjm0JWE="},"public":{"type":"Buffer","data":"eGAFe07vd4Z1KpZ4Q3jRXa7blEU1fn89Snhr/+GIgHM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"UBzoSax32TLwauzCq0uQRI9o8YMQib1WH0tTg7NMGGo="},"public":{"type":"Buffer","data":"K86WZeuK20KRssykf1aAl0/n6ax+FPue2nBknB2pxEE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GB4WT/3URxgYSDCbrjRHlcV+ebKMOvdkQ5vzy53yQ2U="},"public":{"type":"Buffer","data":"gHvg7vT8NkLFKtG28nSrNaCpC+wJoI8Y2n5yN84n5A0="}},"signature":{"type":"Buffer","data":"UEkYK3DyliOMHOVYukv5/KufhFgBSJa6B1BWdd2VHX7oCgRochci/phCLPaRrN1ht1XBWT0b9WrjAseMZjHMCA=="},"keyId":1},"registrationId":65,"advSecretKey":"45d6r2P9corOpRXUHwx8MLHTt+AsH4majRqMNqfDexc=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"qkg0bHl1Sx2BUgC7a6hLgg","phoneId":"213db8e1-1149-4013-8136-ff7e8cc84350","identityId":{"type":"Buffer","data":"NXzc2rhbq6MUFysmIMhZANB9XOU="},"registered":true,"backupToken":{"type":"Buffer","data":"zWYyA1piHxsHtiotCaLJTRb82K8="},"registration":{},"pairingCode":"CE2EP8JF","me":{"id":"254102649633:1@s.whatsapp.net"},"account":{"details":"CID5gycQrcfMvQYYASAAKAA=","accountSignatureKey":"x0yx0aWI9g9r+5VypVWQHHNhQR/VEKlk99/uo1UDtz4=","accountSignature":"Mop39/a+u0PB1VmckDsY4yX6KpGD++HVOi5vw15YUTBS5H0m52Ht/37QnSmRwXxRz0tHcsypZY+XqwyCOHVIBg==","deviceSignature":"2iwMPCViTNbM7UEP2ZVamZOMITemCEh8zQDhHxEjIREQau0Dx/6wzXuurhFMxE11zpxhh9qeFkELC58TkVKzBA=="},"signalIdentities":[{"identifier":{"name":"254102649633:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcdMsdGliPYPa/uVcqVVkBxzYUEf1RCpZPff7qNVA7c+"}}],"platform":"android","lastAccountSyncTimestamp":1739793338,"myAppStateKeyId":"AAAAABDp"}",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
