class DocumentsController < ApplicationController
  before_filter :authenticate_user!
  respond_to :html, :json

  def index
    @documents = current_user.accessible_docs
    respond_with(@documents.to_json(:include => :sharing_users))
  end

  def show
    @document = Document.find(params[:id])
    respond_to do |format|
      format.json { render :json => @document.to_json(:include => :sharing_users)}
    end

  end

  def update
    @user = current_user
    @document = Document.find(params[:id])
    @document.update_attributes!(params[:document])
    @document.last_editor = @user.email
    @document.save!
    respond_with(@document)
  end

  def create
    @document = current_user.created_documents.create!(params[:document])
    @document.last_editor = current_user.email
    @document.save!
    respond_with(@document)
  end

end
