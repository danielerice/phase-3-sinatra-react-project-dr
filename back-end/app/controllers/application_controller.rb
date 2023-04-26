class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  #test
  get "/" do
    { message: "testing, testing, 123" }.to_json
  end

  #takes in the username from a controlled form and finds associated user if there is one, returns the user or nil if failed(for login)
  get "/users/:username" do
   user = User.find_by(username: params[:username])
   user.to_json
  end

  post "/foods" do 
    food = Food.create(
      name: params[:name],
      wine_id: params[:wine_id]
    )
    food.to_json
  end

  #takes in attribute hash as params and posts to users table, returns created users obj
  post "/users" do
    user = User.create(
      name: params[:name],
      username: params[:username],
      password: params[:password]
    )
    user.to_json
  end

  #takes in attribute hash as params and posts to wines table, returns created wine obj
  post "/wines" do
    wine = Wine.create(
      name: params[:name],
      rating: params[:rating],
      notes: params[:notes],
      user_id: params[:user_id]
    )
    wine.to_json
  end

  #takes the wine id and finds it, then destroys it. returns the wine obj that was deleted
  delete "/wines/:id" do
    wine = Wine.find_by(id: params[:id])
    wine.destroy
    wine.to_json
  end

  #takes an id and finds corresponding wine obj, then upadtes it in the table using passed attribute hash. can only change, name rating and notes
  patch "/wines/:id" do
    wine = Wine.find_by(id: params[:id])
    wine.update(
      name: params[:name],
      rating: params[:rating],
      notes: params[:notes]
    )
    wine.to_json
  end

  get "/wines/new" do
    wines_by_new = Wine.all.order("created_at DESC")
    wines_by_new.to_json
  end

  get "/wines" do
    wines = Wine.all 
    wines.to_json
  end

  get "/wines/old" do
    wines_by_old = Wine.all.order("created_at ASC")
    wines_by_old.to_json
  end

  get "/wines/low" do 
    wines_by_low = Wine.all.order("rating ASC")
    wines_by_low.to_json
  end

  get "/wines/high" do
    wines_by_high = Wine.all.order("rating DESC")
    wines_by_high.to_json
  end

  get "/wine/foods/:wine_id" do 
    wine = Food.where(wine_id: params[:wine_id])
    wine.to_json
  end

  get "/user/wines/:user_id" do
    users_wine = Wine.where(user_id: params[:user_id])
    users_wine.to_json
  end
end
