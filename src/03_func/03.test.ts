import {StudentType} from "../02_Objects/02";
import {addSkill1, doesStudentLiveIn} from "./03";

let student: StudentType

beforeEach(()=>{
    student = {
        id: 1,
        name : "Ilya",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "UL",
            city: {
                title: "Moscow",
                countryTitle: "RUS"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test.skip("new tech skill should be added to student", () =>{
      expect(student.technologies.length).toBe(3)

      addSkill1(student, "JS")

      expect(student.technologies.length).toBe(4)
      expect(student.technologies[3].title).toBe("JS")
      expect(student.technologies[3].title).toBeDefined()
})

test.skip("student lives in city?", () =>{

    let result1 = doesStudentLiveIn(student, "Minsk")
    let result2 = doesStudentLiveIn(student, "Moscow")

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})