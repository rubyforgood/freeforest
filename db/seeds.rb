# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Team.create(
  name: "(CA) Marin County, CA",
  coverage: [
    {"type":"Feature","id":"6041","properties":{"type": "Chapter", "name": "CA - Marin County", "learnMoreLink": "https://www.freeforestschool.org/free-forest-school-marin-county-california", "fbLink": "https://www.facebook.com/groups/FreeForestSchoolMarinCountyCA"}, "geometry":{"type":"Polygon","coordinates":[[[-122.844393,38.27639],[-122.488392,38.112082],[-122.504823,37.821804],[-123.014178,38.002543],[-123.003224,38.298298],[-122.844393,38.27639]]]} }
  ]
)

Team.create(
  name: "(CA) SF East Bay, CA",
  coverage: [
    {"type":"Feature","id":"6001","properties":{"type": "Chapter", "name": "CA - SF East Bay", "learnMoreLink": "https://www.freeforestschool.org/free-forest-school-sf-east-bay-california", "fbLink": "https://www.facebook.com/groups/FreeForestSchoolSFEastBayCA" },"geometry":{"type":"Polygon","coordinates":[[[-122.269314,37.903958],[-121.557312,37.821804],[-121.469681,37.482234],[-121.475158,37.482234],[-121.853067,37.482234],[-122.083098,37.476757],[-122.11596,37.504141],[-122.31313,37.898481],[-122.269314,37.903958]]]}},
    {"type":"Feature","id":"6013","properties":{"type": "Chapter", "name": "CA - SF East Bay", "learnMoreLink": "https://www.freeforestschool.org/free-forest-school-sf-east-bay-california", "fbLink": "https://www.facebook.com/groups/FreeForestSchoolSFEastBayCA" },"geometry":{"type":"Polygon","coordinates":[[[-121.628512,38.101128],[-121.57922,38.095651],[-121.557312,37.821804],[-122.269314,37.903958],[-122.31313,37.898481],[-122.269314,38.062789],[-121.864021,38.068266],[-121.628512,38.101128]]]}}
  ]
)

Team.create(
  name: "(CA) San Francisco Peninsula / South Bay, CA",
  coverage: [
    {"type":"Feature","id":"6075","properties":{"type": "Chapter", "name": "CA - San Francisco Peninsula / South Bay", "learnMoreLink": "https://www.freeforestschool.org/free-forest-school-san-francisco-south-bay-california", "fbLink": "https://www.facebook.com/groups/FreeForestSchoolSanFranSouthBayCA"},"geometry":{"type":"Polygon","coordinates":[[[-122.428146,37.706788],[-122.504823,37.706788],[-122.389807,37.706788],[-122.428146,37.706788]]]}},
    {"type":"Feature","id":"6081","properties":{"type": "Chapter", "name": "CA - San Francisco Peninsula / South Bay", "learnMoreLink": "https://www.freeforestschool.org/free-forest-school-san-francisco-south-bay-california", "fbLink": "https://www.facebook.com/groups/FreeForestSchoolSanFranSouthBayCA"},"geometry":{"type":"Polygon","coordinates":[[[-122.428146,37.706788],[-122.389807,37.706788],[-122.11596,37.504141],[-122.083098,37.476757],[-122.154299,37.285064],[-122.291222,37.109802],[-122.504823,37.706788],[-122.428146,37.706788]]]}},
    {"type":"Feature","id":"6085","properties":{"type": "Chapter", "name": "CA - San Francisco Peninsula / South Bay", "learnMoreLink": "https://www.freeforestschool.org/free-forest-school-san-francisco-south-bay-california", "fbLink": "https://www.facebook.com/groups/FreeForestSchoolSanFranSouthBayCA"},"geometry":{"type":"Polygon","coordinates":[[[-121.853067,37.482234],[-121.475158,37.482234],[-121.228696,37.137186],[-121.217742,36.961924],[-121.447773,36.989309],[-121.57922,36.901678],[-122.154299,37.285064],[-122.083098,37.476757],[-121.853067,37.482234]]]}},
  ]
)
