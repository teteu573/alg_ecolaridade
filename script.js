let Serie = parseInt(prompt("Insira o numero de sua Serie"))
if(Serie >=1 && Serie <= 5) {
    alert("Ensino fundamental");
} else if (Serie >=6 && Serie <=9) {
    alert("Ensino Fundamental II");
} else if (Serie >=10 && Serie <=12) {
    alert("Ensino Medio");
}else if (Serie > 12) {
    alert("Educação superior");
}else  {
    alert("Entrada Invalida");
} 
