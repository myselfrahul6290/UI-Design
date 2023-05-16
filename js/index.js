

//slider

function slide(a,b,c,d){
	const slidesContainer = document.querySelector(a);
	const slide = document.querySelector(b);
	const prevButton = document.getElementById(c);
	const nextButton = document.getElementById(d);
	
	
	nextButton.addEventListener("click", () => {
	  const slideWidth = slide.clientWidth;
	  slidesContainer.scrollLeft += slideWidth;
	});
	prevButton.addEventListener("click", () => {
	  const slideWidth = slide.clientWidth;
	  slidesContainer.scrollLeft -= slideWidth;
	});
	}
	
	//flower slider
	slide(".container-card",".box1","btn1","btn2");