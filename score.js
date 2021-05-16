var correct = []
var wrong = []
var answers = []
function myFunction() {

    for (i = 1; i <= 20; i++) {

        var element = document.getElementsByName('q' + i + 'o');

        for (j = 0; j < element.length; j++) {

            if (element[j].checked) {

                if (element[j].value == correctAnswers[(i - 1)]) {
                    // window.alert("sheri")
                    correct.push(1)
                    answers.push(i + ". " + element[j].value)
                }
                else {

                    wrong.push(1)
                    answers.push(i + ". " + element[j].value)
                }
            }
        }
    }

    // total correct
    var totalCorrect = 0;
    for (var i = 0; i < correct.length; i++) {
        totalCorrect += correct[i];
    }

    // total incorrect
    var totalWrong = 0;
    var wrongAnswers = 0;
    for (var i = 0; i < wrong.length; i++) {
        wrongAnswers += wrong[i];
        totalWrong = (0.3333 * wrongAnswers)
    }

    var total = totalCorrect - totalWrong
    var questionsAttended = totalCorrect + wrongAnswers;
    document.getElementById("questions_attended").innerHTML = questionsAttended
    document.getElementById("correct").innerHTML = totalCorrect
    document.getElementById("wrong").innerHTML = wrongAnswers
    document.getElementById("total_marks").innerHTML = total

    document.getElementById("questionDiv").style.display = "none"
    document.getElementById("result_section").style.display = "block"
    document.getElementById("submit").style.display = "none"

    result()

}

function ckChange(ckType) {

    var ckName = document.getElementsByName(ckType.name);
    var checked = document.getElementById(ckType.id);

    if (checked.checked) {
        for (var i = 0; i < ckName.length; i++) {

            if (!ckName[i].checked) {
                ckName[i].disabled = true;
            } else {
                ckName[i].disabled = false;
            }
        }
    }
    else {
        for (var i = 0; i < ckName.length; i++) {
            ckName[i].disabled = false;
        }
    }
}

function result() {

    document.getElementById("sAnswers").innerHTML = answers.splice(',').join('<br>')

}