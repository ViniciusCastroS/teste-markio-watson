function myFunction() {
    var texto = document.getElementById("texto").value;
    console.log(texto);

    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var children = ul.children.length + 1
    li.setAttribute("id", "element" + children)
    li.appendChild(document.createTextNode(texto));
    ul.appendChild(li)
}