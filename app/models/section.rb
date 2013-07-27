class Section < ActiveRecord::Base
  
  attr_accessible :page_id, :name, :position, :visible, :content, :content_type

  belongs_to :page
  has_many :section_edits
 
  
  CONTENT_TYPES = ['Text','HTML']
  
  validates_presence_of :name
    validates_length_of :name,:maximum => 255
    validates_inclusion_of :content_type, :in => CONTENT_TYPES, :message => "must be one of #{CONTENT_TYPES.join(', ')}"
  validates_presence_of :content
    
  has_many :editors, :through => :section_edits, :class_name => "AdminUser"
  
  scope :visible, where(:visible => true)
    scope :invisible, where(:visible => false)
    scope :sorted, order('sections.position ASC')
    
end
 