function storeCoursesAndStudents(inputArray) {
    const courses = {};

    inputArray.forEach(input => {
        if (input.includes(':')) {
            const [courseInfo, capacityStr] = input.split(': ');
            const courseName = courseInfo.trim();
            const capacity = Number(capacityStr);

            if (!courses.hasOwnProperty(courseName)) {
                courses[courseName] = { capacity, students: [] };
            } else {
                courses[courseName].capacity += capacity;
            }
        } else if (input.includes('joins')) {
            const regex = /(.+)\[(\d+)\] with email (.+) joins (.+)/;
            const [, username, creditsStr, email, courseName] = input.match(regex);
            const credits = Number(creditsStr);

            if (courses.hasOwnProperty(courseName)) {
                const { capacity, students } = courses[courseName];
                if (students.length < capacity) {
                    students.push({ username, email, credits });
                }
            }
        }
    });

    const sortedCourses = Object.entries(courses)
        .sort(([, courseA], [, courseB]) => courseB.students.length - courseA.students.length);

    sortedCourses.forEach(([courseName, { capacity, students }]) => {
        const placesLeft = Math.max(0, capacity - students.length);
        console.log(`${courseName}: ${placesLeft} places left`);

        students.sort((a, b) => b.credits - a.credits)
            .forEach(student => {
                console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
            });
    });
}


function storeCoursesAndStudents(inputArray) {
    const courses = {};

    inputArray.forEach(input => {
        if (input.includes(':')) {
            const [courseName, capacityStr] = input.split(': ').map(str => str.trim());
            const capacity = Number(capacityStr);

            if (!courses[courseName]) {
                courses[courseName] = { capacity, students: [] };
            } else {
                courses[courseName].capacity += capacity;
            }
        } else if (input.includes('joins')) {
            const [username, credits, email, courseName] = input.match(/(.+)\[(\d+)\] with email (.+) joins (.+)/).slice(1);

            if (courses[courseName] && courses[courseName].students.length < courses[courseName].capacity) {
                courses[courseName].students.push({ username, email, credits: Number(credits) });
            }
        }
    });

    Object.entries(courses)
        .sort(([, a], [, b]) => b.students.length - a.students.length)
        .forEach(([courseName, { capacity, students }]) => {
            console.log(`${courseName}: ${capacity - students.length} places left`);
            students
                .sort((a, b) => b.credits - a.credits)
                .forEach(({ username, email, credits }) => {
                    console.log(`--- ${credits}: ${username}, ${email}`);
                });
        });
}


// Example 1
const input1 = [
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
];

console.log("Example 1:");
storeCoursesAndStudents(input1);

console.log();

// Example 2
const input2 = [
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
];

console.log("Example 2:");
storeCoursesAndStudents(input2);
