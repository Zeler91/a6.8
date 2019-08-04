let progressWidth = 0;

function progressCalc(e) {
    let percent = e.target.value,
        splits = percent.split('%', 1);
    progressWidth += +splits[0];
    $(".progress .progress-bar").css("width", progressWidth + "%");
}

$("input[type=button]").click(progressCalc);