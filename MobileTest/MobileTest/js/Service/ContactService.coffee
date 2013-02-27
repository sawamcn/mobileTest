define(['underscore'], (_)->
	class ContactService
		constructor: ->
			@contactList = [
				{'id':'1', 'name':'老大', 'phone': '80000001', 'discription' : '我是老大'}
				{'id':'2', 'name':'老二', 'phone': '80000002','discription' : '我是老二'}
				{'id':'3', 'name':'老三', 'phone': '80000003','discription' : '我是老三'}
				{'id':'4', 'name':'老四', 'phone': '80000004','discription' : '我是老四'}
			]
		getAllUser: ->
			return @contactList
		getUserById: (id)->
			for user in @contactList
				if user.id == id
					return user
			return null
	ContactService
)