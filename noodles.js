                                  /*                       11.0.0.0
 This version of the my grow() script was optimized specifically for n00dles the server. n00dles, is an introduction level server 
(but don't tell her i said that...) Just like the original script it will notify you when  to start your hack() scripts 
once the balance reaches above the set thresh of 90%  to the Max server balance. And of course account balance refresh. */


target = getHostname();
moneyThresh = getServerMaxMoney(target) * 0.9;
/*availBalance = getServerMoneyAvailable(target);	<--- I was having some trouble finding out why the server balance was not
													updating, but after a bit of testing and screen staring... I think its
													fixed! This code is written in NetScript 1.1.0 and you cannot delcare a variable with
													"let" so the values to your variables are fixed. This explains why line 7 would return
													the same value throughout each grow().
*/
while (true) {
	if (getServerMoneyAvailable(target) < moneyThresh) {
		grow(target);
		tprint(target + " Account Balance: " + getServerMoneyAvailable(target)); /* <-- instead of calling availBalance, were going to use the getServerMoneyAvailable() function.
																						We'll receive the new balance after each grow()	cycle*/
	} else {
		tprint("****READY TO DEPLOY HACK SCRIPT****");  /*n00dles is a small server and is easily overwhelmed and tends to forget stuff(RAM).
													she barely has the memory to run one script running over 2.00gb!!! So the solution is to be
													patient... this last bit of code will let us know when to turn off our grow.script and run
													out hack.script. She a little lazy but not useless!*/
}
}