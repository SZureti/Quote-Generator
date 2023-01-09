document.ready(function() {
    loadNewQuote();
    
    $('button').click(function(){
      loadNewQuote();
    });
  });
  
  var loadNewQuote = function() {
    var newQuote = quoteMachine.getQuote(quotes);
    $('blockquote').text(newQuote[1]);  // Quote
    $('.quote p').text("-" + newQuote[0]);  // Author
    $('footer #current').text(newQuote[2]); // Index
    $('footer #total').text(newQuote[3]) // Total
  };
  
  //QUOTE BANK
  var quotes = [
    {"OSHO": "To be creative means to be in love with life. You can be creative only if you love life enough that you want to enhance its beauty, you want to bring a little more music to it, a little more poetry to it, a little more dance to it."},
    {"OSHO": "Be — don't try to become."},
    {"OSHO": "Life is what happens to Friendship is the purest love. It is the highest form of Love where nothing is asked for, no condition, where one simply enjoys giving."},
    {"OSHO": "Life begins where fear ends."},
    {"OSHO": "Drop the idea of becoming someone, because you are already a masterpiece. You cannot be improved. You have only to come to it, to know it, to realize it."},
    {"OSHO": "Each person comes into this world with a specific destiny--he has something to fulfill, some message has to be delivered, some work has to be completed. You are not here accidentally--you are here meaningfully. There is a purpose behind you. The whole intends to do something through you."},
    {"OSHO": "Falling in love you remain a child; rising in love you mature. By and by love becomes not a relationship, it becomes a state of your being. Not that you are in love - now you are love."},
    {"OSHO": "Take hold of your own life. See that the whole existence is celebrating. These trees are not serious, these birds are not serious. The rivers and the oceans are wild, and everywhere there is fun. Everywhere there is joy and delight. Watch existence. Listen to the existence and become part of it."},
    {"OSHO": "The moment a child is born, the mother is also born. She never existed before. The woman existed, but the mother, never. A mother is something absolutely new. And so, in you the child, your mother lives on and through your family continues to live... so at this time look after yourself and your family as you would your mother for through you all she will truly never die."},
    {"OSHO": "Truth is not something outside to be discovered, it is something inside to be realized."},
    {"OSHO": "Creativity is the greatest rebellion in existence."},
    {"OSHO": "Intelligence is dangerous. Intelligence means you will start thinking on your own; you will start looking around on your own. You will not believe in the scriptures; you will believe only in your own experience."},
    {"OSHO": "Courage Is a Love Affair with the Unknown"},
    {"OSHO": "If you are a parent, open doors to unknown directions to the child so he can explore. Don't make him afraid of the unknown, give him support."},
    {"OSHO": "Whatever you feel, you become. It is your responsibility."},
    {"OSHO": "To avoid pain, they avoid pleasure. To avoid death, they avoid life."},
    {"OSHO": "You exist in time, but you belong to eternity. You are a penetration of eternity into the world of time. You are deathless, living in a body of death. Your consciousness knows no death, no birth. It is only your body that is born and dies, But you are not aware of your consciousness. You are not conscious of your consciousness. And that is the whole art of meditation. Becoming conscious of consciousness itself."},
    {"OSHO": "Always remember to judge everything by your inner feeling of bliss."},
    {"OSHO": "Doubt,  because doubt is not a sin, it is a sign of your intelligence. You are not responsible to any nation, to any church, to any God. You are responsible only for one thing, and that is self knowledge. And the miracle is, if you can fulfill this responsibility, you will be able to fulfill many other responsibilities without any effort. The moment you come to your own being, a revolution happens in your vision. Your whole outlook about life goes through a radical change. You start feeling new responsibilities, not as something to be done, not as a duty to be fulfilled, but as a joy to do."},
    {"OSHO": "I love, because my love is not dependent on the object of love. My love is dependent on my state of being. So whether the other person changes, becomes different, friend turns into a foe, does not matter, because my love was never dependent on the other person. My love is my state of being. I simply love."},
    {"OSHO": "Find ecstasy within yourself. It is not out there. It is in your innermost flowering. The one you are looking for is you."},
    {"OSHO": "You become more divine as you become more creative. All the religions of the world have said God is the creator. I don't know whether he is the creator or not, but one thing I know: the more creative you become, the more godly you become. When your creativity comes to a climax, when your whole life becomes creative, you live in God. So he must be the creator because people who have been creative have been closest to him. Love what you do. Be meditative while you are doing it, whatsoever it is."},
    {"OSHO": "Don't try to understand life. Live it! Don't try to understand love. Move into love. Then you will know, and all that knowing will come out of your experiencing. The more you know, the more you know that much remains to be known."},
    {"OSHO": "If you want to learn anything, learn Trust. Nothing else is needed. If you are miserable, nothing else will help. Learn Trust. If you don't feel any meaning in life and you feel meaningless, nothing will help. Learn Trust. Trust gives meaning because trust makes you capable of allowing the whole descend upon you."},
    {"OSHO": "Love is not a relationship, love is a state of being; it has nothing to do with anybody else. One is not \"in love\", one is love. And of course when one is love, one is in love, but that is an outcome, a by-product, that is not the source. The source is that one is love."},
    {"OSHO": "Love is the goal, life is the journey."},
    {"OSHO": "The greatest fear in the world is of the opinions of others. And the moment you are unafraid of the crowd you are no longer a sheep, you become a lion. A great roar arises in your heart, the roar of freedom."},
    {"OSHO": "It is beautiful to be alone, it is also beautiful to to be in love, to be with people. And they are complementary, not contradictory."},
    {"OSHO": "Love and respect yourself and never compromise for anything. And then you will be surprised how much growth starts happening of its own accord... As if rocks have been removed and the river has started flowing."},
    {"OSHO": "There is no need of any competition with anybody. You Are yourself, and as you are, You are perfectly good. Accept Yourself."}
  ];
  
  var quoteMachine = {
    getRandom: function(numVals) {
      return Math.floor(Math.random() * numVals);
    },
    
    getAuthor: function(quote) {
      return Object.keys(quote);
    },
    
    getQuote: function(quotes) {
      var selectedIndex = this.getRandom(quotes.length);
      var quote = quotes[selectedIndex];
      var author = this.getAuthor(quote);
      return [author, quote[author], selectedIndex + 1, quotes.length];
    }
  };