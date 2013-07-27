class ApplicationController < ActionController::Base
  protect_from_forgery
  
  
  protected
  
     def confirm_logged_in
       unless session[:id]
                 flash[:notice] = "Please Log in Karlo"
                   redirect_to(:controller =>"access", :action => 'login')
                 return false
       else
         return true
       end
     end
   
     
end
