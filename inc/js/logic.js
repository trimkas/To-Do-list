

	function addTask(){

			//to avoid empty todo's
			if(task != ""){

				//a variable to get what's being inputted 
				var task = $('#inputtask').val();

				//add an li element with checkbox to the list, with the task from input as text
				$('#tabela').append('<li><input type="checkbox">' + task + '</li>');
				
				// declare this, so it only strikes the unique li, not all of them
				$('input:checkbox').click(function(){
					var $this = $(this);
					if (this.checked){
						$this.parent().addClass('done');
					}else{
						$this.parent().removeClass('done');
					}

				});

			}

		
			//clears the input
			$('#inputtask').val('');
		}

