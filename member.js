function skillsMember() {
    var member = document.getElementById("member").value;
    var memberSkills = [];
    for (var i = 0; i < members.length; i++) {
        if (members[i].name === member) {
            memberSkills = members[i].skills;
        }
    }
    document.getElementById("memberSkills").value = memberSkills;
}