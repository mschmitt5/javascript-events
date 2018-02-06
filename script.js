
function textColor() {
    document.getElementById("ginny").style.color = "red";
}




function scrollDown() {

    let firstParagraph = document.getElementById("first").value;

    let firstArray = firstParagraph.split("/\s/ ");

    firstParagraph = firstArray.slice(0, firstArray.length - 1).join(" ");
    document.getElementById("first").value = firstParagraph;

    // // for (let i = 0; i < 50; i++) {
    // //     document.write(firstArray[i]);
    // // }
    //
    // document.getElementById("first").innerHTML = firstArray;
    //
    // for (let i = 0; i < 50; i++) {
    //     document.delete(firstArray[i]);
    // }
}