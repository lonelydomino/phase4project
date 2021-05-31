# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

luneya = User.create(username: "Luneya", email: "luneya@gmail.com")
milo = User.create(username: "Milo",email: "milo@gmail.com")

luna = Hero.create(name: "Luna", hp: 120, attack: 15, defense: 8, experience: 0, level: 1)
krau = Hero.create(name: "Krau", hp: 220, attack: 9, defense: 18, experience: 0, level: 1)
tenebria = Hero.create(name: "Tenebria", hp: 110, attack: 12, defense: 4, experience: 0, level: 1)
luneya.heros << luna
luneya.heros << luna
milo.heros << krau