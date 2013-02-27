define(['underscore'], (_)->
	class ContactService
		constructor: ->
			@contactList = [
				{'id':'1', 'name':'�ϴ�', 'phone': '80000001', 'discription' : '�����ϴ�'}
				{'id':'2', 'name':'�϶�', 'phone': '80000002','discription' : '�����϶�'}
				{'id':'3', 'name':'����', 'phone': '80000003','discription' : '��������'}
				{'id':'4', 'name':'����', 'phone': '80000004','discription' : '��������'}
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