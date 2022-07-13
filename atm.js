const p = require("prompt-sync")
const prompt = p()

var amount,chance,pin;
amount = [5000,3000,10000,1000,500]
pin = [1234,2131,9890,1212,1111]
names = ['prem','ramu','hancy','appanna','santhy']
chance = 3

console.log();
console.log('wel come to you back ATM!');
while (chance >= 0 ){
  let name = prompt('enter the name :')
  let str = names.indexOf(name)
  if (str >= 0){
      let a = parseInt(prompt("inter your pin :"))
      if (pin[str] === a){
        chance = 3
        console.log('correct pin');
        while (true){
          console.log('1) account balance 2) Deposit 3) withdrawal 4) back ');
          let a = parseInt(prompt("enter :"))
          if (4 == a){break}
          else{
            switch(a){
              case (1):
                console.log('account balance :',amount[str],'/-');
                break
              case (2):
                console.log('Deposit');
                var mny = parseInt(prompt("enter :"))
                amount[str]+=mny
                console.log('now your total amount :',amount[str],'/-');
                break
              case (3):
                console.log('withdrawal');
                var mny = parseInt(prompt("enter :"))
                if (mny <= amount[str]){
                  amount[str]-=mny
                  console.log('now your total amount :',amount[str],'/-');
                }else{console.log('you enter the amount more then your account balance');}
                break
              default:
                console.log('you enter something wrong');
            }
          }
      }
      }else{
        console.log('wrong pin you have only',chance,'chance');
        chance-=1
      }
    }else{console.log('enter the valid name');}
}
