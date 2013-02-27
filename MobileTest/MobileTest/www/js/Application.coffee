define(['jquery','underscore', 'backbone', 'MyRouter', 'jqconfig'], ($, _, Backbone, MyRouter) ->
	class Application
		initialize: ->
			router = new MyRouter()
			Backbone.history.start()
	Application
)