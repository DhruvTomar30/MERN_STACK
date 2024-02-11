// parse    JSON-----> js object
let jsonRes=
    '{"fact":"Cats spend nearly 1\/3 of their waking hours cleaning themselves.","length":64}';

    let validRes= JSON.parse(jsonRes);
    console.log(validRes.facts);

// Stringify    Js object--> JSON
let student={
    name:"dhruv",
    marks: 90,     //output:-  {"name":"dhruv","marks":90}'
}