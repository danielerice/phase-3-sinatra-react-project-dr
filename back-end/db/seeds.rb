puts "🌱 Seeding spices..."
Wine.create(
    name: "Big Red",
    rating: 10,
    notes: "super great wow!"
)
Food.create(
    name: "Big Steak",
    wine_id: 1
)
puts "✅ Done seeding!"
