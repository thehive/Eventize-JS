/*
	Eventize
	Description: A jQuery-based plugin for easily tracking events via Google Analytics
	Author: www.iamlesher.com
*/	

(function( $ ) {

	$.fn.eventize = function( options ) { 
		
		$(this).find(".track-hover").mouseover(function() {
			eventize($(this));
		});	
		
		$(this).find(".track-click").click(function() {
			eventize($(this));
		});	
		
		var eventize = function(obj) { 
			var event = { 
				action: $(obj).attr("data-action"),
				category: $(obj).attr("data-category"),
				label: $(obj).attr("data-label"),
				url: $(obj).attr("data-url")
			},
			
			settings = $.extend({ 
				debug: false
			}, options);

			if ( settings.debug ) { 
				console.log("Action: " + event.action + "\nCategory: " + event.category + "\nLabel: " + event.label + "\nData that will be packaged up as:");
				console.log(['_trackEvent', event.category, event.action, event.label]);			
				if(event.url !== "" && event.url !== undefined) { 
					console.log("The user will be redirected to: " + event.url);
				} else { 
					console.log("The user will not be redirected");
				}
			} else { 
				_gaq.push(['_trackEvent', event.category, event.action, event.label]);
				if(event.url !== "" && event.url !== undefined) { 
					window.open(event.url,"_blank");
				}
			}		
		};

	};

}(jQuery));