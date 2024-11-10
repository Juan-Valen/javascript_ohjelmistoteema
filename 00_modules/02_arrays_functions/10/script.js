// Write a voting program as described below for small-scale meeting use. (8p)



// [
    //     {
        //         name: 'ellie',
        //         votes: 0,
        //     },
        //     {
            //         name: 'frank',
    //         votes: 0,
    //     },
    //     {
//         name: 'pamela',
//         votes: 0,
//     },
// ]


// The winner is pamela with 3 votes.
// results:
// pamela: 3 votes
// frank: 1 votes
// ellie: 1 votes

//     Some help:

// // You need to compare votes so console log a and b to see how to get the correct property.
// someArray.sort((a, b) => {
    //    console.log(a, b);
    //    return b - a;
    // });
    
    
const check = confirm('Do you want to continue?');
if (check) {
    //     The program asks for the number of candidates.
    var candidate_qty = prompt("How many candidates are there?")
    var candidate = []
    //     Then the program asks for the names of the candidates: 'Name for candidate 1
    while (candidate.length < candidate_qty) {
        //     Store the candidates' names and initial vote count in objects like this:
        var c = {
            name: prompt("Name of candidate " + (candidate.length + 1)),
            votes: 0
        }
        candidate.push(c)
    }

    //     The program asks for the number of voters.
    var voter_qty = prompt("How many voters are there?")
    //     The program asks each voter in turn who they will vote for. 
    for (i = 1; i <= voter_qty; i++) {
        // Voter shoud enter candidate name.
        var vote_to = prompt("Name of candidate you are voting for:");
        if (vote_to == null || !candidate.some((v)=>v.name==vote_to)) {
            continue
        };
        candidate[candidate.findIndex((v) => v.name == vote_to)].votes += 1;
        // If the voter enters an empty value instead of the voting number,
        // it will be interpreted as an empty vote.
    }
    //     The program announces the name of the winner and the results by printing it to the console:
    console.log(`
    results:
    `);
    candidate.sort((a,b)=>b.votes-a.votes);
    candidate.forEach(v=>{
        console.log(`${v.name}: ${v.votes} votes`);
    })
}