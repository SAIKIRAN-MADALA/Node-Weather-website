console.log('Client side javascript file is loaded!')



const weatherform= document.querySelector('form')
const search=document.querySelector('input')
const location_data=document.querySelector('#Locationdata')
const Weather_Data=document.querySelector('#Weatherdata')
const location_time = document.querySelector('#Location_time')

weatherform.addEventListener('submit',(e)=>{
	e.preventDefault()
	const location=search.value

	location_data.textContent = "Your request is being processed please wait ........................."
	Weather_Data.textContent=""

	fetch('/weather?address='+location).then((response)=>{
	response.json().then((data)=>{
		if (data.error){
			location_data.textContent="Apologies we are unable to find the requested location " + data.error
		}
		else{
			location_data.textContent= data.Location;
			Weather_Data.textContent=data.forecast;
			location_time.textContent = data.local_time;
		}
	})
})
})
