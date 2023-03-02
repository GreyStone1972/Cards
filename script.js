	let card = document.querySelectorAll('.inline-block'),
		block = document.querySelectorAll('.block'),
		hiddenBlock = document.querySelectorAll('.hidden-block'),
		content = document.querySelector('.content'),
		cross = document.querySelectorAll('.cross'),
		btn = document.querySelectorAll('.btn');
		
	content.addEventListener('click', function(event){
		let target = event.target;
		if (target){
			
				for (let i = 0; i < block.length; i++){
					for (let i = 0; i < card.length; i++){
						if (target == btn[i]){
							hiddenBlock[i].classList.remove('hidden-block');
							hiddenBlock[i].classList.add('showing-block');
						}
					}
				}
			
		} 
	});
	
	content.addEventListener('click', function(event){
		let target = event.target;
			if (target){
				for (let i = 0; i < block.length; i++){
					for (let i = 0; i < card.length; i++){
						if (target == cross[i]){
							hiddenBlock[i].classList.remove('showing-block');
							hiddenBlock[i].classList.add('hidden-block');
						}
					}
				}
			} 
	});
	
	
	/* document.addEventListener('click', (e) => {
		let withinBoundaries = e.composedPath().includes(block);
			if(! withinBoundaries){
				for (let i = 0; i < card.length; i++){
					hiddenBlock[i].classList.remove('showing-block');
					hiddenBlock[i].classList.add('hidden-block');
				}
			}
	}); */
	
	document.addEventListener('keydown', function(e){
		if(e.keyCode == 27){
			for (let i = 0; i < hiddenBlock.length; i++){
					hiddenBlock[i].classList.remove('showing-block');
					hiddenBlock[i].classList.add('hidden-block');
				}
			}
	});
	
	