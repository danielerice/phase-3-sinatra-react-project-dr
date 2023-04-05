puts "🌱 Seeding spices..."

User.create({
    name: "Gregathy",
    password: "ILoveWine!",
    username: "Wine-0-1988"
})
Wine.create(
    name: "Big Red",
    rating: 10,
    notes: "super great wow!",
    user_id: 1
)
puts "✅ Done seeding!"
