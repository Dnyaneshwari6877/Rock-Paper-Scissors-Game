let want_to_continue_game = false;
const ROCK = `    
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;
const PAPER = `    
    ________
---'    ____)____
           ______)
          _______)
         _______)
---.__________)`;


const SCISSORS = `    
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;
do
{
    let computer_choice = Math.floor(((Math.random()) * 10) % 3);
    let user_input = prompt("0. Rock\n 1. Scissors\n 2.Paper\nEnter your input number", " ");
    console.log(computer_choice);
    if(user_input==0)
    {
        console.log(`Your choice : ${ROCK}`);
    }
    else if (user_input == 1)
    {
        console.log(`Your choice : ${SCISSORS}`);
    }
    else if(user_input==2)
    {
        console.log(`Your choice : ${PAPER}`);
    }

    console.log('Vs');

    if (computer_choice == 0) {
        console.log(`Computer choice : ${ROCK}`);
    }
    else if (computer_choice == 1) {
        console.log(`Computer choice : ${SCISSORS}`);
    }
    else if (computer_choice == 2) {
        console.log(`Computer choice : ${PAPER}`);
    }

    
    if(user_input!=" ")
    {
            if ((user_input == 0 && computer_choice == 1) || (user_input == 2 && computer_choice == 0) || (user_input == 1 && computer_choice == 2)) {
                alert("You win");
            }
            else if (user_input == computer_choice) {
                alert("Draw")
            }
            else {
                alert("Computer win");
            }
        }

        want_to_continue_game=confirm("Will you want to continue game",false);

    }while(want_to_continue_game==true)




