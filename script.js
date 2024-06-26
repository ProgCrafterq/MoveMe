function random(max){
    return Math.floor(Math.random() * max);
}
$("#up").click(() => {
    $(".circle").css({
        "top": "-=100px",
        "background-color":`rgb(${random(256)} ${random(256)} ${random(256)})`
    })

});
$("#down").click(() => {
    $(".circle").css({
        "top": "+=100px",
        "background-color":`rgb(${random(256)} ${random(256)} ${random(256)})`
    })

});
$("#right").click(() => {
    $(".circle").css({
        "left": "+=100px",
        "background-color":`rgb(${random(256)} ${random(256)} ${random(256)})`
    })

});
$("#left").click(() => {
    $(".circle").css({
        "left": "-=100px",
        "background-color":`rgb(${random(256)} ${random(256)} ${random(256)})`
    })

});
