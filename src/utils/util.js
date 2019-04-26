export default class util{
	static loginStatusValidate(){
		var that = this;
	        $.ajax({
	            url: this.$host+'sessionValidate',
	            type: 'get',
	            success: function (data) {
	            	console.log(data);
	            	if(data=="true"){
	            		return true;
	            	}else{
	            		return false;
	            	}
	            },
	            error: function(xhr, errorType, error) {
	                alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
	            }
	        });
	  }
}
