// 1. hammer is on the table
// 2. sun is in the sky
// 3. apple is with my sister
// 4. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.

console.group('1. hammer is on the table');
{
let nouns = ['hammer', 'table']; 
let helpers = ['is', 'on', 'the', ' '];
let sentence1 = nouns[0] + helpers[3] + helpers[0] + helpers[3] + helpers[1] + helpers[3] + helpers[2] + helpers[3] + nouns[1];                                                                  
console.log(sentence1);
}
console.groupEnd();


console.group('2. sun is in the sky');
{
let nouns = ['sun', 'sky']; 
let helpers = ['is', 'in', 'the', ' '];
let sentence1 = nouns[0] + helpers[3] + helpers[0] + helpers[3] + helpers[1] + helpers[3] + helpers[2] + helpers[3] + nouns[1];                                                                  
console.log(sentence1);
}
console.groupEnd();

console.group('3. apple is with my sister');
{
    let nouns = ['apple', 'sister']; 
    let helpers = ['is', 'with', 'my', ' '];
    let sentence1 = nouns[0] + helpers[3] + helpers[0] + helpers[3] + helpers[1] + helpers[3] + helpers[2] + helpers[3] + nouns[1];                                                                  
    console.log(sentence1);
}
console.groupEnd();

console.group('4. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.');
{
    let nouns = ['Saulė', 'vakare', 'vardas']; 
    let verbs = ['leidžiasi', 'yra'];
    let adjective = ['karšta', 'gražus'];
    let helpers = [' ', '.'];
    let sentence1 = nouns[0] + helpers[0] + verbs[0] + helpers[0] + nouns[1] + helpers[1];
    let sentence2 = nouns[0] + helpers[0] + verbs[1] + helpers[0] + adjective[1] + helpers[0] + nouns[2] + helpers[1];     
    let sentence3 = nouns[0] + helpers[0] + verbs[1] + helpers[0] + adjective[0] + helpers[1];                                                                     
    console.log(sentence1);
    console.log(sentence2);
    console.log(sentence3);
}
console.groupEnd();