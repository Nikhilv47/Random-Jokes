let jokes = [

"The last thing I want to do is hurt you. But it’s still on the list.",
 
  "A clear conscience is usually the sign of a bad memory.",
    
  "I went into a shop and I said, 'Can someone sell me a kettle.' The bloke said, 'Kenwood?' I said, 'Where is he then?'",
    
  "I don’t have a boyfriend, but I do know a guy who would be really mad to hear that.",
    
  "Stress is when you wake up screaming and you realize you haven’t fallen asleep yet.",
  
 "I took a speed-reading course and read War and Peace in twenty minutes. It involves Russia.",
    
 " I like parties, but I don't like piñatas because the piñata promotes violence against flamboyant animals. Hey, there's a donkey with some pizzazz. Let's kick its ass. What I'm trying to say is, don't make the same Halloween costume mistake that I did.",
    
  "I've heard of many chocoholics, but I ain't never seen no chocohol. We got an epidemic, people: people who like chocolate but don't understand word endings. They're probably over-workaholled.",
    
  "Fuck you all and suck my hundred million dollar cock!",
    
  "I believe in equality. Equality for everybody. No matter how stupid they are or how superior I am to them.",
  
  "Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.",
  
  "old is compulsory - growing up is optional.",
  
  "1 in 5 people in the world are Chinese. There are 5 people in my family, so it must be one of them. It’s either my mum or my dad. Or my older brother Colin. Or my younger brother Ho-Cha-Chu. But I think it’s Colin.",
  
  "One day in the shower, you figure it out. It's a special day in a man's life. I was like, 'Oh, I found me a hobby.'",
  
  "A Freudian slip is when you mean one thing and mean your mother.",
  
  "Your gene pool could use a little chlorine.",
  
  "Alcoholism is the only disease that tries to convince you that you don’t have it.",
  
  "When in doubt, mumble.",
  
  "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.",
  
  "On GM crops: I think we've missed a trick there. We could develop wheat with the properties of velcro, to catch whatever it is that's forming those crop circles. But then the spaceship would have to have the corresponding velcro so it's a bit of a long shot.",
  
  "A book fell on my head the other day. I only have my shelf to blame though.",
  
  "There's no happy ending to cocaine. You either die, you go to jail, or else you run out.",
  
  "A lot of people say there's a fine line between genius and insanity. I don't think there's a fine line, I actually think there's a yawning gulf. You see some poor bugger scuffling up the road with balloons tied to his ears, he's not going home to invent a rocket, is he?",
  
  "Did you ever wake up with an erection...and find yourself in a massage chair at Brookstone? And you yell to the sales clerk I'll take it!",
  
  "Rock Against Drugs, what a name. Somebody was high when they came up with that title. It's like Christians Against Christ. Rock created drugs.",
  
  "When we were on acid, we would go into the woods, because there was less chance that you would run into an authority figure. But we ran into a bear. My friend Duane was there, raising his right hand, swearing to help prevent forest fires. He told me, Mitchell, Smokey is way more intense in person!",
  
  "I am wearing a vest. If I had no arms, it would be a jacket.",
  
  "I was in the jungle and there was this monkey with a tin opener. I said, 'You don't need a tin opener to peel a banana.' He said, 'No, this is for the custard.'",
  
  "My favourite road sign is 'Falling Rocks'. What exactly am I supposed to do with that information? They may as well have a sign saying Random accidents ahead, Life's a lottery, Be lucky.",
 
  
  "I would like one day to not only pop a hymen but actually pull the plastic off the vagina, unwrap the vagina.",
  
  "I have a roommate, and I signed a year lease. I screwed up! That's like I wrote a joke that didn't work, but now I have to tell it for a year.",
  
  "Well aren’t you a waste of two billion years of evolution.",
  
  "Despite the high cost of living, it remains popular.",
  
  "I like cinnamon rolls. That's why I wish they made, like, a cinnamon roll incense. 'Cause I don't always have time to make a pan. Perhaps I'd rather light a stick, and have my roommates wake up with false hopes.",
  
  "Sex is important to guys. We need stories to tell our friends.",
  
  "I saw a billboard for the lottery. It said, Estimated lottery jackpot 55 million dollars.I did not know that was estimated. That would suck if you won and they said, Oh, we were off by two zeroes. We estimate that you are angry.",
  
  "So by being offended you've sorta acknowledged that you are thick, and none of us are, so we're all back on speaking terms!",
  
  "A ghost walked into a bar and ordered a shot of vodka. The bartender said, ‘Sorry, we don’t serve spirits here.’",
  
  "I went to a restaurant that serves breakfast at any time. So I ordered French Toast during the Renaissance.",
  
  "I once saw a forklift lift a crate of forks. And it was way to literal for me.",
  
  "I called a detox center - just to see how much it would cost: $13,000 for three weeks! My friends, if you can come up with thirteen grand, you don't have a problem yet.",
  
  "A day without sunshine is like, you know, night.",
  
  "Today a man knocked on my door and asked for a small donation toward the local swimming pool. I gave him a glass of water.",
  
  "The hardest thing to learn in life is which bridge to cross and which to burn.",
  
  "What about the rumours David Cameron smoked drugs as a schoolboy? What worries me most is that he dressed up as a schoolboy to do it, the pervert.",
  
  "A hard thing about a business is minding your own.",
  
  "John Goodman isn't fat. He's in a category beyond fat. What does one call it? Whalelike.",
  
  "I think, therefore I’m single.",
  
 
  "That’s what show business is, sincere insincerity.",
  
  "Two wifi engineers got married. The reception was fantastic.",
  
  "I lived in an apartment, and I had a neighbor. I knew that whenever he knocked on the wall, he wanted me to turn my music down. I'd mess with his head. I'd say, Go around. I cannot open the wall!",
  
  "At every party there are two kinds of people: those who want to go home and those who don’t. The trouble is, they are usually married to each other.",
  
  "I have a lot of growing up to do. I realized that the other day inside my fort.",
  
  
  
  "It was so sweet backstage, you should have seen it: The Teamsters were helping Michael Moore into the trunk of his limo.",
  
  "If God is watching us, the least we can do is be entertaining.",
  
  "The man who survived both mustard gas and pepper spray is a seasoned veteran now. "
   
]

let refresh = document.getElementById("refresh")



let jokeContainer = document.getElementById("joke-container")





refresh.addEventListener("click", function() {
    let index = Math.ceil(Math.random()*(jokes.length-1))

 jokeContainer.innerHTML = jokes[index]
  });