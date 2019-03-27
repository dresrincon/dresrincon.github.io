//************************ Templates ************************

// Button to open #popup1 modal
$(document).ready(function() {
    $('#condom').click(function() {
        $("#popup1").toggleClass("visible");
        });
});
// Button to close a #popup1 modal
$(document).ready(function (){
    $('#close-condom').click(function() {
        $("#popup1").toggleClass("visible");
        
        });
});
// Button to open #popup2 modal
$(document).ready(function (){
    $('#prep').click(function() {
        $("#popup2").toggleClass("visible");
        
        });
});
// Button to close #popup2 modal
$(document).ready(function (){
    $('#close-prep').click(function() {
        $("#popup2").toggleClass("visible");
        
        });
    
});
// Button to open #popup3 modal
$(document).ready(function (){
    $('#abstinence').click(function() {
        $("#popup3").toggleClass("visible");
        
        });
});
// Button to close #popup3 modal
$(document).ready(function (){
    $('#close-abstinence').click(function() {
        $("#popup3").toggleClass("visible");
        
        });
    
});
// Button to open #popup4 modal
$(document).ready(function (){
    $('#testing').click(function() {
        $("#popup4").toggleClass("visible");
        
        });
});
// Button to close #popup3 modal
$(document).ready(function (){
    $('#close-testing').click(function() {
        $("#popup4").toggleClass("visible");
        });
    
});
// Button to open #scenario1-choice-popup modal
$(document).ready(function (){
    $('#scenario1-click-for-answer').click(function() {
        $("#scenario1-choice-popup").toggleClass("visible");
        });
});
// Button to close #scenario1-choice-popup modal
$(document).ready(function (){
    $('#close-scenario1-explanation').click(function() {
        $("#scenario1-choice-popup").toggleClass("visible");
        });
});
/*
// Button to open #scenario2-choice-popup modal
$(document).ready(function (){
    $('#scenario2-click-for-answer').click(function() {
        $("#scenario2-choice-popup").toggleClass("visible");
        });
});
// Button to close #scenario2-choice-popup modal
$(document).ready(function (){
    $('#close-scenario2-explanation').click(function() {
        $("#scenario2-choice-popup").toggleClass("visible")
        });*/