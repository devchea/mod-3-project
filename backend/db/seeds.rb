# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Fighter.destroy_all
User.destroy_all
Match.destroy_all

f1 = Fighter.create(first_name: 'Daniel', last_name: 'Cormier', weight: 250, height: 72, champion_status: false)
# f2 = Fighter.create(first_name: 'Francis', last_name: 'Ngannou',weight: 250, height: 76, champion_status: false)

u1 = User.create(username: 'Yannick')
# u2 = User.create(username: 'Richard')

m1 = Match.create(fighter_id: f1.id, user_id: u1.id, venue: "T-Mobile Arena", comment: "Going to be a dope fight!")
# m1 = Match.create(fighter_id_one: f1.id, fighter_id_two: f2.id, user_id: u1.id, venue: "T-Mobile Arena", comment: "Going to be a dope fight!")