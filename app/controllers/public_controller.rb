class PublicController < ApplicationController
  
  layout 'public'
  before_filter :navigation
  def index
    # main page
  end

  def show
     @page = Page.where(:permalink => params[:id], :visible => true).first
       redirect_to(:action => 'index') unless @page
  end
  
  
  private
  
  def navigation
    @subjects = Subject.visible.sorted
  end
end


