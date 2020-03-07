function checkPswd() {

    var ans1 = "Little Blue Penguin";
    var ans2 = "Adolf Hilder";
    var ans3 = "No";

    var entry1 = document.getElementById("question1").value;
    var entry2 = document.getElementById("question2").value;
    var entry3 = document.getElementById("question3").value;

    if (entry1 === ans1 && entry2 === ans2 && entry3 === ans3) {
        document.getElementById("passPage").classList.remove("show");
        document.getElementById("passPage").classList.add("hidden");

        document.getElementById("invPage").classList.remove("hidden");
        document.getElementById("invPage").classList.add("fade-in");
    } else {
        alert("Answers are incorrect...");
    }
};