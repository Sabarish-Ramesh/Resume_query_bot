var audio = new Audio('assets/sentmessage.mp3');
var contactString = `<div class='social'> 
                        <a target='_blank' href='tel:+918438678326'>
                         <div class='socialItem' id='call'>
                         <img class='socialItemI' src='images/phone.svg'/>
                         <label class='number'>8438678326</label></div> </a>
                          <a href='mailto:sabarishr.21it@kongu.edu'> 
                            <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div>
                          </a> 
                          <a target='_blank' href='https://github.com/rs-drawz'> 
                                <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> 
                          </a> 
                          <a target='_blank' href='https://www.instagram.com/rs_drawz/'> <div class='socialItem'>
                            <img class='socialItemI' src='images/instagram.svg' alt=''> </div>
                          </a> 
                          <a href='https://www.linkedin.com/in/rsdrawz/' target='_blank' rel='noopener noreferrer'>
                            <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div>
                          </a> 
                        </div>`;
var resumeString = `<img src='images/resumeThumbnail.png' class='resumeThumbnail'>
                        <div class='downloadSpace'><div class='pdfname'>
                            <img src='images/pdf.png'>
                                <label>Sabarish Ramesh Resume.pdf</label>
                                </div><a href='assets/21ITR092-resume.pdf' download='Sabarish_Ramesh.pdf'>
                                <img class='download' src='images/downloadIcon.svg'></a></div>`;
var addressString = `<div class='mapview'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d730.2877623285725!2d77.88595931231514!3d11.06333189167394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725177473880!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <label class='add'>
                        <address>
                            Salaipudhur<br>
                            No:10,salaipudhur main road, Erode district, Tamil Nadu, INDIA 638151
                        </address>
                    </label`
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}
//toggle open and close using conditional 

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    //1
    var myLI = document.createElement("li");
    //2
    var myDiv = document.createElement("div");
    //overall div green box ans hold text message and timestamp
    //3
    var greendiv = document.createElement("div");
    //timestamp
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    //position of user text in right
    myDiv.setAttribute("class", "sent");
    //color of user text
    greendiv.setAttribute("class", "green");
    //timestamp will be added
    dateLabel.setAttribute("class", "dateLabel");
    //setting user input text
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage(`Hello  👋🏻,<br><br>My name is <span class='bold'>
                    <a class='alink'>Sabarish Ramesh</a>.
                    </span><br><br>I am a IT student at <span class='bold'>KEC👨🏻‍💻📚</span>
                    <br><br>Send <span class='bold'>'help'</span> to know more about me.<br>`);
            }, 2000);
            break;
        case "help":
            sendTextMessage(`<span class='sk'>
                Send Keyword to get what you want to know about me...<br>
                e.g<br><span class='bold'>'skills'</span> - to know my skills<br>
                <span class='bold'>'resume'</span> - to get my resume<br>
                <span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>
                'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br>
                <span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>`);
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage(`<span class='sk'>
                I am currently pursuing B.Tech degree in Information Technology.<br>
                <br>I can comfortably write code in following languages :<br>
                <span class='bold'>Java<br>JavaScript<br>CSS<br>HTML</span><br>
                <br>I know the following frameworks :<span class='bold'>
                <br>React.js<br>Express.js</span><br>
                <br>I know the following runtime environment:<span class='bold'>
                <br>Node.js</span><br>
                <br>I know the following Database:<span class='bold'>
                <br>MongoDB</span><br>
                <br>I am learning<span class='bold'>
                <br>Vue.js <br>AWS</span><br>
                <br>Favourite IDE:Visual Studio Code(VScode)</span>`);
            break;

        case "education":
            sendTextMessage(`<span class='sk'>
                    <span class='bold'>
                    B.Tech in Information Technology Engineering
                    </span><br>
                    Kongu Engineering College (KEC)
                    Expected Graduation: 2025<br>
                <br>
                    <span class='bold'>
                    Secondary School <br>
                    </span>
                    Cheran Matric Hr Sec School Graduated: 2021
                    </span>`);
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "hello":
            sendTextMessage("HI there!!<br>Type<span class='bold'>'Help' </span>to know more");
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 Here is my portfolio!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href=''https://rs-drawz.github.io/Sabarish_Portfolio''><span class='bold'>Sabarish Ramesh</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/rs-drawz'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.<br>Make sure you entered the query correctly");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}


//function to send the message
function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    //holds the data
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function playSound() {
    audio.play();
}
