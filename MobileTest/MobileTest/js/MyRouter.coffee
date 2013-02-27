define(['require','jquery', 'underscore', 'backbone',  'jqmobile'], (require, $, _, Backbone)->
	MyRouter = Backbone.Router.extend({
		routes: {
			'': 'index'
			'!/index': 'index'
			'!/contactIndex': 'contactIndex'
			'!/contactDetail/:id': 'contactDetail'
			'!/cameraIndex' : 'cameraIndex'
			'!/camera' : 'camera'
			'*actions': 'defaultAction'
		}
		firstPage:true
		defaultAction: (action)->
		
		getRouter: ->
			return {'router': @}
		index: ->
			self = @
			require(['view/home/HomeController'], (HomeController)->
				controller = new HomeController()
				controller.index(self)
				self.changePage(controller.el)
				
			)
		contactIndex: ->
			self = @
			require(['view/contact/ContactController'], (ContactController)->
				controller = new ContactController()
				controller.index(self)
				self.changePage(controller.el)
			)	
		contactDetail: (id)->
			self = @
			require(['view/contact/ContactController'], (ContactController)->
				controller = new ContactController()
				controller.detail(self, id)
				self.changePage(controller.el)
			)
		cameraIndex: ->
			self = @
			require(['view/camera/CameraController'], (CameraController)->
				controller = new CameraController()
				controller.index(self)
			)
		camera: ->
			self = @
			require(['view/camera/CameraController'], (CameraController)->
				controller = new CameraController()
				controller.camera(self)
				self.navigate("!/cameraIndex", true)			
			)
		changePage: (el) ->
			$(el).attr('data-role', 'page')
			$('body').append($(el))
			$.mobile.changePage($(el),{
				changeHash: false
				transition: 'none'
				reloadPage: false
			})
			
			
		
		initialize: ->
			console.log("setup router");			
	})
	MyRouter
)