// Show current time
const timeElement = document.getElementById("time");
timeElement.innerText = new Date().toLocaleString();

// Simulate status change (for demo)
setTimeout(() => {
    const status = document.getElementById("status");
    const aiOutput = document.getElementById("ai-output");

    status.innerText = "FAILED ❌";
    status.classList.remove("success");
    status.classList.add("fail");

    aiOutput.innerText =
        "AI Suggestion: Test failed due to assertion error. Check expected value in test.js.";
}, 5000);
