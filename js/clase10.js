/*
const enJSON =`{
    "curso": "Javascript",
    "enCurso": true,
    "entregas":["desafios", "complementarios", "preentregas"]
}`

console.log(enJSON)

const obj =JSON.parse(enJSON)

console.lo(obj)
*/
/*
const curso = {
    titulo: "javascripot",
    duracion: 16,
    finalizado: false
}
const aJSON = JSON.stringify(curso)

console.log(JSON)
localStorage.setItem("curso", "Javascript")
*/
/*
const curso = {
    titulo: "javascript",
    precio: 2000
}
const cursoStr = JSON.stringify(curso)
localStorage.setItem("curso Actual", cursoStr)
console.log(cursoStr)

*/

const cursos = [ "DW", "JS", "React", "node"]

const cursosStr = JSON.stringify(cursos)
localStorage.setItem   ("otros cursos", cursosStr)
