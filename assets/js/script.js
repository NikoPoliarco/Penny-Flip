// TODO: Declare any global variables we need

let headRolls = 0
let tailRolls = 0

document.addEventListener('DOMContentLoaded', function () { 



    // head or tails button:
    document.getElementById('flip').addEventListener('click', () => {
        let wasFlippedHeads = Math.random() < 0.5

        if (wasFlippedHeads){
            headRolls += 1
            document.getElementById('message').textContent = 'You Flipped Heads!'
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
        } else {
            tailRolls += 1
            document.getElementById('message').textContent = 'You Flipped Tails!'
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
        }

        // scoreboard:

        let total = headRolls + tailRolls

        let percentageHeads = 0
        let percentageTails = 0

        percentageHeads = Math.round((headRolls / total) *100)
        percentageTails = Math.round((tailRolls / total) *100)
        
        document.getElementById('heads').textContent = headRolls
        document.getElementById('heads-percent').textContent = `${percentageHeads} %`
        document.getElementById('tails').textContent = tailRolls
        document.getElementById('tails-percent').textContent = `${percentageTails} %`

        // Clear Scoreboard:

        document.getElementById('clear').addEventListener('click', function(){
            headRolls= 0
            tailRolls =0
            
            document.getElementById('message').textContent = "Let's Get Rolling!"

            let percentageHeads = 0
            let percentageTails = 0

            percentageHeads = Math.round((headRolls / total) *100)
            percentageTails = Math.round((tailRolls / total) *100)
        
            document.getElementById('heads').textContent = headRolls
            document.getElementById('heads-percent').textContent = `${percentageHeads} %`
            document.getElementById('tails').textContent = tailRolls
            document.getElementById('tails-percent').textContent = `${percentageTails} %`
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
        })
    })

})