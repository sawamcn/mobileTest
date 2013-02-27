require.config({
	paths: {
		jquery: 'lib/jquery/jquery_1.7_min'
		jqmobile: 'lib/jquery.mobile/jquery.mobile-1.3.0.min'
		jqconfig: 'plugin/jqm.config'
		underscore: 'lib/underscore/underscore'
		backbone: 'lib/backbone/backbone'
		view: 'UI/View'
		service: 'Service'
		viewModel: 'UI/ViewModel'
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