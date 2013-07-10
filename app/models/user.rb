class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body
  has_many :created_documents, class_name: "Document", foreign_key: :creator_id
  has_many :document_shares
  has_many :documents_shared_with, through: :document_shares, source: :document

  def accessible_docs
    self.created_documents + self.documents_shared_with
  end
end
