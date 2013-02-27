define(['jquery', 'underscore', 'backbone'], ($, _, Backbone)->
	class HomeController extends Backbone.View
		el: $('#myTest')
		index: (router)->
			self = @
			require(['text!view/home/index.html'], (indexHtml) ->
				self.template = _.template(indexHtml)
				$(self.el).html(self.template()).trigger('create')
			)
	HomeController
)