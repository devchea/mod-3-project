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
Challenger.destroy_all

f1 = Fighter.create(first_name: 'Stipe', last_name: 'Miocic', weight: 240, height: 77, champion_status: true)
f2 = Fighter.create(first_name: 'Daniel', last_name: 'Cormier', weight: 250, height: 72, champion_status: false)
f3 = Fighter.create(first_name: 'Curtis', last_name: 'Blaydes',weight: 250, height: 76, champion_status: false)
f4 = Fighter.create(first_name: 'Derrick', last_name: 'Lewis',weight: 250, height: 76, champion_status: false)
f5 = Fighter.create(first_name: 'Jairzinho', last_name: 'Rozenstruik',weight: 250, height: 76, champion_status: false)
f6 = Fighter.create(first_name: 'Junior', last_name: 'Dos Santos',weight: 250, height: 76, champion_status: false)
f7 = Fighter.create(first_name: 'Alexander', last_name: 'Volkov',weight: 250, height: 76, champion_status: false)



c1 = Challenger.create(first_name: 'Stipe', last_name: 'Miocic', weight: 240, height: 77, champion_status: true)
c2 = Challenger.create(first_name: 'Daniel', last_name: 'Cormier', weight: 250, height: 72, champion_status: false)
c3 = Challenger.create(first_name: 'Francis', last_name: 'Ngannou',weight: 250, height: 76, champion_status: false)
c4 = Challenger.create(first_name: 'Derrick', last_name: 'Lewis',weight: 250, height: 76, champion_status: false)
c5 = Challenger.create(first_name: 'Jairzinho', last_name: 'Rozenstruik',weight: 250, height: 76, champion_status: false)
c6 = Challenger.create(first_name: 'Junior', last_name: 'Dos Santos',weight: 250, height: 76, champion_status: false)
c7 = Challenger.create(first_name: 'Alexander', last_name: 'Volkov',weight: 250, height: 76, champion_status: false)

u1 = User.create(username: 'Yannick')
u2 = User.create(username: 'Richard')

Match.create(fighter_id: f1.id, challenger_id: c2.id, user_id: u1.id, venue: "T-Mobile Arena", comment: "Going to be a dope fight!")