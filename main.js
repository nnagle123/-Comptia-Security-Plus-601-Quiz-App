//Add new questions following the format below: 


var questionList = [
{
    question : 'Which type of threat actor is usually motivated by explicit financial gain?',
    options : ['Organized Crime', 'Nation State', 'Competitor', 'Hacktivist'],
    answer : 'Organized Crime',
    explanation : 'Organized Crime are usually looking for financial gain, Nation State Actors are government entities, Competitors are usually looking to disrupt business, Hacktivists are individuals motivated by a cause'
},
{
    question : 'An attacker asks an employee to hold the door that should be locked open for them so they can have access to the building.  What type of Social Engineering attack is this?',
    options : ['Watering Hole', 'Shoulder Surfing', 'Tailgating', 'Impersonation'],
    answer : 'Tailgating',
    explanation : "Tailgating is gaining physical access into a controlled facility by closely following an authorized person through the access point."
},
{
    question : 'Your CEO has received a very personalized email requesting personal information.  What type of attack is this?',
    options : ['Phishing','Vishing','Smishing','Whaling'],
    answer : 'Whaling',
    explanation : "Whaling is a type of Phishing attack that is targeted at a high-profile user"
},
{
    question : "All of the devices are suddenly encrypted on the birthday of an employee fired who was fired 6 months ago.  What is the probable attack?",
    options : ['A Birthday Attack','Logic Bomb','Ransomeware','Backdoor'],
    answer : 'Logic Bomb',
    explanation : "A Logic Bomb is a virus or malware that is triggered to detonate on a specific date."
},
{
    question : 'If you can use the URL path to access locations of a Web Application that you shouldnt be able to access, what type of attack are you vulnerable to?',
    options : ['Directory Traversal', 'DNS Poisioning', 'Buffer Overflow', 'URL Hijacking'],
    answer : 'Directory Traversal',
    explanation : "Directory Traversal is working your way though the directories to try and access things you shouln't be able too.  The attacker will do this by adding multiple change directory commands in the URL file path.  Think adding: ../../../ in the URL file path to move up three levels (../ is the command line command to move up one level.)"
},
{
    question : 'Your Application crashes the server when adding input values that are higher than the system can handle or was intended to handle.  What type of attack are you vulnerable to?',
    options : ['Directory Traversal', 'Session Hijacking', 'Buffer Overflow', 'Cross-Site Scripting'],
    answer : 'Buffer Overflow',
    explanation : "Buffer Overflow is an attack where the attacker will intentionally input more data than the program can handle which can crash the system and give the attacker administrative privileges."
},
{
    question : 'What is the name for a Security Weakness that could be exploited?',
    options : ['Vulnerability', 'Exploit', 'Attack Surface', 'Bug Bounty'],
    answer : 'Vulnerability',
    explanation : "a vulnerability is a Security Weakness that could be exploited."
},
{
    question : 'Which ports does FTP use?',
    options : ['port 123 & port 120', 'port 421 & port 420', 'port 80 & port 8080', 'port 20 & port 21'],
    answer : 'port 20 & port 21',
    explanation : "FTP uses port 20 & 21.  HTTP uses port 80.  Webcache uses port 8080. Network Time Protocol(NTP) uses port 123. "
},
{
    question : 'Which protocol provides connectionless integrity, data origin authentication, replay protection, and encryption using Authentication Header and Encapsulating Security Payload?',
    options : ['SSH', 'IPSec', 'TCP', 'SFTP'],
    answer : 'IPSec',
    explanation : "Internet Protocol Security (IPsec) is a secure network protocol suite that authenticates and encrypts the packets of data to provide secure encrypted communication between two computers over an Internet Protocol network. It is used in virtual private networks (VPNs)."
},
{
    question : 'What is an entity that issues and manages certificates?',
    options : ['CA', 'DNS', 'URL', 'Whois'],
    answer : 'CA',
    explanation : "CA (Certificate Authority) is an entity that issues digital certificates. A digital certificate certifies the ownership of a public key by the named subject of the certificate. This allows others (relying parties) to rely upon signatures or on assertions made about the private key that corresponds to the certified public key. A CA acts as a trusted third party—trusted both by the subject (owner) of the certificate and by the party relying upon the certificate."
},
{
    question : 'Which type of attack searches long lists of words for a particular language to match them to an encrypted password?',
    options : ['brute force attack', 'rainbow table', 'dictionary attack', 'hash collision'],
    answer : 'dictionary attack',
    explanation : "No explanation yet"
},
{
    question : 'Which alternate computing facility is the least expensive to maintain before a disaster occurs?',
    options : ['Hot Site', 'Warm Site', 'Iron Site', 'Cold Site'],
    answer : 'Cold Site',
    explanation : "No explanation yet"
},
{
    question : 'Which port does NTP use?',
    options : ['port 123', 'port 21', 'port 80', 'port 44'],
    answer : 'port 123',
    explanation : "Network Time Protocol (NTP) uses port 123.  File Transfer Protocol (FTP) uses port 21.  HTTP uses prot 80.  port 44 was just random."
}, 
{
    question : "At which OSI layer does IP Security (IPSec) operate?",
    options : ["Layer 1", "Layer 3", "Layer 4", "Layer 7"],
    answer : "Layer 3",
    explanation : "No explanation yet"
},
{
    question : "What is meant by the term hardening?",
    options : ["getting your significant other a gym membership", "getting antivirus on company computers", "getting new hardware for the office", "tightening control using security policies to increase system security"],
    answer : "tightening control using security policies to increase system security",
    explanation : "No explanation yet"
},
{
    question : "Which backup method backs up every file on the server each time it is run?",
    options : ["Partial Backup", "Full Backup", "Mixed Backup", "Back to the future"],
    answer : "Full Backup",
    explanation : "No explanation yet"
},
{
    question : "What is the name of the process for removing only the incriminating data from the audit logs?",
    options : ["Scrubbing", "Washing", "Sanitizing", "Clensing"],
    answer : "Scrubbing",
    explanation : "No explanation yet"
},
{
    question : "What is a honeypot?",
    options : ["an antivirus software", "a program designed to capture and review network traffic", "a python3 library", "a decoy system in your network installed to lure potential intruders away from legitimate systems"],
    answer : "a decoy system in your network installed to lure potential intruders away from legitimate systems",
    explanation : "No explanation yet"
},
{
    question : "Which type of attack relies on the ability to use a user’s current web browsing state, including session cookie data and login identity credentials, and trick that user into navigating to a website that contains malicious code?",
    options : ["XSS", "XSRF", "SQL Injection", "DLL Injection"],
    answer : "XSRF",
    explanation : "No explanation yet"
},
{
    question : "Which attack is a situation where an intruder can execute a command at will, by exploiting a vulnerability on a system, usually in an application.",
    options : ["XSS", "XSRF", "SQL Injection", "Arbitrary Code Execution"],
    answer : "Arbitrary Code Execution",
    explanation : "No explanation yet"
},
{
    question : "Which cryptography technique is based on a combination of two keys: a secret (private) key and a public key?",
    options : ["private-key cryptography", "open cryptography", "public-key cryptography", "PGP"],
    answer : "public-key cryptography",
    explanation : "No explanation yet"
},
{
    question : "Which command displays the route of packets and timing between point A and point B?",
    options : ["ipconfig", "tracert/traceroute", "nslookup/dig", "netstat"],
    answer : "tracert/traceroute",
    explanation : "No explanation yet"
},
{
    question : "Which would be the best way to create a detailed diagram of wireless access points and hotspots?",
    options : ["Footprinting", "Fingerprinting", "Detection", "Containerization"],
    answer : "Footprinting",
    explanation : "No explanation yet"
},
{
    question : "What is the term for a potential opening in network security that a hacker can exploit to attack a network?",
    options : ["an opening", "a vulnerability", "an impact", "a wormhole"],
    answer : "a vulnerability",
    explanation : "No explanation yet"
},
{
    question : "What is the best way for a company to protect highly sensitive data using classification labels?",
    options : ["Discretionary", "Rule Based", "Role Based", "Mandatory"],
    answer : "Mandatory",
    explanation : "No explanation yet"
},
{
    question : "Which attack occurs when a person uses a packet sniffer between the sender and the receiver of a communication on the network and listens in on or intercepts the information being transferred, modifying its contents before resending the data to its destination",
    options : ["Xmas Attack", "DNS Poisoning", "Smurf Attack", "On-Path"],
    answer : "On-Path",
    explanation : "No explanation yet"
},
{
    question : "What is the name for malicious software infects a system without relying upon other applications for its execution?",
    options : ["An Exploit", "A Fileless Virus", "A Virus", "A Worm"],
    answer : "A Worm",
    explanation : "No explanation yet"
},
{
    question : "Your co-worker was scrolling on the internet and somehow got the host infected with maleware.  He did not click on any links in his email.  What is the most likely place to find where the maleware originated?",
    options : ["Web Server Logs", "SIP Traffic Logs", "DNS Logs", "SNMP logs"],
    answer : "DNS Logs",
    explanation : "No explanation yet"
},
{
    question : "Which command is a Windows and Linux packet generator and analyzer that can be used to conduct both ping sweeps and port scans and can act as a packet builder.",
    options : ["netstat", "nmap", "hping", "netcat"],
    answer : "hping",
    explanation : "No explanation yet"
},
{
    question : "Which account should you rename immediately after installing a new OS to harden the OS?",
    options : ["administrator", "guest", "personal", "service"],
    answer : "administrator",
    explanation : "No explanation yet"
},
{
    question : "what is the act of discovering unprotected wireless network by driving around with a laptop called?",
    options : ["war driving", "hack crusing", "on-path", "air gapping"],
    answer : "war driving",
    explanation : "No explanation yet"
},
{
    question : "What port does SSH use?",
    options : ["port 22", "port 21", "port 80", "port 123"],
    answer : "port 22",
    explanation : "No explanation yet"
},
{
    question : "Which type of cryptography is more secure: symmetric or asymmetric?",
    options : ["asymmetric", "symmetric", "they're both equally secure", "neither are secure, dont use them!"],
    answer : "asymmetric",
    explanation : "No explanation yet"
},
{
    question : "Which type of attack allows an attacker to redirect Internet traffic by setting up a fake DNS server to answer client requests?",
    options : ["DNS Hijacking", "DNS Spoofing", "DNS Poisioning", "Cross-Site Scripting"],
    answer : "DNS Spoofing",
    explanation : "No explanation yet"
},
{
    question : "What is the name for when two or more honeypots are implemented on a network?",
    options : ["Honeypot", "Bee Hive", "A Honeynet", "Honey Hole"],
    answer : "A Honeynet",
    explanation : "No explanation yet"
},
{
    question : "Which command is a command-line tool that displays any active TCP connections that are present. ",
    options : ["netstat", "tracert", "netcat", "ipconfig/ifconfig"],
    answer : "netstat",
    explanation : "No explanation yet"
},
{
    question : "what type of attack is where an intruder records the communication between a user and a server, and later plays the recorded information back to impersonate the user",
    options : ["replay attack", "on-path", "ransomeware", "session hijacking"],
    answer : "replay attack",
    explanation : "No explanation yet"
},
{
    question : "Which port does SSL use?",
    options : ["port 80", "port 8080", "port 123", "port 443"],
    answer : "port 443",
    explanation : "HTTPS uses port 443.  HTTP uses port 80.  Webcache uses port 8080. Network Time Protocol (NTP) uses port 123."
},
{
    question : "Which type of controls include developing policies and procedures, screening personnel, conducting security awareness training, and implementing change control?",
    options : ["Physical Controls", "Endpoint Controls", "Administrative Controls", "Compensating Controls"],
    answer : "Administrative Controls",
    explanation : "Administrative Controls "
},
{
    question : "You are conducting a penetration test, you already have a few accounts but you notice that there is another system on the network and you can use the same accounts and user types as the one you already have. What type of technique is this?",
    options : ["Vertical movement", "Priviledge escalation", "Network Traversing", "Lateral movement"],
    answer : "Lateral movement",
    explanation : "No explanation yet"
},
{
    question : "Which port number is used by SSH, SCP, and SFTP?",
    options : ["port 23", "port 21", "port 80", "port 22"],
    answer : "port 22",
    explanation : "No explanation yet"
},
{
    question : "How is SLE calculated?",
    options : ["AV * EF", "RTO * AV", "MTTR * EF", "AV * ARO"],
    answer : "AV * EF",
    explanation : "No explanation yet"
},
{
    question : "What does a MAC do when used as part of a cryptographic system?",
    options : ["It validates the messages integrity and authenticity", "It validates the messages confidentiality and authenticity", "It protects the messages confidentiality and integrity", "None of the above"],
    answer : "It validates the messages integrity and authenticity",
    explanation : "No explanation yet"
},
{
    question : "What best describes adding new employees to the companies identity and access management system?",
    options : ["Job controls", "Onboarding", "AD Account Access", "Hazing the new guy"],
    answer : "Onboarding",
    explanation : "No explanation yet"
},
{
    question : "Which of the following is a Physical Security Control",
    options : ["Lock", "Fence", "USB Data Blocker", "All of the above"],
    answer : "All of the above",
    explanation : "No explanation yet"
},
{
    question : "Which attack is where a user is sent an e-mail that appears to come from a valid entity asking for personally identifiable information (PII)",
    options : ["Phishing", "Vishing", "Pharming", "Spraying"],
    answer : "Phishing",
    explanation : "No explanation yet"
},
{
    question : "Which port numbers are used by NetBIOS?",
    options : ["ports 20 & 21", "ports 443 - 445", "ports 80 & 8080", "ports 137 - 139"],
    answer : "ports 137 - 139",
    explanation : "No explanation yet"
},
{
    question : "One of the most popular tools used for network mapping is an open-source and publicly available utility called ___________",
    options : ["wireshark", "dirbuster", "metasploit", "nmap"],
    answer : "nmap",
    explanation : "No explanation yet"
},
{
    question : "What are the main protocols that can be used for wireless networks?",
    options : ["WEP", "WPAv1", "WPAv2", "all of the above"],
    answer : "all of the above",
    explanation : "No explanation yet"
},
{
    question : "How can a company ensure that all data on a mobile device is unrecoverable if the device is lost or stolen?",
    options : ["remote wipe", "password protection", "honour system", "unfortunately they can't"],
    answer : "remote wipe",
    explanation : "No explanation yet"
},
{
    question : "If a hacker interceps an encrypted email, what will he see?",
    options : ["Ciphertext", "Plaintext", "The email's hash", "The recipient's certificate information"],
    answer : "Ciphertext",
    explanation : "No explanation yet"
},
{
    question : "If the key to decrypt an email is the same as the the key that used to encrypt the email, what type of encription is this?",
    options : ["Asymmetric", "Symmetric", "RSA", "Diffie-Hellman"],
    answer : "Symmetric",
    explanation : "No explanation yet"
},
{
    question : "Creating an invisible watermark to see if another company is using your photo's is called: ",
    options : ["Image Encryption", "Branding", "Steganography", "One-way hash"],
    answer : "Steganography",
    explanation : "No explanation yet"
},
{
    question : "_________ command within Unix and Linux allows the user to transfer data to or from a server using a variety of protocols, including HTTP, HTTPS, and FTP.",
    options : ["curl", "arp", "route", "netcat"],
    answer : "curl",
    explanation : "No explanation yet"
},
{
    question : "Which of the following IPSec modes should be used within a local area network?",
    options : ["Authentication mode", "Tunnel mode", "Transport mode", "Encryption mode"],
    answer : "Transport mode",
    explanation : "No explanation yet"
},
{
    question : "Which port number is used by Microsoft SQL Server?",
    options : ["port 123", "port 23", "port 443", "port 1433"],
    answer : "port 1433",
    explanation : "No explanation yet"
},
{
    question : "Which of the following is not commonly used to secure a database?",
    options : ["Salting", "Synchronization", "Tokenization", "Hashing"],
    answer : "Synchronization",
    explanation : "No explanation yet"
},
{
    question : "A _________ is a network device that helps evenly distribute the flow of network traffic to other network devices, either in an active/active mode",
    options : ["Load Balancer", "FTP Server", "VLAN", "NAC"],
    answer : "Load Balancer",
    explanation : "No explanation yet"
},
{
    question : "Which security features do digital certificates provide?",
    options : ["data integrity", "authentication", "non-repudiation", "all of the above"],
    answer : "all of the above",
    explanation : "No explanation yet"
},
{
    question : "Which TCP port number does NNTP use?",
    options : ["port 23", "port 123", "port 443", "port 119"],
    answer : "port 119",
    explanation : "No explanation yet"
},
{
    question : "Which attack sends unsolicited messages over a Bluetooth connection",
    options : ["bluejacking", "on-path", "DDoS", "smurfing"],
    answer : "bluejacking",
    explanation : "No explanation yet"
},
{
    question : "What backup technology is most commonly used to implement an off-site cold backup?",
    options : ["Disk", "Wireshark", "Tape", "AD"],
    answer : "Tape",
    explanation : "No explanation yet"
},
{
    question : "Which port number does DHCP use?",
    options : ["port 67", "port 21", "port 123", "port 71"],
    answer : "port 67",
    explanation : "No explanation yet"
},
{
    question : "Which automated scanner has the capability to conduct ping sweeps, DNS lookups, and WHOIS lookups for reconnaissance before moving to more advanced, intrusive measures such as attempting exploits, running targeted nmap scans, and enumerating shares.",
    options : ["theHarvester", "Metasploit", "nmap", "sn1per"],
    answer : "sn1per",
    explanation : "No explanation yet"
},
{
    question : "Which port number does HTTP use?",
    options : ["port 8080", "port 23", "port 80", "port 20"],
    answer : "port 80",
    explanation : "No explanation yet"
},
{
    question : "Which port is used by SMB?",
    options : ["port 445", "port 123", "port 1477", "port 21"],
    answer : "port 445",
    explanation : "No explanation yet"
},  
{
    question : "________________  is a Python-based tool used to collect OSINT and can be very useful to a penetration tester in the early stages of testing. ",
    options : ["Django", "BeautifulSoup", "theHarvester", "Selinium"],
    answer : "theHarvester",
    explanation : "No explanation yet"
},
{
    question : "_________ is a type of network attack in which the ARP cache of systems on the network is modified to associate an IP address with the MAC address of the attacker’s system.",
    options : ["ARP Poisoning", "DoS", "DNS Amplification", "SYN Flood"],
    answer : "ARP Poisoning",
    explanation : "ARP Poisoning stands for Address Resolution Protocol Poisoning and is what's defined in this question."
},
{
    question : "Which of the following is when all of the names in a dataset have been changed, but enough information has been kept in that someone could potentially connect it to the original information?",
    options : ["anonymization", "data masking", "pseudo-anonymization", "tokenization"],
    answer : "pseudo-anonymization",
    explanation : "pseudo-anonymization is where names have been changed, but could still be reversed.  Data masking will change the original data and hide Personally Identifiable Information (PII). Tokenization replaces data with a token - think credit cards. Anonymization modifies the data to protect PII"
}
// ^^^^^ If you add another question, you will need a comma here.


// {
//     question : "",
//     options : ["", "", "", ""],
//     answer : "",
//     explanation : "",
// }, 
// {
//     question : "",
//     options : ["", "", "", ""],
//     answer : "",
//     explanation : "",
// },
  // {
//     question : "",
//     options : ["", "", "", ""],
//     answer : "",
//     explanation : "",
// },  
// {
//     question : "",
//     options : ["", "", "", ""],
//     answer : "",
//     explanation : "",
// },  
// {
//     question : "",
//     options : ["", "", "", ""],
//     answer : "",
//     explanation : "",
// },  
// ^^^ Note the last question must not have a comma after the curly bracket 
]

