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
    { text: "You do not rise to the level of your goals. You fall to the level of your systems.", author: "James Clear" },
    { text: "The secret of your future is hidden in your daily routine.", author: "Mike Murdock" },
    { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
    { text: "You become what you think about most of the time.", author: "Earl Nightingale" },
    { text: "If you will change, everything will change for you.", author: "Jim Rohn" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { text: "When you change the way you look at things, the things you look at change.", author: "Wayne Dyer" },
    { text: "Be ashamed to die until you have won some victory for humanity.", author: "Horace Mann" },
    { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
    { text: "Success is nothing more than a few simple disciplines, practiced every day.", author: "Jim Rohn" },
    { text: "Don't wish it were easier, wish you were better.", author: "Jim Rohn" },
    { text: "Work harder on yourself than you do on your job.", author: "Jim Rohn" },
    { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    { text: "You cannot change your destination overnight, but you can change your direction overnight.", author: "Jim Rohn" },
    { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Rohn" },
    { text: "The walls we build around us to keep sadness out also keep out the joy.", author: "Jim Rohn" }
  ];

btn.addEventListener("click", () => {
    let idx = Math.floor(Math.random() * 15)
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
