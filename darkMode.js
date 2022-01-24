let darkMode;

if(localStorage.getItem("darkMode")) {
    darkMode = localStorage.getItem("darkMode")
} else {
    darkMode = "light"
}

localStorage.setItem("darkMode", darkMode)

$(() => {
    if(localStorage.getItem("darkMode") == "dark") {
        $("#nav").addClass("darkMode")
        $("#section").addClass("darkMode2")
        $("#footer").addClass("darkMode2")
        $("#propiedades").addClass("darkMode")
        $("#divMostrarPropiedades").addClass("darkModeCard")
        $("#btnDark").hide()
        $("#btnLight").show()
    } else {
        $("#btnLight").hide()
    };

    $("#btnLight").click(() => {
        $("#btnDark").show()
        $("#btnLight").hide() 
        $("#nav").removeClass("darkMode")
        $("#section").removeClass("darkMode2")
        $("#footer").removeClass("darkMode2")
        $("#propiedades").removeClass("darkMode")
        localStorage.setItem("darkMode", "light")
    })

    $("#btnDark").click(() => {
        $("#btnDark").hide()
        $("#btnLight").show() 
        $("#nav").addClass("darkMode")
        $("#section").addClass("darkMode2")
        $("#footer").addClass("darkMode2")
        $("#propiedades").addClass("darkMode")
        $("#divMostrarPropiedades").addClass("darkModeCard")
        localStorage.setItem("darkMode", "dark")
    })
})