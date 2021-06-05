const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90;
}

const oldAge = [100] // > 90

type CourseType = {
    title: string,
    price: number
}

const courses = [{title: "css", price:100},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

//<< 160
const cheapPredicate = (course:CourseType) =>{
    return course.price < 160
}
