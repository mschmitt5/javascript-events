
function textColor() {
    document.getElementById("ginny").style.color = "red";
}




function scrollDown() {

    let firstParagraph = "Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!";

    let firstArray = firstParagraph.split(" ");

    for (let i = 0; i < 5; i++) {
        document.write(firstArray[i]);
    }

    document.getElementById("first").innerHTML = firstArray;

    for (let i = 0; i < 5; i++) {
        document.removeChild(firstArray[i]);
    }
}