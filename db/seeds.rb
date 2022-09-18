# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

company1 = Company.create(name: "LS Cleaning")

user1 = User.create(name: 'admin', email: 'admin@admin.com', password: 'admin', password_confirmation: 'admin', is_admin: true, company_id: 1)
user2 = User.create(name: 'leo', email: 'leo@leo.com', password: 'leo2022', password_confirmation: 'leo2022', is_admin: false, company_id: 1)
