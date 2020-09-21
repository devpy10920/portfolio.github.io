/*$(document).ready(function(){
let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
	mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
	mobileNav.classList.remove('open');
});

});
*/

function myfun(){
	var showhide = document.getElementById('mobile-nav');
	if (showhide.style.display === "block") {
		showhide.style.display = "none";
	}else{
		showhide.style.display = "block";
	}
}