var comments=[
    {"comment":"张三","content":"沙发"},
    {"comment":"李四","content":"板凳"},
    {"comment":"王五","content":"地板"}
]
var texthtml="";
comments.forEach(element => {
    texthtml+="<div class='comment'><h6>"+element.comment+":</h6><p class='param'>"+element.content+"</p></div>";
});
$.each(comments, function (indexInArray, valueOfElement) { 
    texthtml+="<div class='comment'><h6>"+valueOfElement['comment']+":</h6><p class='param'>"+valueOfElement['content']+"</p></div>";
});
$("#resTextfile").html(texthtml);