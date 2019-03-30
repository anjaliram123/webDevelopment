var scores1 = [2,34,45,56,75];

function average(scores) {
    var sum = 0;
    var average = 0;
    for(var i=0;i<scores.length;i++) {
        sum = sum + scores[i];
    }
    average = sum / scores.length;
    console.log(Math.round(average));
}

average(scores1);

