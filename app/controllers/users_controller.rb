class UsersController < ApplicationController
  before_filter :authenticate_user!
  respond_to :html, :json

  def autocomplete_user_email
    users = User.select([:email]).where("email LIKE ?", "%#{params[:email]}%")
    result = users.map do |u|
      { value: u.email }
    end
    render json: result
  end

  def index
    @users = User.all
    respond_with(@users)
  end
end
