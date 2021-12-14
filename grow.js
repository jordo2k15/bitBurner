// This basic script can be ran while your hacking scripts are attacking. 
// This script will check the Max amount of money the server can hold and if it is below 90%
// then it will grow the server for us. 

target = getHostname();
moneyThresh = getServerMaxMoney(target) * 0.9;

print("Your victim needs at least $" + moneyThresh + " for a profitable hack...");
while (true) {
	if (getServerMoneyAvailable(target) < moneyThresh) {
		print("Growing Account...");
		grow(target);
		
	} else {
		print("No need to grow.... ");
	}
}