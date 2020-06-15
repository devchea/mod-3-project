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

Fighter.create(first_name: 'Stipe', last_name: 'miocic', weight: 240, height: 77, champion_status: false)
Fighter.create(first_name: 'Daniel', last_name: 'Cormier', weight: 250, height: 72, champion_status: false)
Fighter.create(first_name: 'Francis', last_name: 'Ngannou',weight: 250, height: 76, champion_status: false)


Challenger.create(first_name: 'Stipe', last_name: 'miocic', weight: 240, height: 77, champion_status: false)
Challenger.create(first_name: 'Daniel', last_name: 'Cormier', weight: 250, height: 72, champion_status: false)
Challenger.create(first_name: 'Francis', last_name: 'Ngannou',weight: 250, height: 76, champion_status: false)

User.create(username: 'Yannick')
User.create(username: 'Richard')

Match.create(fighter_id: f1.id, challenger_id: c2.id, user_id: u1.id, venue: "T-Mobile Arena", comment: "Going to be a dope fight!")