const typingElement = document.getElementById('typing-effect');
const lines = [
  'UNIDENTIFIED ORGANIC LIFEFORM DETECTED',
  'RUNNING PROFILE PROTOCOL (RPP) FOR @ABHIJIT',
  'NAME: ABHIJIT SHINDE',
  'OCCUPATION: BACKEND DEVELOPER',
  'BACKEND DEVELOPMENT CORE: C# | .NET',
  'PROGRAMMING LANGUAGES: C# | JavaScript',
  'DATABASES: SQL | MySQL | MongoDB',
  'CACHING: Redis',
  'MESSAGE BROKERS: RabbitMQ | Kafka',
  'VERSION CONTROL: Git',
  'OPERATING SYSTEM: Linux',
  'DEVOPS TOOLS: Jira | Docker | Kubernetes',
  'LEARNING: DevOps Practices and Tools'
  ];

const typingSpeed = 100; // Adjust typing speed (in milliseconds)

let currentLineIndex = 0;
let currentCharIndex = 0;

function type() {
  if (currentLineIndex >= lines.length) {
    return; // Stop typing animation after printing all lines
  }

  
  const currentLine = lines[currentLineIndex];
  let content = '';
  for (let i = 0; i <= currentLineIndex; i++) {
    if (i === currentLineIndex) {
      content += currentLine.substring(0, currentCharIndex + 1);
    } else {
      content += lines[i];
    }
    content += '<br>';
  }

  typingElement.innerHTML = content;

  if (currentCharIndex >= currentLine.length) {
    currentLineIndex++;
    currentCharIndex = 0;
    setTimeout(type, 1500); // Wait before printing the next line
  } else {
    currentCharIndex++;
    setTimeout(type, typingSpeed);
  }
}

// Start the typing animation
type();
