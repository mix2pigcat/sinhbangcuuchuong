let out;
out = "<table border='1' >"
for(let i=2; i<10; i++){
    out = out +"<tr>"
    for(let j=1; j<=10; j++){
        c=(i+ ' x ' + j + ' = ' +i*j);
        out = out +"<td>"+c+"</td>";

    }
    out = out +"</tr>"
}
out = out + "</table>";
document.write(out);