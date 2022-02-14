/*
DISABLES WEB3-DAO ON TOP.GG
for more info about why web3 is not secure:https://www.vox.com/recode/22907072/web3-crypto-nft-bitcoin-metaverse
*/

var url = "top.gg"
var https = "https://" + url

//goes back to main page,if the domain is /dao
if(location.href == "https://top.gg/dao"){
  location.href = "https://top.gg"
}
