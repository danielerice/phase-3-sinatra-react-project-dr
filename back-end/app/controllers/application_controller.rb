class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  #test
  get "/" do
    { message: "testing, testing, 123" }.to_json
  end

  #takes in the username from a controlled form and finds associated user if there is one, returns the user or nil if failed
  get "/users/:username" do
   user = User.find_by(username: params[:username])
   user.to_json
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

  #takes in attribute hash as params and posts to beers table, returns created beer obj
  post "/beers" do
    beer = Beer.create(
      name: params[:name],
      rating: params[:rating],
      notes: params[:notes],
      user_id: params[:user_id]
    )
    beer.to_json
  end
end
