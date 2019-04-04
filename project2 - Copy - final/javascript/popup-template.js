//************************ Templates ************************

// Condom-learn
$(document).ready(function () {
    $('#condom').click(function () {
        $("#condom-on-click").addClass("visible");
        $("#popup1").toggleClass("visible");
        $("#popup2").removeClass("visible");
        $("#popup3").removeClass("visible");
        $("#popup4").removeClass("visible");
        $("#prep-on-click").removeClass("visible");
        $("#abstinence-on-click").removeClass("visible");
        $("#testing-on-click").removeClass("visible");
        $("#click-on-icons-direction").addClass("hidden");
    });
    $('#close-condom').click(function () {
        $("#popup1").toggleClass("visible");
        $("#condom-on-click").toggleClass("visible");
        $("#click-on-icons-direction").toggleClass("hidden");
    });
    $('#condom-on-click').click(function () {
        $("#popup1").removeClass("visible");
        $("#condom-on-click").removeClass("visible");
        $("#click-on-icons-direction").removeClass("hidden");
        });
// Prep-learn
});
$(document).ready(function () {
    $('#prep').click(function () {
        $("#prep-on-click").addClass("visible");
        $("#popup2").toggleClass("visible");
        $("#popup1").removeClass("visible");
        $("#popup3").removeClass("visible");
        $("#popup4").removeClass("visible");
        $("#condom-on-click").removeClass("visible");
        $("#abstinence-on-click").removeClass("visible");
        $("#testing-on-click").removeClass("visible");
        $("#click-on-icons-direction").addClass("hidden");
    });
    $('#close-prep').click(function () {
        $("#popup2").toggleClass("visible");
        $("#prep-on-click").toggleClass("visible");
        $("#click-on-icons-direction").toggleClass("hidden");
    });
    $('#prep-on-click').click(function () {
        $("#popup2").removeClass("visible");
        $("#prep-on-click").removeClass("visible");
        $("#click-on-icons-direction").removeClass("hidden");
        });
//Abstinence-learn
});
$(document).ready(function () {
    $('#abstinence').click(function () {
        $("#abstinence-on-click").addClass("visible");
        $("#popup3").toggleClass("visible");
        $("#popup1").removeClass("visible");
        $("#popup2").removeClass("visible");
        $("#popup4").removeClass("visible");
        $("#condom-on-click").removeClass("visible");
        $("#prep-on-click").removeClass("visible");
        $("#testing-on-click").removeClass("visible");
        $("#click-on-icons-direction").addClass("hidden");
    });
    $('#close-abstinence').click(function () {
        $("#popup3").toggleClass("visible");
        $("#abstinence-on-click").toggleClass("visible");
        $("#click-on-icons-direction").toggleClass("hidden");
    });
    $('#abstinence-on-click').click(function () {
        $("#popup3").removeClass("visible");
        $("#abstinence-on-click").removeClass("visible");
        $("#click-on-icons-direction").removeClass("hidden");
        });
//Testing-learn
});
$(document).ready(function () {
    $('#testing').click(function () {
        $("#testing-on-click").addClass("visible");
        $("#popup4").toggleClass("visible");
        $("#popup1").removeClass("visible");
        $("#popup2").removeClass("visible");
        $("#popup3").removeClass("visible");
        $("#condom-on-click").removeClass("visible");
        $("#prep-on-click").removeClass("visible");
        $("#abstinence-on-click").removeClass("visible");
        $("#click-on-icons-direction").addClass("hidden");
});
    $('#close-testing').click(function () {
        $("#popup4").toggleClass("visible");
        $("#testing-on-click").toggleClass("visible");
        $("#click-on-icons-direction").toggleClass("hidden");
});
    $('#testing-on-click').click(function () {
        $("#popup4").removeClass("visible");
        $("#testing-on-click").removeClass("visible");
        $("#click-on-icons-direction").removeClass("hidden");
        });  
});
// Button to open #scenario1-choice-popup modal
$(document).ready(function () {
    $('#scenario1-click-for-answer').click(function () {
        $("#scenario1-choice-popup").toggleClass("visible");
        $("#scenario1-click-for-answer").toggleClass("hidden");
        });
});
// Button to close #scenario1-choice-popup modal
$(document).ready(function () {
    $('#close-scenario1-explanation').click(function () {
        $("#scenario1-choice-popup").toggleClass("visible");
        $("#scenario1-click-for-answer").toggleClass("hidden");
        });
});
//Code for choosing which tools to use for scenario1.
$(document).ready(function () {
    $('#condom2').click(function () {
        $("#condom-on-click-2").toggleClass("visible");
        });
});
$(document).ready(function () {
    $('#condom-on-click-2').click(function () {
        $("#condom-on-click-2").toggleClass("visible");
        });
});
$(document).ready(function () {
    $('#prep2').click(function () {
        $("#prep-on-click-2").toggleClass("visible");
        });
});
$(document).ready(function () {
    $('#prep-on-click-2').click(function () {
        $("#prep-on-click-2").toggleClass("visible");
        });
});
$(document).ready(function () {
    $('#abstinence2').click(function () {
        $("#abstinence-on-click-2").toggleClass("visible");
        });
});
$(document).ready(function () {
    $('#abstinence-on-click-2').click(function () {
        $("#abstinence-on-click-2").toggleClass("visible");
        });
});
$(document).ready(function () {
    $('#testing2').click(function () {
        $("#testing-on-click-2").toggleClass("visible");
        });
});
$(document).ready(function () {
    $('#testing-on-click-2').click(function () {
        $("#testing-on-click-2").toggleClass("visible");
        });
});