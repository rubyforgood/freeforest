# frozen_string_literal: true

Rails.application.routes.draw do
  get '/', to: 'home#index'
end
