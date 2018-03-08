require 'rails/application_controller'


class StaticController < ApplicationController
 layout false
  def index
    render files: Rails.root.join('public', 'index.html') 

  end
end
