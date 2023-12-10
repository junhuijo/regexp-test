const str = `
010-1234-5678.
thesecon@gmmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy  dog.
abbcccdddd
http://localhost:1234
`


//const regexp = new RegExp('the', 'gi')
// const regexp =/fox/gi
// console.log(regexp.test(str))
// console.log(str.match(regexp))

// console.log(str.match(/\.$/gi))

// console.log(
//     str.match(/d$/gm)
// )

// console.log(
//     str.match(/^T/gm)
// )

// console.log(
//     str.match(/h..p/g)
// )
// console.log(
//     str.match(/d{2,}/g)
// )


// const h = ` the hello world`


// console.log(
//     h.replace(/\s/g, '')
// )

console.log(
    str.match(/(?<=@).{1,}/g)
)