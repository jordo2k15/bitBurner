
//serverListToString = scan(getHostname());

target = getHostname();
securityThresh = (getServerBaseSecurityLevel(target))/2;
moneyThresh = getServerMaxMoney(target) * 0.9;

tprint("----------" + target + "----------");
tprint("connections to " + target + ": " + scan(getHostname()));
print("Your victim needs at least $" + moneyThresh + " for a profitable hack...");

while (true) {
	
	if (getServerSecurityLevel(target) > securityThresh) {
		tprint(target + " status:" + " is being weakened!");
		tprint(weaken(target));
	} else if (getServerMoneyAvailable(target) < moneyThresh) {
		tprint(target + " status:" + " is growing");
		grow(target);
		
	} else {
		hack(target)
		tprint("Attempting to hack" + target);
	}

}