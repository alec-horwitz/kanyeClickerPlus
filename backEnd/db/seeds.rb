# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

i = 0
while i < 10
  i += 1
  u = User.create(name:"#{i}", password:"#{i}")
  a = Asset.create(user_id:i, yeezy:i, grammy:i, persianRug:i)
  s = Score.create(user_id:i, value:i)
end
