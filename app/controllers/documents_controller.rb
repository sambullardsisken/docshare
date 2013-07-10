class DocumentsController < ApplicationController
  before_filter :authenticate_user!
  respond_to :html, :json

  def index
    @documents = current_user.accessible_docs
    respond_with(@documents)
  end

  def show
    @document = Document.find(params[:id])
    respond_with(@document)
  end

  def update
    @user = current_user
    @document = Document.find(params[:id])
    @document.update_attributes!(params[:document])
    respond_with(@document)
  end

  def create
    @document = current_user.created_documents.create!(params[:document])
    respond_with(@document)
  end

end
