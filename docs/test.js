const schema = {
    'name': {
        prop: 'studentName',
        type: String
    },
    'father name': {
        prop: 'fatherName',
        type: String
    },
    'registration number': {
        prop: 'regNo',
        type: String
    },
    'DOB': {
        prop: 'DOB',
        type: String
    },
    'father CNIC': {
        prop: 'fatherCNIC',
        type: String
    },
    'B. form number': {
        prop: 'BFormNumber',
        type: String
    },
    'gender': {
        prop: 'gender',
        type: String
    },
    're admission': {
        prop: 'reAdmission',
        type: Boolean
    },
    'is hafiz': {
        prop: 'isHafiz',
        type: Boolean
    },
    'religion': {
        prop: 'religion',
        type: String
    },
    'nationality': {
        prop: 'nationality',
        type: String
    },
    'specialtiy': {
        prop: 'speciality',
        type: String
    },
    'admission date': {
        prop: 'admissionDate',
        type: String
    },
    'school Roll number': {
        prop: 'schoolRollNumber',
        type: String
    },
    'Mobile Number': {
        prop: 'mobile',
        type: String
    },
    'Address': {
        prop: 'address',
        type: String
    },
    'Tehsil': {
        prop: 'tehsil',
        type: String
    },
    'District': {
        prop: 'district',
        type: String
    },
    'Identification mark': {
        prop: 'identificationMark',
        type: String
    },
    'sub-group': {
        prop: 'subGroup',
        type: String
    },

}

let currentStudent = 0;
let totalStudents = 0;
let rows = [];

window.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input')
    input.addEventListener('change', function () {
        readXlsxFile(input.files[0], {
            schema
        }).then(data => {
            // `rows` is an array of rows
            // each row being an array of cells.
            rows = data.rows;
            console.log(rows);
            totalStudents = rows.length;
            updateFields(rows[currentStudent]);
            currentStudent++;
            document.getElementById('current-student').innerHTML = currentStudent;
            document.getElementById('total-students').innerHTML = totalStudents;



        })
    })
    let next = document.getElementById('next');
    let previous = document.getElementById('previous');
    next.addEventListener('click', () => {
        updateFields(rows[currentStudent]);
        currentStudent++;
        if (currentStudent === 0) {
            currentStudent++;
            return;
        }
        if (currentStudent > totalStudents){
            currentStudent--;
            return;
        }
        document.getElementById('current-student').innerHTML = currentStudent;
    })
    previous.addEventListener('click', () => {
        currentStudent--;
        if (currentStudent === 0) {
            currentStudent++;
            return;
        }
        if (currentStudent > totalStudents){
            currentStudent--;
            return;
        }
        updateFields(rows[currentStudent]);
        document.getElementById('current-student').innerHTML = currentStudent;
    })
})

function updateFields(row){
    document.querySelector("#name > p").innerHTML = row.studentName;
            document.querySelector("#father-name > p").innerHTML = row.fatherName;
            document.querySelector("#registration-number > p").innerHTML = row.regNo;
            document.querySelector("#dob > p").innerHTML = row.DOB;
            document.querySelector("#father-cnic > p").innerHTML = row.fatherCNIC;
            document.querySelector("#b-form > p").innerHTML = row.BFormNumber;
            document.querySelector("#gender > p").innerHTML = row.gender;
            document.querySelector("#re-admission > p").innerHTML = row.reAdmission;
            document.querySelector("#is-hafiz > p").innerHTML = row.isHafiz;
            document.querySelector("#religion > p").innerHTML = row.religion;
            document.querySelector("#nationality > p").innerHTML = row.nationality;
            document.querySelector("#speciality > p").innerHTML = row.specialtiy;
            document.querySelector("#admission-date > p").innerHTML = row.admissionDate;
            document.querySelector("#school-roll-number > p").innerHTML = row.schoolRollNumber;
            document.querySelector("#mobile > p").innerHTML = row.mobile;
            document.querySelector("#address > p").innerHTML = row.address;
            document.querySelector("#tehsil > p").innerHTML = row.tehsil;
            document.querySelector("#district > p").innerHTML = row.district;
            document.querySelector("#id-mark > p").innerHTML = row.identificationMark;
}