//building an obj
function helperItem (object) {
    // building the elements
    date = object.getFormattedDate(); 
    var li = $("<li>", {"class" : "task", 'data-id': object.id}); 
    var id = $("<span>").attr("class", "id").text(object.id + ' ');
    var due = $("<span>").attr("class", "due").text(date + ' ');
    var text = $("<p>").attr("class", "text").text(object.text);
    var button1 = $("<button>").attr("type", "button").attr("class", "markDone").text("\u2714");
    var button2 = $("<button>").attr("type", "button").attr("class", "delete").text("\u2716");
    // building the tree
    $(li)
        .append(id)
        .append(due)
        .append(text)
        .append(button1)
        .append(button2)
    // returning the tree
    return li;
 }
