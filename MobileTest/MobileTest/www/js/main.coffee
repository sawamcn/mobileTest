require.config({
	paths: {
		jquery: '/www/js/lib/jquery/jquery_1.7_min'
		jqmobile: '/www/js/lib/jquery.mobile/jquery.mobile-1.3.0.min'
		jqconfig: '/www/js/plugin/jqm.config'
		underscore: '/www/js/lib/underscore/underscore'
		backbone: '/www/js/lib/backbone/backbone'
		view: '/www/js/UI/View'
		service: '/www/js/Service'
		viewModel: '/www/js/UI/ViewModel'
	}
	shim: {
		underscore: {
			exports: '_'
		}
		backbone: {
			deps: ["underscore", "jquery"]
			exports: "Backbone"
		}
	}
})

require(['Application'], (Application)->
	app = new Application()
	app.initialize()
)