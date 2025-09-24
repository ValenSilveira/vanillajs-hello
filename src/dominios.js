let pronoun = ['the', 'our'];
let adj = ['great', 'big', 'pued']; 
let noun = ['jogger', 'racoon', 'es']; 
let extensions = ['com', 'net', 'us', 'io', 'es', 'ly'];


function generateDomains(pronouns, adjs, nouns, exts) {
  const results = []; 
  const seen = {}; 

  for (let p = 0; p < pronouns.length; p++) {
    for (let a = 0; a < adjs.length; a++) {
      for (let n = 0; n < nouns.length; n++) {
        
        const base = pronouns[p] + adjs[a] + nouns[n];

        
        for (let e = 0; e < exts.length; e++) {
          const full = base + '.' + exts[e];
          if (!seen[full]) {
            results.push(full);
            seen[full] = true;
          }
        }

        
        for (let e = 0; e < exts.length; e++) {
          const ext = exts[e];
         
          for (let split = 1; split < base.length; split++) {
            const prefix = base.slice(0, split);
            const suffix = base.slice(split);
            if (suffix === ext) {
              const hack = prefix + '.' + ext;
              if (!seen[hack]) {
                results.push(hack);
                seen[hack] = true;
              }
            }
          }
        }
      }
    }
  }

  return results;
}


const domains = generateDomains(pronoun, adj, noun, extensions);
console.log('Dominios generados:', domains.length);
for (let i = 0; i < domains.length; i++) {
  console.log(domains[i]);
}