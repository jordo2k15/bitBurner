// Purpose of the script.

moneyThresh = args[1];
securityThresh = 25;

if (fileExists("BruteSSH.exe", "home")) { //checking if our BruteSSH.exe file is in our home server (Y)
	brutessh(target);   // If the file is found, then we can brute for our way using brutessh(the target server)
}
nuke(target); // After opening the required amount of ports (in this case the server only requires 1 to deploy our NUKE.exe), we can then "NUKE" the server
            //to gain root/admin access

while(true){
	if (getServerSecurityLevel(target) > securityThresh) { // Here we are looking at the server security level. If the target server's security level is                              
		weaken(target);                                    //  higher than the security Thresh (in this case greater than 25), then we will weaken it.
		
    } else if (getServerMoneyAvailable(target) < moneyThresh) { // And we repeat the same concept, only this time we are checking the server balance($$$)
		grow(target);                                           // We want to make sure that we dont draw any attention to our operation, so we made sure to
                                                                // "grow" the server's money in order to cover our tracks for now. 
		
        } else {
		    hack(target);                                       // Lastly, we hack them and take their money. 
		}
}

//GG'S