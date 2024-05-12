import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
    {
        courseNo: String,
        courseName: String,
        sections: [
          {
            section: String,
            day: String,
            dayLab: String,
            time: String,
            timeLab: String,
            room: String,
            roomLab: String,
            examTime: String,
            teacher: [{
                id: String,
                titleTH: String,
                titleEN: String,
                firstNameTH: String,
                firstNameEN: String,
                lastNameTH: String,
                lastNameEN: String,
                type: String
            }],
            coTeachers: [{
                id: String,
                titleTH: String,
                titleEN: String,
                firstNameTH: String,
                firstNameEN: String,
                lastNameTH: String,
                lastNameEN: String,
                type: String
            }]
          }
        ]
    }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
