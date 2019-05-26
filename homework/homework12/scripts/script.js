// Задание а

document.write("Hello!");
document.write("<p>Dear guest this is the lesson, you will never forget<p>");


// Задание b

function arithmetic(a,b){
	if (a>b){
		return a+b+(a*b);
	}
	else if (a<b){
		return b-a+(b*a);
	}
	else if (a==b){
		return b+a+(b/a);
	}
	else{
		return b**a;
	}
}
console.log(arithmetic(5,9));
console.log(arithmetic(10,8));
console.log(arithmetic(5,5));


//  Задание с

var str1="The first rule ", str2="of JS Club: ", str3="you don't talk ", str4="about JS Club";
alert(str1+''+str2+''+str3+''+str4);
var str5="The second rule of JS Club is: ", str6="you DO NOT talk about JS Club!";
console.log(str5+''+str6);
var c="Third rule of JS Club: ", d="if someone yells 'STOP!', ", x="goes limp, or taps out, the code is over.";
console.log(c+''+d+''+x);
var q="Fourth rule: ", w="only two guys to a code."
console.log(q+''+w);