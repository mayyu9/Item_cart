require 'test_helper'

class RestControllerTest < ActionDispatch::IntegrationTest
  test "should get method" do
    get rest_method_url
    assert_response :success
  end

end
