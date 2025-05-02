    // const score={
    //     wins:0,
    //     loss:0,
    //     tie:0
    // };
    let score = JSON.parse(localStorage.getItem('score'));
    if(score===null){
        score={
            wins:0,
            loss:0,
            tie:0
        }
    };
    document.querySelector('.js-score').innerHTML=`Wins : ${score.wins} Loss : ${score.loss} Tie : ${score.tie}`;
    // console.log(JSON.parse(localStorage.getItem('score')));
    function playergame(playermove){
        let computermove = pickcomputermove();
        let result ='';
        if(computermove==='rock'){
            if(playermove ==='rock'){
                result = 'Tie';
            }
            else if(playermove === 'paper'){
                result = 'You win';
            }
            else if(playermove === 'scissors'){
                result ='You lose';
            }
        }
        else if(computermove==='paper'){
            if(playermove ==='paper'){
                result = 'Tie';
            }
            else if(playermove === 'rock'){
                result = 'You lose';
            }
            else if(playermove === 'scissors'){
                result ='You win';
            }
        }
        else if(computermove==='scissors'){
            if(playermove ==='scissors'){
                result = 'Tie';
            }
            else if(playermove === 'paper'){
                result = 'You lose';
            }
            else if(playermove === 'rock'){
                result ='You win';
            }
        }66
        if(result==='You win'){
            score.wins = score.wins+1;
        }
        else if(result==='You lose'){
            score.loss+=1;
        }
        else if(result==='Tie'){
            score.tie+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
        document.querySelector('.js-score').innerHTML=`Wins : ${score.wins} Loss : ${score.loss} Tie : ${score.tie}`;
        const a = document.querySelector('.js-result')
        .innerHTML = result ;
        document.querySelector('.js-moves')
        .innerHTML = `You <img src="images/${playermove}-emoji.png" class="js-img"> 
        <img src="images/${computermove}-emoji.png". class="js-img"> Computer`;  
    }
    
    function pickcomputermove(){
        let randomenumber = Math.random();
        let computermove = '';

        if(randomenumber>=0 && randomenumber<1/3)
        computermove = 'rock';
        else if(randomenumber>=1/3 && randomenumber<2/3){
            computermove = 'paper';
        }
        else if (randomenumber>=2/3 && randomenumber<1){
            computermove = 'scissors';
        }
        console.log(randomenumber);
        console.log(computermove);

        return computermove;
    }