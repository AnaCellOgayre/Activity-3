
var range = prompt("Enter fibonacci series range: ", " "); 
var num1 = 0;
var num2 = 1;

document.write("Result : ");
document.write(" ", num1, ", ");
document.write(" ", num2, " ");

var i,fnum;
for(i=2; i<range; i++)
{
fnum=num1+num2;
document.write(", ",fnum," ");
num1=num2;
num2=fnum;
}