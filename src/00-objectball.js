function gameObject() {
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15 
                },
                 "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                 "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                        "number": 0,
                        "shoe": 16,
                        "points": 12,
                        "rebounds": 4,
                        "assists": 7,
                        "steals": 7,
                        "blocks": 15,
                        "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                     "number": 8,
                     "shoe": 15,
                     "points": 33,
                     "rebounds": 3, 
                     "assists": 2,
                     "steals": 1,
                     "blocks": 1,
                     "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6, 
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                },
            }
        }
    }
}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}


// - Build a function, `numPointsScored` that takes in an argument of a player's
//   name and returns the number of points scored for that player.
//   - Think about where in the object you will find a player's `points`. How can
//     you iterate down into that level? Think about the return value of your
//     function.
function numPointsScored(playerName) {
    const game = gameObject()
    for (let gameKey in game) { //iterate through game keys(home, away)
        const teamObj = game[gameKey]
         for (let teamKey in teamObj) { //iterate through team keys(teamName, colors, players)
            const playerObj = teamObj.players
            for (let playerKey in playerObj) { //iterate through players
                if (playerKey === playerName) { //check to see if player matches functionm argument
                    return playerObj[playerKey].points //return players points
                }
            }
        }
    }
}

//ANOTHER WAY TO WRITE THIS SAME CODE
// function numPointsScored(name) {
//     let object = gameObject()
//     let objKeys = Object.keys(object)
//     for(let k of objKeys) {
//         let players = Object.keys(object[k]["players"])
//         for(let p of players) {
//             if(p === name) {
//                 return object[k]["players"][p]["points"]
//             }
//         }
//     }
// }

// Build a function, `shoeSize`, that takes in an argument of a player's name and
//   returns the shoe size for that player.

function shoeSize(name) {
    let object = gameObject()
    let objKeys = Object.keys(object)
    for(let k of objKeys) {
        let players = Object.keys(object[k]["players"])
        for(let p of players) {
            if (p === name) {
                return object[k]["players"][p]["shoe"]
            }
        }
    }
}

//Build a function, 'teamColors', that takes in an argument of team name and returns an array of team colors. 
const teamColors = (teamName) => {
    if (gameObject().home.homeTeam === teamName) {
      return gameObject().honeColors
    } else {
      return gameObject().away.colors
    }
  }
  

//Build a function 'teamNames' that operates on the game object to return an array of the team names
const teamNames = () => {
    return [gameObject().home.teamName, gameObject().away.teamName]
  }

//Build a function playerNumbers that takes an argument of a team name and returns an array of the jersey numbers for that team
const playerNumber = (player) => {
    return player[number]
  }
  
  const teamObject = (teamName) => {
    if (teamNames() [0] == teamName) {
      return gameObject().home
    } else {
      return gameObject().away
    }
  }
  
  const playerNumbers = (teamName) => {
    let playerNumbers = []
    const players = teamObject(teamName).players
    for (let player in players) {
      let playerNumbers = players[player].number
      playerNumbers.push(playerNumber)
    }
    return playerNumbers
  }
  
  //Build a function playerStats that takes an argument of a players nameand returns an object of that players stats
const homePlayers = () => {
    return gameObject().home.players
  }
  
  const awayPlayers = () => {
    return gameObject().away.players
  }
  
  const allPlayers = () => {
    return Object.assign({}, homePlayers(), awayPlayers())
  }
  
  const playerStats = (player) => {
    return allPlayers()[player]
  }

  //Build a function bigShoeRebounds that will return the number of rebounds associated with the player that has the largest shoe size
const playerShoe = (player) => {
    return playerStats(player).shoe
  }
  
  const playerRebounds = (player) => {
    return playerStats(player).rebounds
  }
  
  const bigShoeRebounds = () => {
    const players = allPlayers()
    let largestShoe = 0
    let largestShoePlayer = ''
    for (let player in players) {
      if (playerShoe(player) . largestShoe || largestShoe === 0) {
        lergestShoe = playerShoe(player)
        largestShoePlayer = player
      }
    }
    return playerRebounds(largestShoePlayer)
  }
  