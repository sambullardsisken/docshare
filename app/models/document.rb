class Document < ActiveRecord::Base
  attr_accessible :body, :creator_id, :title

  belongs_to :creator, class_name: "User"
  has_many :document_shares
  has_many :sharing_users, through: :document_shares, source: :user
end
