# frozen_string_literal: true

class FacebookGraph
  include HTTParty
  base_uri 'https://graph.facebook.com/v6.0/'

  def initialize
    @access_token = ENV['FACEBOOK_API_TOKEN']
  end

  def group(id)
    self.class.get("/#{id}", format: :plain, query: { access_token: @access_token, fields: 'id,cover,icon,name,privacy,permissions,events{id,cover,place,name,event_times}' })
  end
end
