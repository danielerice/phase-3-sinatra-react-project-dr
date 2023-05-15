class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  #takes in attribute hash as params and posts to foods table, returns created food obj
  post "/foods" do 
    wine = Wine.find(params[:wine_id])
    food = wine.foods.create(
      name: params[:name]
    )
    food.to_json
  end

  #takes in attribute hash as params and posts to wines table, returns created wine obj
  post "/wines" do
    wine = Wine.create(
      name: params[:name],
      rating: params[:rating],
      notes: params[:notes]
    )
    wine.to_json(include: :foods)
  end

  #takes the wine id and finds it, then destroys it. returns the wine obj that was deleted
  delete "/wines/:id" do
    wine = Wine.find_by(id: params[:id])
    Wine.destroy(params[:id])
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
    wine.to_json(include: :foods)
  end

  #gets all wine obj in the database and icludes foods
  get "/wines" do
    wines = Wine.all
    wines.to_json(include: :foods)
  end
end
