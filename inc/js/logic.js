	$( document ).ready(function() {
		//maps enter when document is ready   		
		mapEnter();

	});
	

	//listens for keypress nr 13, which is ascii for enter
	function mapEnter(){
		$("#inputtask").on("keypress", function (e){
			if(e.which === 13) {
				addTask();
			}
		}) 

	}

	function addTask(){

		//a variable to get what's being inputted 
		var task = $('#inputtask').val();

			//to avoid empty todo's
			if(task != ""){

				//add an li element with checkbox to the list, with the task from input as text
				$('#tabela').append('<li class = "item"><input type="checkbox">' + task + '</li>');
				
				// declare this, so it only strikes the unique li, not all of them
				$('input:checkbox').click(function(){
					var $this = $(this);
					if (this.checked){
						$this.parent().removeClass();
						$this.parent().addClass('done');
					}else{
						$this.parent().removeClass('done');
						$this.parent().addClass('item')
					}
				});

			}

			//clears the input
			$('#inputtask').val('');
		}



		function filterTodo(){

			$("li").hide();
			$("li.item").show();
		}

		function filterDone(){

			$("li").hide();
			$("li.done").show();
		}

		
		function filterAll(){
			$("li").show();
		}

