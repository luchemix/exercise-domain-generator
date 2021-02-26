let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domains = [".com", ".us", ".net", ".io", ".org"]

for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
        for (let e = 0; e < noun.length; e++) {
            for (let u = 0; u < domains.length; u++) {
                console.log(pronoun[i]+adj[a]+noun[e]+domains[u]);
            }            
        }
    }
    
}

