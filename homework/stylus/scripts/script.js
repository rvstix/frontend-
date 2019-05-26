// document.write("Hello Java Script!");
// document.getElementById('P1_2').innerHTML='GeGe';
// alert("Sebalsya");
// console.log("Hey");

// var a=1, b=2;
// alert(a+b);
// console.log(a*2**6);

// Типы данных ниже
// integer - все числа -1;-3;10;106579
// String - текст с двойной ковычкой
// character - с одиночной ковычко1 '' символы в них указываются
// Double/float -  числа с плавбщей зпятой (3,5 1,5 9,8)
// dictionary - библиотека работает "key" задается клюевое слово, "value" - значение

// var str1="Hello", str2="World";
// alert(str1+''+str2); //concatination - конкатинация/сложение
// var d1=3.4, d2=5.6;
// console.log(d1+d2);
// var c1='C', c2='a', c3='r';
// console.log(c1+c2+c3);
// var cars=["Volvlo","Audi","Camri"];
// cars.forEach(function(car) {
// 	console.log(car);
// });
// var person={firstname: "Artem", lastname: "Ne Artem", age:45};
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age)

// function arithmetic(a,b){
// 	if(a>b){
// 		return a+b;
// 	}
// 	else if(a<b){
// 		return b-a;
// 	}
// 	else{
// 		return a**b;
// 	}
// }
// console.log(arithmetic(4,3));
// console.log(arithmetic(6,9));
// console.log(arithmetic(2,6));



// Js objects - class понятие переменных где собраны кучи переменных

	var box={
 	color: "red",
 	material: "wood",
 	id: 639,
 	details:function(){
 		return "Box is "+this.color+" and made of "+this.material;
 	}
};
	console.log(box.details());


// JS еvents - событие выводит функцию введную в поле для заполнения имени и мэйла

	function showMessage(){
	alert("Hellow World!");
}
	function changeHTMLtext(){
	document.getElementById('changeTxt').innerHTML='LOL';
}
	function changeFieldText(event){
	var target=document.getElementById(event);
	console.log(target.value);
}



var int_Example= "100";
console.log(parseInt(int_Example)+40); 
// parseInt - переводит текст в цифры чтобы просуммировать, если убрать то будет результат 10040
var float_Example="10.33";
console.log(parseFloat(float_Example));
var fruits=["apple", "orange", "banana", "cherry"];
console.log(fruits.sort());
console.log(fruits.reverse());
var points=[1,30,100,66,72,54];
console.log(points.sort(function(a,b){return b-a}));
console.log(points.sort(function(a,b){return a-b}));
