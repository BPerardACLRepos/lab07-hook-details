const getCharacters = (page) => {
    const res = fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const json = res.json();
    return json.results;
}

export default getCharacters;


// Rick and Morty API response
// replace page query with /${character id} for api details page for specific character (same info as in array)
//
// {
//     "info": {
//     "count": 671,
//     "pages": 34,
//     "next": "https://rickandmortyapi.com/api/character?page=2",
//     "prev": null
//     },
//     "results": [
//     {
//     "id": 1,
//     "name": "Rick Sanchez",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//     "name": "Earth (C-137)",
//     "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//     "name": "Earth (Replacement Dimension)",
//     "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     "episode": [
//     "https://rickandmortyapi.com/api/episode/1",
//     ],
//     "url": "https://rickandmortyapi.com/api/character/1",
//     "created": "2017-11-04T18:48:46.250Z"
//     },
//     {
//     "id": 2,
//     "name": "Morty Smith",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//     "name": "Earth (C-137)",
//     "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//     "name": "Earth (Replacement Dimension)",
//     "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//     "episode": [
//     "https://rickandmortyapi.com/api/episode/1",
//     ],
//     "url": "https://rickandmortyapi.com/api/character/2",
//     "created": "2017-11-04T18:50:21.651Z"
//     },
// ]
// }