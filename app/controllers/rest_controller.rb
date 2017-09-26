class RestController < ApplicationController

require 'json'
require 'net/http'

  def method
	urls = 'http://10.182.63.120:8080/TN/webapi/DB'
	uri = URI(urls)
	#response = Net::HTTP.get(uri)
	response = Net::HTTP.get_response(uri)
	puts response
	#@result = response.to_s #JSON.parse(response)
	@result = JSON.parse(response.body)
	#@response
  end
end
