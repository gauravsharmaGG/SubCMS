class PagesController < ApplicationController

  before_filter :confirm_logged_in 
  before_filter :find_subject
  
  layout 'admin'

  def index
    list
    render('list')
  end
  
  def list
    @pages = Page.order("pages.position ASC").where(:subject_id => @subject.id)
  end
  
  def show
    @page = Page.find(params[:id])
  end
  
  def new
    @page = Page.new(:subject_id => @subject.id)
    @page_count = Page.count + 1
    @subjects = Subject.order('position ASC')
  end
  
  def create
    # Instantiate a new object using form parameters
    @page = Page.new(params[:page])
    # Save the object
    if @page.save
      # If save succeeds, redirect to the list action
      flash[:notice] = "Page created."
      redirect_to(:action => 'list', :subject_id => @subject.id)
    else
      # If save fails, redisplay the form so user can fix problems
      @page_count = Page.count + 1
      render('new')
    end
  end
  
  def edit
    @page = Page.find(params[:id])
    @page_count = Page.count
  end
  
  def update
    # Find object using form parameters
    @page = Page.find(params[:id])
    # Update the object
    if @page.update_attributes(params[:page])
      # If update succeeds, redirect to the list action
      flash[:notice] = "Page updated."
      redirect_to(:action => 'show', :id => @page.id, :subject_id => @subject.id)
    else
      # If save fails, redisplay the form so user can fix problems
      @page_count = Page.count
      render('edit')
    end
  end
  
  def delete
    @page = Page.find(params[:id])
  end
  
  def destroy
    Page.find(params[:id]).destroy
    flash[:notice] = "Page destroyed."
    redirect_to(:action => 'list', :subject_id => @subject.id)
  end
    
  private
  def find_subject
    if params[:subject_id]
         @subject = Subject.find_by_id(params[:subject_id])
    end
         end
  end
