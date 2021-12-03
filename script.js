let ul = document.querySelector(".nameul");
let li = document.querySelectorAll("li");
let temp = document.querySelector(".temp");
let name = document.querySelector(".name");
let cityDate = document.querySelector(".date");
let gust = document.querySelector(".gust");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let precip = document.querySelector(".precip");
let bodyContent = document.querySelector(".body-content");

ul.addEventListener("click", function(event){
	let target = event.target;
	let value = target.getAttribute('data-value');
	name.innerHTML = value;
	let weatherapi = `http://api.weatherapi.com/v1/current.json?key=a4d4b786e5244b80bc7184032212511&q=${value}&aqi=no`
	fetch(weatherapi)
		.then(function(resp){return resp.json()})
		.then(function(date){
			temp.innerHTML = Math.round(date.current.temp_c);
			cityDate.innerHTML = date.current.last_updated;
			gust.innerHTML = date.current.gust_mph + "mph";
			humidity.innerHTML = date.current.humidity;
			pressure.innerHTML = date.current.pressure_mb;
			precip.innerHTML = date.current.precip_mm;
			if(date.current.temp_c < 1 && date.current.temp_c > -15){
				bodyContent.style.backgroundImage = "url(https://oir.mobi/uploads/posts/2020-01/1578320552_1-1.jpg)"
			}else if(date.current.temp_c >= 1 && date.current.temp_c < 20){
				bodyContent.style.backgroundImage = "url(https://cdnuploads.aa.com.tr/uploads/Contents/2020/07/09/thumbs_b_c_1c036a0ec55b0e82937b3d51d1d4c0b0.jpg?v=115439)"
			}else if(date.current.temp_c >= 20 && date.current.temp_c < 50){
				bodyContent.style.backgroundImage = "url(https://w-dog.ru/wallpapers/11/10/436445960458239.jpg)"
			}else if(date.current.temp_c < -15 && date.current.temp_c > -50){
				bodyContent.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaf3YwRIYTqsMNg30jhOvyyka71BcDpxIAw&usqp=CAU)"
			}
		})
});