class SectionsController < ApplicationController

  before_filter :confirm_logged_in
  before_filter :find_page
  before_filter :find_subject
  layout 'admin'
  
  def index
    list
    render('list')
  end
  
  def list
    @sections = Section.order("sections.position ASC").where(:page_id => @page.id)
  end
  
  def show
    @section = Section.find(params[:id])
  end
  
  def new
    @section = Section.new
    @section_count = Section.count + 1
    @pages = Page.order('position ASC')
  end
  
  def create
    @section = Section.new(params[:section])
    if @section.save
      flash[:notice] = "Section created."
      redirect_to(:action => 'list', :page_id => @page.id)
    else
      @pages = Page.order('position ASC')
      @section_count = Section.count + 1
      render('new')
    end
  end
  
  def edit
    @section = Section.find(params[:id])
    @section_count = Section.count
    @pages = Page.order('position ASC')
  end
  
  def update
    @section = Section.find(params[:id])
    if @section.update_attributes(params[:section])
      flash[:notice] = "Section updated."
      redirect_to(:action => 'show', :page_id => @page.id, :id => @section.id)
    else
      @pages = Page.order('position ASC')
      @section_count = Section.count
      render('edit')
    end
  end
  
  def delete
    @section = Section.find(params[:id])
  end
  
  def destroy
    Section.find(params[:id]).destroy
    flash[:notice] = "Section destroyed."
    redirect_to(:action => 'list', :page_id => @page.id)
  end
  
    
  
  private
  def find_subject
    @subject = Page.find_by_id(params[:subject_id])
  end
        
    def find_page
      if params[:page_id]
           @page = Page.find_by_id(params[:page_id])
      end
           end
    
  end