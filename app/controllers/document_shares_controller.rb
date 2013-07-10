class DocumentSharesController < ApplicationController
  respond_to :html, :json

  def create
    @share = DocumentShare.create!(params[:document_share])
    respond_with(@share)
  end

end
