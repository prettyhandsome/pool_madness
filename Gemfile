source "https://rubygems.org"

ruby "2.3.1"

gem "actionpack-action_caching"
gem "active_attr_extended"
gem "binary_decision_tree"
gem "bitters", "~> 1.2"
gem "bourbon", "~> 4.2"
gem "cancancan"
gem "dalli"
gem "devise"
gem "devise_invitable"
gem "email_validator"
gem "espn_scraper", github: "haruska/espn-scraper"
gem "graphql"
gem "font-awesome-rails"
gem "haml"
gem "httparty"
gem "rails_jskit"
gem "jquery-rails"
gem "lodash-rails"
gem "neat"
gem "pg"
gem "rails", "~> 4.2"
gem "redis"
gem "refills"
gem "sass-rails"
gem "sidekiq"
gem "sinatra", require: true
gem "simple_form"
gem "stripe"
gem "uglifier"

group :staging, :development, :test do
  gem "database_cleaner"
  gem "factory_girl_rails"
  gem "faker"
end

group :development, :test do
  gem "awesome_print"
  gem "better_errors"
  gem "binding_of_caller"
  gem "byebug"
  gem "capybara"
  gem "capybara-screenshot"
  gem "dotenv-rails"
  gem "graphiql-rails"
  gem "letter_opener"
  gem "letter_opener_web"
  gem "magic_lamp"
  gem "pry"
  gem "pry-nav"
  gem "quiet_assets"
  gem "rails-erd"
  gem "rspec-rails"
  gem "rubocop"
  gem "selenium-webdriver"
  gem "spring"
end

group :production, :staging do
  gem "airbrake"
  gem "newrelic_rpm"
  gem "puma"
  gem "rails_12factor"
end

group :production do
  gem "hirefire-resource"
  gem "postmark-rails"
end

group :development do
  gem "bullet"
  gem "lol_dba"
  gem "web-console"
end

group :test do
  gem "fuubar"
  gem "shoulda-matchers"
  gem "simplecov", require: false
  gem "stripe-ruby-mock", "~> 2.3.0", require: "stripe_mock"
  gem "webmock"
end
