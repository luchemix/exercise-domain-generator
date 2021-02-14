let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

let randomNumber1 = Math.floor(Math.random() *2);
let randomNumber2 = Math.floor(Math.random() *2);
let randomNumber3 = Math.floor(Math.random() *2);

let allDomains = [];

  function domainGen(){
    allDomains.push(pronoun[randomNumber1]+adj[randomNumber2]+noun[randomNumber3]+".com");

    for (let i = 0; i < 8; i++) {
        if (pronoun[randomNumber1]+adj[randomNumber2]+noun[randomNumber3]+".com" !== allDomains[i]){
            allDomains.push(pronoun[randomNumber1]+adj[randomNumber2]+noun[randomNumber3]+".com");
        }
        
    }

    return allDomains;
  }

console.log(domainGen())