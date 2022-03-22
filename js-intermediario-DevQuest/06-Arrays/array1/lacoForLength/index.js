let frutas = ['Bananas', 'Maçã', 'Uva', 'Laranjas']

// O length vai percorrer todo o array

for( i =0; i < frutas.length; i++){
    console.log('Frutas:', frutas[i])
}

/* 
    R: O length percorre e tras os dados de todo o array
    Frutas: Bananas
    Frutas: Maçã
    Frutas: Uva
    Frutas: Laranjas
*/
for( i =0; i < frutas.length; i++){
    console.log('Frutas:', +i)
}

/*
    Concatenando so com a variável i ele tras todos os indece do array:
    Frutas: 0
    Frutas: 1
    Frutas: 2
    Frutas: 3
*/