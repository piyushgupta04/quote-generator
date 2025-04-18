const quoteText = document.getElementById("quote-text");
const btn = document.getElementById("btn");
const hiAuthor = document.getElementById("quote-hi-col")

// const quotes = [
//     "You do not rise to the level of your goals. You fall to the level of your systems. — James Clear",
//     "The secret of your future is hidden in your daily routine. — Mike Murdock",
//     "Discipline is choosing between what you want now and what you want most. — Abraham Lincoln",
//     "You become what you think about most of the time. — Earl Nightingale",
//     "If you will change, everything will change for you. — Jim Rohn",
//     "Don't count the days, make the days count. — Muhammad Ali",
//     "When you change the way you look at things, the things you look at change. — Wayne Dyer",
//     "Be ashamed to die until you have won some victory for humanity. — Horace Mann",
//     "Your future is created by what you do today, not tomorrow. — Robert Kiyosaki",
//     "Success is nothing more than a few simple disciplines, practiced every day. — Jim Rohn",
//     "Don't wish it were easier, wish you were better. — Jim Rohn",
//     "Work harder on yourself than you do on your job. — Jim Rohn",
//     "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
//     "You cannot change your destination overnight, but you can change your direction overnight. — Jim Rohn",
//     "Motivation is what gets you started. Habit is what keeps you going. — Jim Rohn",
//     "The walls we build around us to keep sadness out also keep out the joy. — Jim Rohn",
// ];

