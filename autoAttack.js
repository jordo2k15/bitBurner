// 
moneyThresh = args[1];
securityThresh = 25;

if (fileExists("BruteSSH.exe", "home")) {
	brutessh(target);
}
nuke(target);

while(true){
	if (getServerSecurityLevel(target) > securityThresh) {
		weaken(target);
		} else if (getServerMoneyAvailable(target) < moneyThresh) {
			grow(target);
		} else {
			hack(target);
		}
}