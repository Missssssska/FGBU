let select = document.getElementById("form_vuz");
let options = ["Московский государственный университет имени М. В. Ломоносова (МГУ имени М. В. Ломоносова)", "Национальный исследовательский ядерный университет «МИФИ»", "Московский физико-технический институт (МФТИ)", "МГТУ им. Н. Э. Баумана", "Национальный исследовательский технологический университет «МИСиС»", "Высшая школа экономики (НИУ ВШЭ)", "Московский государственный институт международных отношений (университет) МИД Российской Федерации (МГИМО)"];

for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    select.appendChild(element);
}

$(document).ready(function () {
    var today = new Date().toISOString().split('T')[0];
    $("#form_dat").attr('max', today);
});
