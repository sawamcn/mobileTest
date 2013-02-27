define(['jquery', 'underscore', 'backbone', 'service/ContactService'], ($, _, Backbone, ContactService)->
	class ContactController extends Backbone.View
		contactService: new ContactService()
		el: '#myTest'
		index: (router)->
			self = @
			require(['text!view/contact/index.html'], (indexHtml) ->
				self.template = _.template(indexHtml)
				$(self.el).html(self.template({'data': self.contactService.getAllUser()})).trigger('create')
			)
		detail: (router, id)->
			self = @
			require(['text!view/contact/detail.html'], (detailHtml) ->
				self.template = _.template(detailHtml)
				$(self.el).html(self.template(self.contactService.getUserById(id))).trigger('create')
			)
		add: (router)->
			@contactService.add({id:0, name:'', age:0})
			router.navigate("!/user/index", true)
		delete: (router, userId)->
			@contactService.remove(userId)
			router.navigate("!/user/index", true)
	ContactController
)