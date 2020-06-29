  
function displayPosition(company, job, desc) {
    console.log("* " + job + " at " + company + " - " + desc);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}

console.log("irtaza gillani".toUpperCase());
console.log("Career: Full Stack Developer");
console.log("Description: A pretty cool dude");
console.log('my interests:');
console.log('* hooubco');
console.log('* munco');
console.log('* bulaco');
console.log('* huco');
console.log('* coco');
console.log('* babo');
console.log('my previous exp:');
displayPosition('IT','enginner','im engi');
displayPosition('CS','WEB','im engi');
displayPosition('SE','JAVA','im engi');
displayPosition('EE','MOGA','im engi');
displayPosition('BB','I2Q','im engi');
console.log('My skills: ');
displaySkill('WEB DEV',true);
displaySkill('software enginner',false);
displaySkill('APP DEV',true);
displaySkill('frontend',false);
displaySkill('FULL STACK',true);
