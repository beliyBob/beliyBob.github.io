
	this.onmessage = function(e) {
		console.log(1);
	}	

this.addEventListener('install', function(event){
});//sfds/
this.addEventListener('activate', function(event){	
	var data;
	fetch('../../js/pushApi/data.js').then(function(response){
		response.text().then(function(text){
			data = JSON.parse(text);
			//new Notification('test-title',{body:'test-message'});	
			spam();
		
		});
	});	
});
this.addEventListener('sync', function(event){	
	this.registration.showNotification('sync-test',{body:'test-message'});		
});
/
function spam(){
	var i = 0;
	setInterval(function(){
	//	this.registration.showNotification('test-title ' + (++i),{body:'test-message'});		
	},10000);
}



	/*caches.open('dataBridge').then(functon(cache){
		cache.delete('data.js').then(function(){
			cache.add('data.js');
		});
	})*/
