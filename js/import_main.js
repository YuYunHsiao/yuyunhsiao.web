$.get("main_welcome_theme1.html",function(data){
    $("#main").html(data);
});
$('#nav_about_me').click(function(){
    let v = $('#nav_about_me').val();
    if(v=="about_me"){
        $.get("main_welcome_theme1.html",function(data){
            $("#main").html(data);
        });
    }
})
$('#btn_resume').click(function(){
    let v = $('#btn_resume').val();
    if(v=="RESUME"){
        $.get("main_resume_theme1.html",function(data){
            $("#main").html(data);
        });
    }
})
$('#btn_projects').click(function(){
    let v = $('#btn_projects').val();
    if(v=="PROJECTS"){
        $.get("main_projects_theme1.html",function(data){
            $("#main").html(data);
        });
    }
})