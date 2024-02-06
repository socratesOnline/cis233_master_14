var blnOption;
var err;

function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page 
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}

function getSemester() {
    // set variables
    var semesterId = document.getElementById('semesterList');
    var option = document.createElement('option');

    // add a placeholder option
    option.value = 0;
    option.text = 'Select a Semester';
    semesterId.add(option);

    // populate semester list from array
    for (x = 0; x < arySemesters.length; x++) {
        option = document.createElement('option');
        option.value = arySemesters[x][0];
        option.text = arySemesters[x][1];
        semesterId.add(option);
    }
}

function getClass(objSemester) {
    // set variables
    var semesterId = objSemester.options[objSemester.selectedIndex].value;
    var aryClasses = eval(`ary${semesterId}`);
    var classId = document.getElementById('classList');
    var option = document.createElement('option');

    // reset class list
    classId.length = 0;

    if(blnOption) {
        // add a placeholder option
        option.value = 0;
        option.text = 'Select a Class';
        classId.add(option);
    }

    //populate class list from array
    for (x = 0; x < aryClasses.length; x++) {
        var option = document.createElement('option');
        option.value = aryClasses[x][0];
        option.text = aryClasses[x][1];
        classId.add(option);
    }
}

function getStudent(objClass) {
    // set variables
    var classId = objClass.options[objClass.selectedIndex].value;
    var aryStudents = eval(`ary${classId}`);
    var studentId = document.getElementById('studentList');

    // reset student list
    studentId.length = 0;

    // populate student list from array
    for (x = 0; x < aryStudents.length; x++) {
        var option = document.createElement('option');
        option.value = aryStudents[x][0];
        option.text = aryStudents[x][1];
        studentId.add(option);
    }
}

function getStudentTable(objClass) {
    // set variables
    var classId = objClass.options[objClass.selectedIndex].value;
    var aryStudents = eval(`ary${classId}`);
    var studentId = document.getElementById('studentList');

    // reset student list
    studentId.innerHTML = '';

    // populate student list from array
    for (x = 0; x < aryStudents.length; x++) {
        var row = studentId.insertRow(x);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        cell0.innerHTML = aryStudents[x][1];
        cell1.innerHTML = `<input type="checkbox" id="${aryStudents[x][0]}" value="${aryStudents[x][1]}" onclick="setAttendance(this)">`;
    }
}