class ResumeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :updated_at

  def updated_at
    object[:updated_at].strftime("%m/%d/%Y %I:%M%p")
  end
end
