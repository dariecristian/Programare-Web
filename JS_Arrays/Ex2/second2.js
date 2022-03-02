const students = [
    {
        name: "Johnny",
        marks: [10, 8, 7, 8, 6]},
    {
        name: "Johanna",
        marks: [8, 10, 8, 5, 4]},
    {
        name: "Heller",
        marks: [8, 10, 7, 5, 9]},
    {
        name: "Summer",
        marks: [5, 7, 4, 5, 6]},
    {
        name: "Kell",
        marks: [8, 7, 6, 5, 7]},
    {
        name: "Darrell",
        marks: [9, 9, 7, 8, 5]
    }
]
let average = [];
let findAverage = () => {
    for (let i = 0; i < students.length; i++) {
        average.push({name: students[i].name, average:((students[i].marks.reduce((prev, curr) => curr + prev))/students[i].marks.length)});
    }
    alert(students[i].marks);
}
