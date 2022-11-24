db.tweets.aggregate ( [ { $group: { _id: "$user.screen_name", tweets: { $sum:1 } } }, { $sort: { "tweets": -1 } } ] )
db.tweets.aggregate ( [ { $group: { _id: "$place.name", tweets: { $sum:1 } } }, { $sort: { "tweets": -1 } } ] )
db.tweets.aggregate ( [ { $group: { _id: "$in_reply_to_screen_name", replies: { $sum: 1 } } }, { $sort: { "replies": -1 } } ] )
db.tweets.aggregate ( [ { $group: { _id: "$user.screen_name", tags_used: { $sum: { $size: "$entities.hashtags.text" } } } }, { $sort: { "tags_used": -1 } } ] )