var question = document.getElementById('question');
var radioInput = document.querySelectorAll('input[name="size"]');
let selectedSize;
var startContainer = document.getElementById('start-container');
var quizContainer = document.getElementById('quiz-container');
var startButton = document.getElementById('start-button');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var start = document.querySelector('.start');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;


//start game
function startGame(){ 
    startContainer.style.display = 'none';
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    displayQuestion()
}
start.addEventListener('click', startGame);



//select game size
// startButton.addEventListener("click", () => {
//     let selectedSize;
//     for (const radioButton of radioButtons) {
//         if (radioButton.checked) {
//             selectedSize = radioButton.value;
//             break;
//         }
//     }


//function to display questions
function displayQuestion(){
    for(var a = 0; a < span.length; a++){
        span[a].style.background='none';
    }
    question.innerHTML = questionList[i].question;
    option0.innerHTML = questionList[i].options[0];
    option1.innerHTML = questionList[i].options[1];
    option2.innerHTML = questionList[i].options[2];
    option3.innerHTML = questionList[i].options[3];
    stat.innerHTML = (i+1)+'/'+questionList.length;
}

//add up score
function addToScore(e){
    if(e.innerHTML === questionList[i].answer && score < questionList.length){
        score = score + 1;
        document.getElementById(e.id).style.background = 'lightgreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
    } 
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion(){
    if(i < questionList.length - 1)
    {
        i = i + 1;
        displayQuestion();
    }
    else{
        points.innerHTML = score+ '/' + questionList.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//Skip question
next.addEventListener('click', nextQuestion);

//Try again at the end
function tryAgain(){
    location.reload();
}

//function to show answers

function checkAnswer(){
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';

    for(var i = 0; i < questionList.length; i++) {
        var checkAnswerQuestion = document.createElement('li');
        var  checkAnswerAnswer = document.createElement('li');
        var checkAnswerExplanation = document.createElement('li');
        checkAnswerQuestion.innerHTML= questionList[i].question;
        checkAnswerAnswer.innerHTML = questionList[i].answer;
        checkAnswerExplanation.innerHTML = questionList[i].explanation;
        answers.appendChild(checkAnswerQuestion);
        answers.appendChild(checkAnswerAnswer);
        answers.appendChild(checkAnswerExplanation);
    }
}


displayQuestion();