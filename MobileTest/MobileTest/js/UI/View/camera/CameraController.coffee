define(['jquery', 'underscore', 'backbone'], ($, _, Backbone)->
	class CameraController extends Backbone.View
		el: '#myTest'
		index: (router)->
			self = @
			require(['text!view/camera/index.html'], (indexHtml) ->
				self.template = _.template(indexHtml)
				$(self.el).html(self.template()).trigger('create')
			)
		camera: (router)->
			onSuccess = (imageUrl) ->
				alert(imageUrl)
			onFail = (message)->
				alert(message)
			navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI })

		
	CameraController
)