const quotes = [
  {
    "text": "Don't wish it were easier, wish you were better.",
    "author": "Jim Rohn"
  },
  {
    "text": "Either you run the day, or the day runs you.",
    "author": "Jim Rohn"
  },
  {
    "text": "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    "author": "Stephen Covey"
  },
  {
    "text": "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    "author": "Stephen King"
  },
  {
    "text": "The secret of getting ahead is getting started.",
    "author": "Mark Twain"
  },
  {
    "text": "The best way to predict the future is to create it.",
    "author": "Peter Drucker"
  },
  {
    "text": "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
    "author": "Paul J. Meyer"
  },
  {
    "text": "Focus more on your desire than on your doubt, and the dream will take care of itself.",
    "author": "Mark Cuban"
  },
  {
    "text": "The difference between ordinary and extraordinary is that little extra.",
    "author": "Jimmy Johnson"
  },
  {
    "text": "Action is the foundational key to all success.",
    "author": "Pablo Picasso"
  },
  {
    "text": "Start where you are. Use what you have. Do what you can.",
    "author": "Arthur Ashe"
  },
  {
    "text": "The successful warrior is the average man, with laser-like focus.",
    "author": "Bruce Lee"
  },
  {
    "text": "Efficiency is doing things right; effectiveness is doing the right things.",
    "author": "Peter Drucker"
  },
  {
    "text": "Long-range planning does not deal with the future decisions, but with the future of present decisions.",
    "author": "Peter Drucker"
  },
  {
    "text": "Strive not to be a success, but rather to be of value.",
    "author": "Albert Einstein"
  },
  {
    "text": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs"
  },
  {
    "text": "If you spend too much time thinking about a thing, you’ll never get it done.",
    "author": "Bruce Lee"
  },
  {
    "text": "The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to actually do something about them. Not tomorrow. Not next week. But today.",
    "author": "Nolan Bushnell"
  },
  {
    "text": "It's not about better time management. It's about better life management.",
    "author": "Alexandra K. Trenfor"
  },
  {
    "text": "Don't measure yourself by what you have accomplished, but by what you should have accomplished with your ability.",
    "author": "John Wooden"
  },
  {
    "text": "Discipline is the bridge between goals and accomplishment.",
    "author": "Jim Rohn"
  },
  {
    "text": "Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals.",
    "author": "Jim Rohn"
  },
  {
    "text": "Motivation is what gets you started. Habit is what keeps you going.",
    "author": "Jim Rohn"
  },
  {
    "text": "We must all suffer one of two things: the pain of discipline or the pain of regret.",
    "author": "Jim Rohn"
  },
  {
    "text": "It's not whether you get knocked down, it's whether you get up.",
    "author": "Vince Lombardi"
  },
  {
    "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "text": "The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
    "author": "Vince Lombardi"
  },
  {
    "text": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    "author": "Vince Lombardi"
  },
  {
    "text": "The harder I work, the luckier I get.",
    "author": "Samuel Goldwyn"
  },
  {
    "text": "The only place where success comes before work is in the dictionary.",
    "author": "Vidal Sassoon"
  },
  {
    "text": "I find that the harder I work, the more luck I seem to have.",
    "author": "Thomas Jefferson"
  },
  {
    "text": "Perseverance is not a long race; it is many short races one after the other.",
    "author": "Walter Elliot"
  },
  {
    "text": "You may have to fight a battle more than once to win it.",
    "author": "Margaret Thatcher"
  },
  {
    "text": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    "author": "Dale Carnegie"
  },
  {
    "text": "Patience, persistence and perspiration make an unbeatable combination for success.",
    "author": "Napoleon Hill"
  },
  {
    "text": "It’s not that I’m so smart, it’s just that I stay with problems longer.",
    "author": "Albert Einstein"
  },
  {
    "text": "Ambition is the path to success. Persistence is the vehicle you arrive in.",
    "author": "Bill Bradley"
  },
  {
    "text": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "author": "Thomas Edison"
  },
  {
    "text": "A river cuts through rock, not because of its power, but because of its persistence.",
    "author": "Jim Watkins"
  },
  {
    "text": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "author": "Thomas Edison"
  },
  {
    "text": "Work harder on yourself than you do on your job.",
    "author": "Jim Rohn"
  },
  {
    "text": "Don't join an easy crowd; you won't grow. Go where the expectations and the demands to perform are high.",
    "author": "Jim Rohn"
  },
  {
    "text": "Your level of success will rarely exceed your level of personal development.",
    "author": "Jim Rohn"
  },
  {
    "text": "You are the average of the five people you spend the most time with.",
    "author": "Jim Rohn"
  },
  {
    "text": "If you don't like how things are, change it! You're not a tree.",
    "author": "Jim Rohn"
  },
  {
    "text": "The mind is everything. What you think you become.",
    "author": "Buddha"
  },
  {
    "text": "Believe you can and you're halfway there.",
    "author": "Theodore Roosevelt"
  },
  {
    "text": "What the mind can conceive and believe, it can achieve.",
    "author": "Napoleon Hill"
  },
  {
    "text": "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
    "author": "William James"
  },
  {
    "text": "Change your thoughts and you change your world.",
    "author": "Norman Vincent Peale"
  },
  {
    "text": "The only limit to our realization of tomorrow will be our doubts of today.",
    "author": "Franklin D. Roosevelt"
  },
  {
    "text": "With the right attitude, nothing is impossible.",
    "author": "Unknown"
  },
  {
    "text": "A man is but the product of his thoughts. What he thinks, he becomes.",
    "author": "Mahatma Gandhi"
  },
  {
    "text": "We become what we think about.",
    "author": "Earl Nightingale"
  },
  {
    "text": "Your time is limited, so don't waste it living someone else's life.",
    "author": "Steve Jobs"
  },
  {
    "text": "The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    "author": "Mark Zuckerberg"
  },
  {
    "text": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "author": "Joshua Marine"
  },
  {
    "text": "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
    "author": "Oprah Winfrey"
  },
  {
    "text": "You must be the change you wish to see in the world.",
    "author": "Mahatma Gandhi"
  },
  {
    "text": "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    "author": "Barack Obama"
  },
  {
    "text": "Leadership is doing what is right when no one is watching.",
    "author": "George Van Valkenburg"
  },
  {
    "text": "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.",
    "author": "Jack Welch"
  },
  {
    "text": "The function of leadership is to produce more leaders, not more followers.",
    "author": "Ralph Nader"
  },
  {
    "text": "Earn your leadership every day.",
    "author": "Michael Jordan"
  },
  {
    "text": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    "author": "Lao Tzu"
  },
  {
    "text": "The best leaders are clear. They continually communicate to ensure people understand and stay focused.",
    "author": "Tim Hiller"
  },
  {
    "text": "The quality of a leader is reflected in the standards they set for themselves.",
    "author": "Ray Kroc"
  },
  {
    "text": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    "author": "John Quincy Adams"
  },
  {
    "text": "Leadership is not about being in charge. It is about taking care of those in your charge.",
    "author": "Simon Sinek"
  },
  {
    "text": "The price of greatness is responsibility.",
    "author": "Winston Churchill"
  },
  {
    "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "author": "Albert Schweitzer"
  },
  {
    "text": "Success usually comes to those who are too busy to be looking for it.",
    "author": "Henry David Thoreau"
  },
  {
    "text": "The road to success is always under construction.",
    "author": "Lily Tomlin"
  },
  {
    "text": "Don't be afraid to give up the good to go for the great.",
    "author": "John D. Rockefeller"
  },
  {
    "text": "The starting point of all achievement is desire.",
    "author": "Napoleon Hill"
  },
  {
    "text": "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
    "author": "Jim Rohn"
  },
  {
    "text": "To avoid criticism, do nothing, say nothing, be nothing.",
    "author": "Elbert Hubbard"
  },
  {
    "text": "Big shots are only little shots who keep shooting.",
    "author": "Christopher Morley"
  },
  {
    "text": "It has become appallingly obvious that our technology has exceeded our humanity.",
    "author": "Albert Einstein"
  },
  {
    "text": "Time is more valuable than money. You can get more money, but you cannot get more time.",
    "author": "Jim Rohn"
  },
  {
    "text": "Don't wait. The time will never be just right.",
    "author": "Napoleon Hill"
  },
  {
    "text": "The best time to plant a tree was 20 years ago. The second best time is now.",
    "author": "Chinese Proverb"
  },
  {
    "text": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    "author": "Thomas Edison"
  },
  {
    "text": "Lost time is never found again.",
    "author": "Benjamin Franklin"
  },
  {
    "text": "Every second is of infinite value.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "text": "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    "author": "Barack Obama"
  },
  {
    "text": "Never leave till tomorrow that which may be done day.",
    "author": "Benjamin Franklin"
  },
  {
    "text": "Procrastination is the thief of time, collar him.",
    "author": "Charles Dickens"
  },
  {
    "text": "You can't make up for lost time. You can only do better in the future.",
    "author": "Ashley Ormon"
  },
  {
    "text": "Whatever you are, be a good one.",
    "author": "Abraham Lincoln"
  },
  {
    "text": "The best revenge is massive success.",
    "author": "Frank Sinatra"
  },
  {
    "text": "Life is 10% what happens to us and 90% how we react to it.",
    "author": "Charles R. Swindoll"
  },
  {
    "text": "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "text": "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "author": "William Butler Yeats"
  },
  {
    "text": "The journey of a thousand miles begins with one step.",
    "author": "Lao Tzu"
  },
  {
    "text": "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.",
    "author": "Charles Darwin"
  },
  {
    "text": "Happiness is not something readymade. It comes from your own actions.",
    "author": "Dalai Lama"
  },
  {
    "text": "Be the change that you wish to see in the world.",
    "author": "Mahatma Gandhi"
  },
  {
    "text": "Life shrinks or expands in proportion to one's courage.",
    "author": "Anaïs Nin"
  },
  {
    "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
]

btn.addEventListener("click", () => {
  let lengthOfQuotes = quotes.length
  console.log(lengthOfQuotes)
  let idx = Math.floor(Math.random() * lengthOfQuotes)
  quoteText.innerText = quotes[idx].text
  // hiAuthor.innerText = quotes[idx].author
  // quoteText.appendChild(hiAuthor)
  let styledAuthor = quotes[idx].author
  hiAuthor.innerText = `~${styledAuthor}`

  console.log(quotes[idx].text)
  console.log(quotes[idx].author)
  // let currentQuote = finalOutput
  //   console.log(currentQuote)
  //   console.log(idx)
  // quoteText.innerText = currentQuote
});
