# frozen_string_literal: true

class TeamsController < ApplicationController
  def index
    render json: Team.all.pluck(:coverage).flatten
  end
end
