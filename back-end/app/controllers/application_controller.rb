class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  
  get "/" do
    { message: "testing, testing, 123" }.to_json
  end

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

end
